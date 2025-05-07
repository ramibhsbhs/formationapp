import { Component, OnInit } from '@angular/core';
import { CondidatFormation } from '../../core/models';
import { CondidatService } from '../../core/condidat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { AttachmentService } from 'src/app/core/services/attachment.service';
import { ToasterService } from 'src/app/core/services/toaster.service';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.scss']
})
export class FormationDetailsComponent implements OnInit {
  loading = true;
  error: string | null = null;
  formation: CondidatFormation | null = null;

  constructor(
    private condidatService: CondidatService,
    private route: ActivatedRoute,
    private router: Router,
    private attachmentService: AttachmentService,
    private toaster: ToasterService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadFormation(id);
  }

  loadFormation(id: number) {
    this.loading = true;
    this.condidatService.getFormation(id).subscribe({
      next: (formation) => {
        this.formation = formation;

        // Initialiser les propriétés des modules
        if (formation.modules && formation.modules.length > 0) {
          // Trier les modules par position
          formation.modules.sort((a, b) => a.position - b.position);

          // Le premier module est toujours accessible
          formation.modules[0].isAccessible = true;

          // Récupérer la session disponible
          const availableSession = this.getAvailableSession();

          if (availableSession && availableSession.sessionId) {
            // Récupérer la progression de l'utilisateur pour cette formation
            this.condidatService.getFormationProgress(formation.id, availableSession.sessionId).subscribe({
              next: (progress: Array<any>) => {
                console.log('Progression récupérée:', progress);

                // Marquer les modules comme complétés en fonction de la progression
                this.updateModulesProgress(progress);
              },
              error: (err) => {
                console.error('Erreur lors de la récupération de la progression:', err);
              }
            });
          }
        }

        this.loading = false;
        console.log('Formation chargée:', this.formation);
        this.initCountdown();
      },
      error: (err) => {
        this.error = err?.message || 'Failed to load formation.';
        this.loading = false;
      }
    });
  }


  /**
   * Get file icon based on file type
   * @param fileType The type of the file
   * @returns Path to the icon image
   */
  getFileIcon(fileType: string): string {
    return this.attachmentService.getFileIcon(fileType);
  }

  /**
   * Get file icon color based on file type
   * @param fileType The type of the file
   * @returns Tailwind CSS color class
   */
  getFileIconColor(fileType: string): string {
    return this.attachmentService.getFileIconColor(fileType);
  }

  /**
   * Extract filename from URL
   * @param url The URL of the file
   * @returns The filename
   */
  getFileName(url: string): string {
    return this.attachmentService.getFileName(url);
  }



  // session timeout
  // Countdown properties
  countdownText = '';
  countdownState: 'upcoming' | 'ongoing' | 'finished' = 'upcoming';
  private timerSub?: Subscription;

  ngOnDestroy(): void {
    this.timerSub?.unsubscribe();
  }
  formatDuration(ms: number): string {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    const parts: string[] = [];
    if (days) parts.push(`${days}d`);
    if (hours) parts.push(`${hours}h`);
    if (minutes) parts.push(`${minutes}m`);
    parts.push(`${seconds}s`);
    return parts.join(' ');
  }
  initCountdown() {
    if (!this.formation?.sessions?.length) return;
    const session = this.formation.sessions[this.formation.sessions.length - 1];

    this.timerSub = interval(1000).subscribe(() => {
      const now = new Date();
      const start = new Date(session.startDate);
      const end = new Date(session.endDate);
      let diffMs: number;

      if (now < start) {
        this.countdownState = 'upcoming';
        diffMs = start.getTime() - now.getTime();
      } else if (now >= start && now <= end) {
        this.countdownState = 'ongoing';
        diffMs = end.getTime() - now.getTime();
      } else {
        this.countdownState = 'finished';
        this.countdownText = '';
        this.timerSub?.unsubscribe();
        return;
      }

      this.countdownText = this.formatDuration(diffMs);
    });
  }

  /**
   * Vérifie si l'utilisateur a déjà tenté de passer la formation
   * @returns true si l'utilisateur a déjà tenté de passer la formation, false sinon
   */
  hasAttemptedFormation(): boolean {
    if (!this.formation || !this.formation.sessions) return false;

    // Vérifier si l'utilisateur a déjà tenté de passer au moins une session
    return this.formation.sessions.some(session => session.hasAttempted);
  }

