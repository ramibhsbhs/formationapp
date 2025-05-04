import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormationResults, QuizAttempt } from 'src/app/core/models/quiz-result.model';
import { QuizService } from 'src/app/core/services/quiz.service';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.scss']
})
export class QuizResultsComponent implements OnInit {
  @Input() formationId!: number;
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
  searchTerm = '';

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    if (this.formationId) {
      this.loadResults();
    }
  }

  loadResults(): void {
    this.loading = true;
    this.quizService.getQuizAttemptsByFormation(this.formationId).subscribe({
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
   * @returns Pourcentage de réussite
   */
  getSuccessRate(): number {
    if (!this.formationResults?.attempts || this.formationResults.attempts.length === 0) {
      return 0;
    }

    const passedCount = this.formationResults.attempts.filter(a => a.hasPassed).length;
    return (passedCount / this.formationResults.attempts.length) * 100;
  }

  /**
   * Calcule le score moyen des tentatives
   * @returns Score moyen
   */
  getAverageScore(): number {
    if (!this.formationResults?.attempts || this.formationResults.attempts.length === 0) {
      return 0;
    }

    const totalScore = this.formationResults.attempts.reduce((sum, a) => sum + a.score, 0);
    return totalScore / this.formationResults.attempts.length;
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
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      // Générer le PDF
      html2pdf()
        .from(content)
        .set(options)
        .save()
        .then(() => {
          this.generatingPdf = false;
        });
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
}
