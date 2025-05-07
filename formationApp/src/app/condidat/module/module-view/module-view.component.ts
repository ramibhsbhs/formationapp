import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CondidatService } from '../../core/condidat.service';
import { CondidatFormation, Module } from '../../core/models';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { AttachmentService } from 'src/app/core/services/attachment.service';

@Component({
  selector: 'app-module-view',
  templateUrl: './module-view.component.html',
  styleUrls: ['./module-view.component.scss']
})
export class ModuleViewComponent implements OnInit {
  // Paramètres d'URL
  formationId: number = 0;
  moduleId: number = 0;
  sessionId: number | null = null;

  // Données
  loading: boolean = true;
  error: string | null = null;
  formation: CondidatFormation | null = null;
  currentModule: Module | null = null;
  nextModuleId: number | null = null;
  isLastModule: boolean = false;
  currentSession: any = null;

  // Données du quiz
  moduleQuiz: any = null;
  quizResults: any = null;
  loadingQuiz: boolean = false;
  quizError: string | null = null;
  canTakeQuiz: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private condidatService: CondidatService,
    private toaster: ToasterService,
    private attachmentService: AttachmentService
  ) { }

  ngOnInit(): void {
    // Récupérer les paramètres de l'URL
    this.route.params.subscribe(params => {
      this.formationId = +params['formationId'];
      this.moduleId = +params['moduleId'];

      // Récupérer le sessionId s'il existe
      if (params['sessionId']) {
        this.sessionId = +params['sessionId'];
      }

      // Charger les données
      this.loadFormation();
    });
  }

  /**
   * Charge les données de la formation
   */
  loadFormation(): void {
    this.loading = true;
    this.error = null;

    this.condidatService.getFormation(this.formationId).subscribe({
      next: (formation) => {
        this.formation = formation;

        // Trier les modules par position
        if (formation.modules) {
          formation.modules.sort((a, b) => a.position - b.position);
        }

        // Trouver le module actuel
        this.currentModule = formation.modules.find(m => m.id === this.moduleId) || null;

        if (!this.currentModule) {
          this.error = 'Module non trouvé';
          this.loading = false;
          return;
        }

        // Trouver la session si un sessionId est fourni
        if (this.sessionId && formation.sessions) {
          this.currentSession = formation.sessions.find(s => s.sessionId === this.sessionId);

          if (!this.currentSession) {
            this.toaster.showInfo('Session non trouvée. Vous êtes en mode consultation.', 'Attention');
          }
        }

        // Trouver le module suivant
        const currentIndex = formation.modules.findIndex(m => m.id === this.moduleId);
        if (currentIndex !== -1 && currentIndex < formation.modules.length - 1) {
          this.nextModuleId = formation.modules[currentIndex + 1].id;
        } else {
          this.isLastModule = true;
        }

        this.loading = false;

        // Charger les informations du quiz du module
        this.loadModuleQuiz();
      },
      error: (err) => {
        this.error = err?.message || 'Erreur lors du chargement de la formation';
        this.loading = false;
      }
    });
  }

  /**
   * Charge les informations du quiz associé au module
   */
  loadModuleQuiz(): void {
    if (!this.currentModule || !this.currentModule.quizId) {
      // Ce module n'a pas de quiz associé
      return;
    }

    this.loadingQuiz = true;
    this.quizError = null;

    // D'abord, vérifier si l'utilisateur a déjà passé le quiz
    this.loadQuizResults();

    // Ensuite, vérifier si l'utilisateur peut passer le quiz
    this.checkQuizEligibility();
  }

  /**
   * Charge les résultats du quiz du module pour l'utilisateur courant
   */
  loadQuizResults(): void {
    if (!this.currentModule) return;

    this.condidatService.getModuleQuizResults(this.formationId, this.moduleId, this.sessionId || undefined)
      .subscribe({
        next: (results) => {
          this.quizResults = results;
          console.log('Résultats du quiz:', results);
        },
        error: (err) => {
          // Ignorer les erreurs ici, car l'utilisateur peut ne pas avoir encore passé le quiz
          console.log('Pas de résultats de quiz disponibles:', err);
        }
      });
  }

  /**
   * Vérifie si l'utilisateur peut passer le quiz du module
   */
  checkQuizEligibility(): void {
    if (!this.currentModule || !this.currentModule.quizId) return;

    this.condidatService.checkModuleQuizEligibility(
      this.formationId,
      this.moduleId,
      this.sessionId || undefined
    ).subscribe({
      next: (response) => {
        this.canTakeQuiz = response.canTakeQuiz;
        this.moduleQuiz = {
          id: response.quizId,
          title: response.moduleTitle,
          previousAttempt: response.previousAttempt
        };
        this.loadingQuiz = false;
      },
      error: (err) => {
        this.quizError = err?.message || 'Erreur lors de la vérification de l\'éligibilité au quiz';
        this.loadingQuiz = false;
      }
    });
  }

  /**
   * Continue la progression : passe au quiz du module, au module suivant ou au quiz final
   */
  completeAndContinue(): void {
    if (!this.formation || !this.currentModule) return;

    // Vérifier si le module a un quiz et si l'utilisateur peut le passer
    if (this.currentModule.quizId) {
      // Vérifier si l'utilisateur peut passer le quiz (en fonction du nombre de tentatives)
      if (this.hasAttemptedModuleQuiz() && !this.hasPassedModuleQuiz()) {
        // L'utilisateur a déjà tenté le quiz mais ne l'a pas réussi
        if (this.canRetakeQuiz()) {
          // L'utilisateur peut repasser le quiz
          this.goToModuleQuiz();
          return;
        } else {
          // L'utilisateur a atteint le nombre maximum de tentatives
          this.toaster.showInfo('Vous avez atteint le nombre maximum de tentatives pour ce quiz.', 'Information');

          // Si la formation permet de passer le quiz final sans avoir réussi tous les modules
          if (this.formation.canPassFinalWithoutModules) {
            // On continue quand même
            this.currentModule.isCompleted = true;
          } else {
            // Sinon, on ne peut pas continuer
            return;
          }
        }
      } else if (!this.hasAttemptedModuleQuiz() && this.canTakeQuiz) {
        // L'utilisateur n'a pas encore tenté le quiz et peut le passer
        this.goToModuleQuiz();
        return;
      }
    }

    // Marquer le module comme complété
    this.currentModule.isCompleted = true;

    // Si c'est le dernier module, rediriger vers le quiz final
    if (this.isLastModule) {
      this.toaster.showInfo('Vous avez terminé tous les modules. Vous allez être redirigé vers le quiz final.', 'Félicitations');

      // Rediriger vers le quiz final avec la session si disponible
      setTimeout(() => {
        this.goToFinalQuiz();
      }, 2000);

      return;
    }

    // Sinon, passer au module suivant
    if (this.nextModuleId) {
      this.goToNextModule();
    }
  }

  /**
   * Redirige vers le quiz du module actuel
   */
  goToModuleQuiz(): void {
    if (!this.currentModule || !this.currentModule.quizId) return;

    // Vérifier si le module a un quiz associé
    if (!this.currentModule.quizId) {
      this.toaster.showInfo('Ce module n\'a pas de quiz associé.', 'Information');
      return;
    }

    // Construire les paramètres de requête
    const queryParams: any = {
      formationId: this.formationId,
      moduleId: this.moduleId,
      type: 'module'
    };

    // Ajouter le sessionId s'il existe
    if (this.sessionId) {
      queryParams.sessionId = this.sessionId;
    }

    // Naviguer vers la page de validation du quiz
    this.router.navigate(['/condidat/validate-quiz'], { queryParams });

    // Afficher un message de débogage
    console.log('Navigation vers le quiz du module avec les paramètres :', queryParams);
  }

  /**
   * Redirige vers le module suivant
   */
  goToNextModule(): void {
    if (!this.nextModuleId) return;

    if (this.sessionId) {
      // Inclure la session dans la navigation
      this.router.navigate(['/condidat/module', this.formationId, this.nextModuleId, this.sessionId]);
    } else {
      // Navigation sans session
      this.router.navigate(['/condidat/module', this.formationId, this.nextModuleId]);
    }
  }

  /**
   * Redirige vers le quiz final
   */
  goToFinalQuiz(): void {
    if (!this.formation) return;

    // Vérifier si la formation a un quiz final
    if (!this.formation.quizId) {
      this.toaster.showInfo('Cette formation n\'a pas de quiz final.', 'Information');
      return;
    }

    // Vérifier si l'utilisateur a déjà passé le quiz final avec succès
    if (this.formation.finalQuizPassed === true) {
      this.toaster.showInfo('Vous avez déjà réussi le quiz final de cette formation.', 'Information');
      return;
    }

    // Utiliser directement l'API pour vérifier l'éligibilité au quiz final
    // Le backend prendra en compte la propriété canPassFinalWithoutModules
    this.condidatService.checkFinalQuizEligibility(this.formationId, this.sessionId || undefined).subscribe({
      next: (response) => {
        if (response.canTakeQuiz) {
          // Si l'utilisateur peut passer le quiz final, naviguer vers la page de validation
          this.navigateToFinalQuiz();
        } else {
          // Si l'utilisateur ne peut pas passer le quiz final, afficher un message
          if (response.previousAttempt && response.previousAttempt.passedStatus) {
            this.toaster.showInfo('Vous avez déjà réussi le quiz final de cette formation.', 'Information');
          } else if (response.previousAttempt) {
            this.toaster.showInfo('Vous avez déjà tenté le quiz final. Veuillez réessayer plus tard.', 'Information');
          } else {
            this.toaster.showInfo('Vous devez d\'abord réussir tous les quiz des modules de la formation.', 'Information');
          }
        }
      },
      error: (err) => {
        this.toaster.showError('Erreur lors de la vérification de l\'éligibilité au quiz final.', 'Erreur');
        console.error('Erreur lors de la vérification de l\'éligibilité au quiz final:', err);
      }
    });
  }

  /**
   * Navigue vers la page du quiz final
   */
  private navigateToFinalQuiz(): void {
    const queryParams: any = {
      formationId: this.formationId,
      type: 'final'
    };

    if (this.sessionId) {
      queryParams.sessionId = this.sessionId;
    }

    this.router.navigate(['/condidat/validate-quiz'], { queryParams });
  }

  /**
   * Vérifie si l'utilisateur a déjà passé le quiz du module avec succès
   */
  hasPassedModuleQuiz(): boolean {
    if (!this.quizResults) return false;
    if (!this.currentModule || !this.currentModule.quizId) return false;

    // Vérifier que le quiz passé correspond bien au quiz du module actuel
    if (this.quizResults.quizId !== this.currentModule.quizId) return false;

    return this.quizResults.hasPassed === true;
  }

  /**
   * Vérifie si l'utilisateur a déjà tenté de passer le quiz du module
   */
  hasAttemptedModuleQuiz(): boolean {
    if (!this.quizResults) return false;
    if (!this.currentModule || !this.currentModule.quizId) return false;

    // Vérifier que le quiz tenté correspond bien au quiz du module actuel
    if (this.quizResults.quizId !== this.currentModule.quizId) return false;

    return this.quizResults.hasAttempted === true;
  }

  /**
   * Vérifie si l'utilisateur peut encore passer le quiz en fonction du nombre de tentatives
   */
  canRetakeQuiz(): boolean {
    if (!this.quizResults || !this.currentModule) return true;

    // Si l'utilisateur a déjà réussi le quiz, il ne peut pas le repasser
    if (this.hasPassedModuleQuiz()) return false;

    // Si le nombre de tentatives est illimité (0), l'utilisateur peut toujours repasser le quiz
    if (this.currentModule.maxAttempts === 0) return true;

    // Vérifier si l'utilisateur a atteint le nombre maximum de tentatives
    return (this.quizResults.attemptCount || 0) < this.currentModule.maxAttempts;
  }

  /**
   * Obtient le texte du bouton de continuation en fonction de l'état actuel
   */
  getContinueButtonText(): string {
    if (this.currentModule?.quizId && this.canTakeQuiz) {
      return 'Passer le quiz du module';
    } else if (this.isLastModule) {
      return 'Terminer et passer au quiz final';
    } else {
      return 'Module suivant';
    }
  }

  /**
   * Retourne à la page de détails de la formation
   */
  goBackToFormation(): void {
    this.router.navigate(['/condidat/formations', this.formationId]);
  }

  /**
   * Obtient l'icône de fichier en fonction du type
   * @param fileType Type de fichier
   * @returns Chemin vers l'icône
   */
  getFileIcon(fileType: string): string {
    return this.attachmentService.getFileIcon(fileType);
  }

  /**
   * Obtient la couleur de l'icône de fichier en fonction du type
   * @param fileType Type de fichier
   * @returns Classe CSS pour la couleur
   */
  getFileIconColor(fileType: string): string {
    return this.attachmentService.getFileIconColor(fileType);
  }

  /**
   * Obtient le nom du fichier à partir de l'URL
   * @param url URL du fichier
   * @returns Nom du fichier
   */
  getFileName(url: string): string {
    return url.split('/').pop() || url;
  }
}