  /**
   * Vérifie si l'utilisateur a réussi la formation
   * @returns true si l'utilisateur a réussi la formation, false sinon
   */
  hasPassedFormation(): boolean {
    if (!this.formation || !this.formation.sessions) return false;

    // Vérifier si l'utilisateur a réussi le quiz final
    // Pour cela, nous devons vérifier si l'utilisateur a réussi au moins une session
    // ET si le quiz final a été réussi

    // 1. Vérifier si l'utilisateur a réussi au moins une session
    const hasPassedSession = this.formation.sessions.some(session => session.hasAttempted && session.score >= 70);

    // 2. Vérifier si l'utilisateur a un quiz final réussi
    const hasFinalQuizPassed = this.formation.finalQuizPassed === true;

    // L'utilisateur a réussi la formation s'il a réussi au moins une session ET le quiz final
    return hasPassedSession && hasFinalQuizPassed;
  }

  /**
   * Vérifie si l'utilisateur a des sessions disponibles pour passer un test
   * @returns true si l'utilisateur a des sessions disponibles, false sinon
   */
  hasAvailableSessions(): boolean {
    if (!this.formation || !this.formation.sessions || this.formation.sessions.length === 0) return false;

    // Si l'utilisateur a déjà réussi la formation, il n'a pas besoin de passer d'autres tests
    if (this.hasPassedFormation()) return false;

    // Vérifier s'il y a des sessions disponibles
    const now = new Date();
    return this.formation.sessions.some(session => {
      if (!session.startDate || !session.endDate) return false;

      const start = new Date(session.startDate);
      const end = new Date(session.endDate);

      // La session est disponible si :
      // 1. La date actuelle est entre la date de début et la date de fin
      // 2. ET (l'utilisateur n'a pas encore passé le test OU il a échoué au test et peut le repasser)
      return now >= start && now <= end &&
        (session.canRepass === true || (!session.hasAttempted) || (session.hasAttempted === true && session.score < 70));
    });
  }

  /**
   * Vérifie si la session est actuellement active (dans la période de dates)
   * @param session La session à vérifier
   * @returns true si la session est active, false sinon
   */
  isSessionActive(session: any): boolean {
    if (!session || !session.startDate || !session.endDate) return false;

    const now = new Date();
    const start = new Date(session.startDate);
    const end = new Date(session.endDate);

    return now >= start && now <= end;
  }

  /**
   * Vérifie si toutes les sessions sont terminées
   * @returns true si toutes les sessions sont terminées, false sinon
   */
  areAllSessionsEnded(): boolean {
    if (!this.formation || !this.formation.sessions || this.formation.sessions.length === 0) return false;

    const now = new Date();
    return this.formation.sessions.every(session => {
      if (!session.endDate) return false;
      const end = new Date(session.endDate);
      return now > end;
    });
  }

  /**
   * Vérifie si toutes les sessions n'ont pas encore commencé
   * @returns true si toutes les sessions n'ont pas encore commencé, false sinon
   */
  areAllSessionsNotStarted(): boolean {
    if (!this.formation || !this.formation.sessions || this.formation.sessions.length === 0) return false;

    const now = new Date();
    return this.formation.sessions.every(session => {
      if (!session.startDate) return false;
      const start = new Date(session.startDate);
      return now < start;
    });
  }

