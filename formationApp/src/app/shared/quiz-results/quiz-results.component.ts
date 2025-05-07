import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { FormationResults, QuizAttempt, AttemptType } from 'src/app/core/models/quiz-result.model';
import { QuizService } from 'src/app/core/services/quiz.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subscription } from 'rxjs';
import html2pdf from 'html2pdf.js';

// Enum pour les types d'utilisateurs
export enum UserType {
  Admin = 'admin',
  Manager = 'manager',
  Supervisor = 'supervisor'
}

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.scss']
})
export class QuizResultsComponent implements OnInit, OnDestroy {
  @Input() formationId!: number;
  @Input() userType: UserType = UserType.Admin; // Par défaut, on considère que c'est un admin
  @ViewChild('pdfContent') pdfContent!: ElementRef;

  formationResults!: FormationResults;
  loading = false;
  error: string | null = null;
  sortField: string = 'score';
  sortDirection: 'asc' | 'desc' = 'desc';
  today = new Date();
  generatingPdf = false;

  // Filtres
  showOnlyPassed = false;
  showOnlyFinalQuiz = false;
  searchTerm = '';

  quizService = inject(QuizService);
  authService = inject(AuthService);

  private subscriptions: Subscription[] = [];

  ngOnInit(): void {
    if (this.formationId) {
      this.loadResults();
    }
  }

  loadResults(): void {
    this.loading = true;

    // Utiliser la méthode appropriée en fonction du type d'utilisateur
    let resultsObservable;

    switch (this.userType) {
      case UserType.Supervisor:
        resultsObservable = this.quizService.getQuizAttemptsByFormationForSupervisor(this.formationId);
        break;
      case UserType.Admin:
      case UserType.Manager:
      default:
        resultsObservable = this.quizService.getQuizAttemptsByFormation(this.formationId);
        break;
    }

    const subscription = resultsObservable.subscribe({
      next: (results) => {
        this.formationResults = results;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des résultats:', err);
        this.error = 'Impossible de charger les résultats. Veuillez réessayer plus tard.';
        this.loading = false;
      }
    });

    this.subscriptions.push(subscription);
  }

  /**
   * Trie les tentatives de quiz selon le champ spécifié
   * @param field Champ à trier
   */
  sortBy(field: string): void {
    if (this.sortField === field) {
      // Inverser la direction si on clique sur le même champ
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'desc'; // Par défaut, tri descendant
    }
  }

  /**
   * Filtre et trie les tentatives de quiz
   * @returns Tentatives filtrées et triées
   */
  get filteredAttempts(): QuizAttempt[] {
    if (!this.formationResults?.attempts) return [];

    let filtered = [...this.formationResults.attempts];

    // Filtrer par type de quiz (module/final)
    if (this.showOnlyFinalQuiz) {
      filtered = filtered.filter(attempt => attempt.attemptType === AttemptType.Formation);
    }

    // Filtrer par réussite
    if (this.showOnlyPassed) {
      filtered = filtered.filter(attempt => attempt.hasPassed);
    }

    // Filtrer par terme de recherche
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(attempt =>
        attempt.user?.userName?.toLowerCase().includes(term) ||
        attempt.user?.email?.toLowerCase().includes(term) ||
        attempt.session?.title?.toLowerCase().includes(term)
      );
    }

    // Trier les résultats
    filtered.sort((a, b) => {
      let comparison = 0;

      switch (this.sortField) {
        case 'score':
          comparison = a.score - b.score;
          break;
        case 'date':
          comparison = new Date(a.attemptedAt).getTime() - new Date(b.attemptedAt).getTime();
          break;
        case 'user':
          comparison = (a.user?.userName || '').localeCompare(b.user?.userName || '');
          break;
        case 'session':
          comparison = (a.session?.title || '').localeCompare(b.session?.title || '');
          break;
        default:
          comparison = a.score - b.score;
      }

      return this.sortDirection === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }

  /**
   * Calcule le taux de réussite des tentatives
   * @param type Type de quiz (undefined = tous, 0 = module, 1 = formation)
   * @returns Pourcentage de réussite
   */
  getSuccessRate(type?: AttemptType): number {
    if (!this.formationResults?.attempts || this.formationResults.attempts.length === 0) {
      return 0;
    }

    let attempts = this.formationResults.attempts;

    // Filtrer par type si spécifié
    if (type !== undefined) {
      attempts = attempts.filter(a => a.attemptType === type);
    }

    if (attempts.length === 0) {
      return 0;
    }

    const passedCount = attempts.filter(a => a.hasPassed).length;
    return (passedCount / attempts.length) * 100;
  }

  /**
   * Calcule le score moyen des tentatives
   * @param type Type de quiz (undefined = tous, 0 = module, 1 = formation)
   * @returns Score moyen
   */
  getAverageScore(type?: AttemptType): number {
    if (!this.formationResults?.attempts || this.formationResults.attempts.length === 0) {
      return 0;
    }

    let attempts = this.formationResults.attempts;

    // Filtrer par type si spécifié
    if (type !== undefined) {
      attempts = attempts.filter(a => a.attemptType === type);
    }

    if (attempts.length === 0) {
      return 0;
    }

    const totalScore = attempts.reduce((sum, a) => sum + a.score, 0);
    return totalScore / attempts.length;
  }

  /**
   * Retourne le nombre de tentatives
   * @param type Type de quiz (undefined = tous, 0 = module, 1 = formation)
   * @returns Nombre de tentatives
   */
  getAttemptsCount(type?: AttemptType): number {
    if (!this.formationResults?.attempts) {
      return 0;
    }

    if (type !== undefined) {
      return this.formationResults.attempts.filter(a => a.attemptType === type).length;
    }

    return this.formationResults.attempts.length;
  }

  /**
   * Vérifie si une réponse a été sélectionnée
   * @param questionId ID de la question
   * @param answerId ID de la réponse
   * @returns Vrai si la réponse a été sélectionnée
   */
  isAnswerSelected(_questionId: number, _answerId: number): boolean {
    // Cette méthode est utilisée dans le template pour vérifier si une réponse a été sélectionnée
    // Les paramètres sont préfixés avec _ pour indiquer qu'ils ne sont pas utilisés
    return true;
  }

  /**
   * Génère un PDF des résultats en utilisant html2pdf.js
   */
  generatePDF(): void {
    this.generatingPdf = true;

    // Attendre que l'interface soit mise à jour pour afficher l'indicateur de chargement
    setTimeout(() => {
      const content = this.pdfContent.nativeElement;
      const filename = `resultats_${this.formationResults.formationTitle.replace(/\s+/g, '_')}.pdf`;

      // Options pour html2pdf
      const options = {
        margin: 10,
        filename: filename,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: true,
          letterRendering: true
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
          compress: true
        }
      };

      try {
        // Générer le PDF
        html2pdf()
          .from(content)
          .set(options)
          .save();

        // Force la fin du chargement après 3 secondes
        setTimeout(() => {
          this.generatingPdf = false;
        }, 3000);
      } catch (err) {
        console.error('Erreur lors de la génération du PDF:', err);
        this.generatingPdf = false;
      }
    }, 100);
  }

  /**
   * Imprime les résultats (méthode d'impression du navigateur)
   */
  printResults(): void {
    window.print();
  }

  /**
   * Formate une date pour l'affichage
   * @param date Date à formater
   * @returns Date formatée
   */
  formatDate(date: Date | string): string {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  /**
   * Formate une date en format court (jour/mois/année)
   * @param date Date à formater
   * @returns Date formatée
   */
  formatDateShort(date: Date | string): string {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }



  /**
   * Détermine le numéro de tentative pour un quiz donné
   * @param attempt Tentative de quiz
   * @returns Numéro de la tentative
   */
  getAttemptNumber(attempt: QuizAttempt): number {
    if (!this.formationResults?.attempts) return 1;

    // Filtrer les tentatives par utilisateur, session, module/formation et type
    const userAttempts = this.formationResults.attempts.filter(a =>
      a.userId === attempt.userId &&
      a.sessionId === attempt.sessionId &&
      a.attemptType === attempt.attemptType &&
      (attempt.attemptType === AttemptType.Module ? a.moduleId === attempt.moduleId : true)
    );

    // Trier par date
    userAttempts.sort((a, b) => new Date(a.attemptedAt).getTime() - new Date(b.attemptedAt).getTime());

    // Trouver l'index de la tentative actuelle
    const index = userAttempts.findIndex(a => a.id === attempt.id);
    return index !== -1 ? index + 1 : 1;
  }

  /**
   * Vérifie si un utilisateur a fait plusieurs tentatives pour un quiz donné
   * @param attempt Tentative de quiz
   * @returns Vrai si l'utilisateur a fait plusieurs tentatives
   */
  hasMultipleAttempts(attempt: QuizAttempt): boolean {
    if (!this.formationResults?.attempts) return false;

    // Filtrer les tentatives par utilisateur, session, module/formation et type
    const userAttempts = this.formationResults.attempts.filter(a =>
      a.userId === attempt.userId &&
      a.sessionId === attempt.sessionId &&
      a.attemptType === attempt.attemptType &&
      (attempt.attemptType === AttemptType.Module ? a.moduleId === attempt.moduleId : true)
    );

    return userAttempts.length > 1;
  }

  /**
   * Génère un texte décrivant l'historique des tentatives
   * @param attempt Tentative de quiz
   * @returns Texte décrivant l'historique des tentatives
   */
  getAttemptHistoryText(attempt: QuizAttempt): string {
    if (!this.formationResults?.attempts) return '';

    // Filtrer les tentatives par utilisateur, session, module/formation et type
    const userAttempts = this.formationResults.attempts.filter(a =>
      a.userId === attempt.userId &&
      a.sessionId === attempt.sessionId &&
      a.attemptType === attempt.attemptType &&
      (attempt.attemptType === AttemptType.Module ? a.moduleId === attempt.moduleId : true)
    );

    // Trier par date
    userAttempts.sort((a, b) => new Date(a.attemptedAt).getTime() - new Date(b.attemptedAt).getTime());

    const totalAttempts = userAttempts.length;
    const successfulAttempts = userAttempts.filter(a => a.hasPassed).length;

    return `${successfulAttempts}/${totalAttempts} tentatives réussies`;
  }

  /**
   * Retourne une chaîne formatée avec les dates de début et de fin de session
   * @param attempt Tentative de quiz
   * @returns Chaîne formatée avec les dates de début et de fin de session
   */
  getSessionDateRange(attempt: QuizAttempt): string {
    if (!attempt.session?.startDate || !attempt.session?.endDate) {
      return '';
    }

    return `${this.formatDateShort(attempt.session.startDate)} - ${this.formatDateShort(attempt.session.endDate)}`;
  }

  /**
   * Tronque un texte s'il dépasse une certaine longueur
   * @param text Texte à tronquer
   * @param maxLength Longueur maximale (défaut: 15)
   * @returns Texte tronqué avec "..." si nécessaire
   */
  truncateText(text: string, maxLength: number = 15): string {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }

  ngOnDestroy(): void {
    // Se désabonner de tous les abonnements pour éviter les fuites de mémoire
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