  /**
   * Démarre ou continue la formation en redirigeant vers le module approprié
   */
  startFormation(): void {
    if (!this.formation || !this.formation.modules || !this.formation.modules.length) {
      this.toaster.showInfo('Cette formation ne contient aucun module.', 'Information');
      return;
    }

    // Vérifier si des sessions sont disponibles
    if (!this.hasAvailableSessions()) {
      // Vérifier si toutes les sessions sont terminées
      const allSessionsEnded = this.formation.sessions && this.formation.sessions.every(session => {
        if (!session.endDate) return false;
        const end = new Date(session.endDate);
        const now = new Date();
        return now > end;
      });

      // Vérifier si toutes les sessions n'ont pas encore commencé
      const allSessionsNotStarted = this.formation.sessions && this.formation.sessions.every(session => {
        if (!session.startDate) return false;
        const start = new Date(session.startDate);
        const now = new Date();
        return now < start;
      });

      if (allSessionsEnded) {
        this.toaster.showInfo('Toutes les sessions de cette formation sont terminées.', 'Information');
      } else if (allSessionsNotStarted) {
        this.toaster.showInfo('Les sessions de cette formation n\'ont pas encore commencé.', 'Information');
      } else {
        this.toaster.showInfo('Aucune session disponible pour cette formation.', 'Information');
      }
      return;
    }

    // Trouver une session disponible
    const availableSession = this.getAvailableSession();

    if (!availableSession || !availableSession.sessionId) {
      // Ce cas ne devrait pas se produire car on a vérifié hasAvailableSessions() plus haut
      this.toaster.showInfo('Aucune session disponible pour cette formation.', 'Information');
      return;
    }

    // Si l'utilisateur a déjà commencé la formation, récupérer sa progression
    if (this.hasAttemptedFormation()) {
      // Récupérer la progression de l'utilisateur pour cette formation
      this.condidatService.getFormationProgress(this.formation.id, availableSession.sessionId).subscribe({
        next: (progress: Array<any>) => {
          if (!this.formation || !this.formation.modules || this.formation.modules.length === 0) {
            this.toaster.showError('Erreur lors de la récupération des informations de la formation.', 'Erreur');
            return;
          }

          // Mettre à jour la progression des modules
          this.updateModulesProgress(progress);

          // Trouver le premier module non complété
          let nextModuleToComplete = this.formation.modules.find(module => !module.isCompleted);

          // Si tous les modules sont complétés, prendre le dernier module
          if (!nextModuleToComplete) {
            nextModuleToComplete = [...this.formation.modules].sort((a, b) => b.position - a.position)[0];
          }

          // Rediriger vers la page du module avec la session
          this.router.navigate(['/condidat/module', this.formation.id, nextModuleToComplete.id, availableSession.sessionId]);
        },
        error: (err) => {
          console.error('Erreur lors de la récupération de la progression:', err);

          if (!this.formation || !this.formation.modules || this.formation.modules.length === 0) {
            this.toaster.showError('Erreur lors de la récupération des informations de la formation.', 'Erreur');
            return;
          }

          // En cas d'erreur, rediriger vers le premier module
          const firstModule = [...this.formation.modules].sort((a, b) => a.position - b.position)[0];
          this.router.navigate(['/condidat/module', this.formation.id, firstModule.id, availableSession.sessionId]);
        }
      });
    } else {
      // Si l'utilisateur n'a pas encore commencé la formation, rediriger vers le premier module
      if (!this.formation || !this.formation.modules || this.formation.modules.length === 0) {
        this.toaster.showError('Erreur lors de la récupération des informations de la formation.', 'Erreur');
        return;
      }

      const firstModule = [...this.formation.modules].sort((a, b) => a.position - b.position)[0];
      this.router.navigate(['/condidat/module', this.formation.id, firstModule.id, availableSession.sessionId]);
    }
  }

  /**
   * Vérifie si l'utilisateur peut passer le quiz final
   * @returns true si l'utilisateur peut passer le quiz final, false sinon
   */
  canTakeFinalQuiz(): boolean {
    if (!this.formation) return false;

    // Si l'utilisateur a déjà réussi la formation, il ne peut pas repasser le quiz final
    if (this.hasPassedFormation()) return false;

    // Si la formation n'a pas de quiz final, l'utilisateur ne peut pas le passer
    if (!this.formation.quizId) return false;

    // Vérifier si des sessions sont disponibles
    if (!this.hasAvailableSessions()) return false;

    // Si la formation permet de passer le quiz final sans avoir complété tous les modules
    if (this.formation.canPassFinalWithoutModules === true) return true;

    // Vérifier si tous les modules ont été complétés
    if (!this.formation.modules || this.formation.modules.length === 0) return true;

    // Vérifier si tous les modules avec quiz ont été complétés avec succès
    // Cette vérification est maintenant faite dans la méthode goToFinalQuiz() qui utilise l'API
    // pour récupérer la progression réelle de l'utilisateur
    return true;
  }

  /**
   * Redirige vers le quiz final de la formation
   */
  goToFinalQuiz(): void {
    if (!this.formation || !this.formation.quizId) {
      this.toaster.showInfo('Cette formation n\'a pas de quiz final.', 'Information');
      return;
    }

    // Vérifier si des sessions sont disponibles
    const availableSession = this.getAvailableSession();
    if (!availableSession) {
      this.toaster.showInfo('Aucune session disponible pour passer le quiz final.', 'Information');
      return;
    }

    // Vérifier si l'utilisateur a déjà passé le quiz final avec succès
    if (this.formation.finalQuizPassed === true) {
      this.toaster.showInfo('Vous avez déjà réussi le quiz final de cette formation.', 'Information');
      return;
    }

    // Utiliser directement l'API pour vérifier l'éligibilité au quiz final
    // Le backend prendra en compte la propriété canPassFinalWithoutModules
    this.condidatService.checkFinalQuizEligibility(this.formation.id, availableSession.sessionId).subscribe({
      next: (response) => {
        if (response.canTakeQuiz) {
          // Si l'utilisateur peut passer le quiz final, naviguer vers la page de validation
          this.navigateToFinalQuiz(availableSession);
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
   * @param availableSession Session disponible
   */
  private navigateToFinalQuiz(availableSession: any): void {
    if (!this.formation) return;

    // Rediriger vers la page de validation du quiz final
    const queryParams: any = {
      formationId: this.formation.id,
      type: 'final'
    };

    // Ajouter le sessionId s'il existe
    if (availableSession && availableSession.sessionId) {
      queryParams.sessionId = availableSession.sessionId;
    }

    this.router.navigate(['/condidat/validate-quiz'], { queryParams });
  }

  /**
   * Met à jour la progression des modules en fonction des résultats des quiz
   * @param progress Progression de l'utilisateur
   */
  updateModulesProgress(progress: Array<any>): void {
    if (!this.formation || !this.formation.modules || !progress) return;

    // Parcourir tous les modules
    for (let i = 0; i < this.formation.modules.length; i++) {
      const module = this.formation.modules[i];

      // Si le module n'a pas de quiz, il est considéré comme complété
      if (!module.quizId) {
        module.isCompleted = true;

        // Rendre le module suivant accessible
        if (i + 1 < this.formation.modules.length) {
          this.formation.modules[i + 1].isAccessible = true;
        }
        continue;
      }

      // Chercher le résultat du quiz pour ce module
      const moduleProgress = progress.find(p => p.moduleId === module.id);

      // Si on a trouvé un résultat et que le quiz a été réussi
      if (moduleProgress && moduleProgress.hasPassed) {
        // Marquer le module comme complété
        module.isCompleted = true;

        // Rendre le module suivant accessible
        if (i + 1 < this.formation.modules.length) {
          this.formation.modules[i + 1].isAccessible = true;
        }
      } else if (moduleProgress && moduleProgress.hasAttempted) {
        // Si le quiz a été tenté mais pas réussi
        module.isCompleted = false;

        // Si la formation permet de passer au module suivant sans réussir le quiz
        if (this.formation.canPassFinalWithoutModules) {
          // Rendre le module suivant accessible
          if (i + 1 < this.formation.modules.length) {
            this.formation.modules[i + 1].isAccessible = true;
          }
        }
      }
    }
  }

  /**
   * Récupère une session disponible pour la formation
   * @returns La première session disponible ou null si aucune n'est disponible
   */
  getAvailableSession(): any {
    if (!this.formation || !this.formation.sessions || this.formation.sessions.length === 0) return null;

    // Si l'utilisateur a déjà réussi la formation, il n'a pas besoin de passer d'autres tests
    if (this.hasPassedFormation()) return null;

    const now = new Date();

    // Filtrer les sessions disponibles
    const availableSessions = this.formation.sessions.filter(session => {
      if (!session.startDate || !session.endDate) return false;

      const start = new Date(session.startDate);
      const end = new Date(session.endDate);

      // La session est disponible si :
      // 1. La date actuelle est entre la date de début et la date de fin
      // 2. ET (l'utilisateur n'a pas encore passé le test OU il a échoué au test et peut le repasser)
      return now >= start && now <= end &&
        (session.canRepass === true || (!session.hasAttempted) || (session.hasAttempted === true && session.score < 70));
    });

    // Trier les sessions par date de début (la plus récente d'abord)
    availableSessions.sort((a, b) => {
      if (!a.startDate || !b.startDate) return 0;
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });

    return availableSessions.length > 0 ? availableSessions[0] : null;
  }
}
