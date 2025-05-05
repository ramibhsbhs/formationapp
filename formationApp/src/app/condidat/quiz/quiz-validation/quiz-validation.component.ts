import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CondidatService } from '../../core/condidat.service';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { catchError, finalize, of } from 'rxjs';

@Component({
  selector: 'app-quiz-validation',
  templateUrl: './quiz-validation.component.html',
  styleUrls: ['./quiz-validation.component.scss']
})
export class QuizValidationComponent implements OnInit {
  sessionId: number | null = null;
  formationId: number | null = null;
  moduleId: number | null = null;
  quizId!: number;
  isLoading = true;
  error: string | null = null;
  canTakeQuiz = false;
  previousAttempt: any = null;
  formationTitle: string = '';
  sessionTitle: string = '';
  moduleTitle: string = '';
  quizType: string = 'session'; // 'session', 'module', ou 'final'

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private condidatService: CondidatService,
    private toaster: ToasterService
  ) { }

  ngOnInit(): void {
    // Récupérer les paramètres de l'URL
    const params = this.route.snapshot.paramMap;
    const queryParams = this.route.snapshot.queryParams;

    // Vérifier le type de quiz (via les query params)
    if (queryParams['type']) {
      this.quizType = queryParams['type'];

      if (this.quizType === 'module') {
        // Quiz de module
        this.formationId = Number(queryParams['formationId']);
        this.moduleId = Number(queryParams['moduleId']);

        // Récupérer le sessionId s'il existe
        if (queryParams['sessionId']) {
          this.sessionId = Number(queryParams['sessionId']);
        }

        if (!this.formationId || !this.moduleId) {
          this.error = 'Paramètres invalides pour le quiz de module';
          this.isLoading = false;
          return;
        }

        this.checkModuleQuizEligibility();
      } else if (this.quizType === 'final') {
        // Quiz final
        this.formationId = Number(queryParams['formationId']);

        // Récupérer le sessionId s'il existe
        if (queryParams['sessionId']) {
          this.sessionId = Number(queryParams['sessionId']);
        }

        if (!this.formationId) {
          this.error = 'Paramètres invalides pour le quiz final';
          this.isLoading = false;
          return;
        }

        this.checkFinalQuizEligibility();
      }
    } else {
      // Quiz de session (comportement par défaut)
      this.sessionId = Number(params.get('sessionId'));

      if (!this.sessionId) {
        this.error = 'ID de session invalide';
        this.isLoading = false;
        return;
      }

      this.checkSessionQuizEligibility();
    }
  }

  /**
   * Vérifie l'éligibilité au quiz de session
   */
  checkSessionQuizEligibility(): void {
    this.isLoading = true;
    this.error = null;

    if (!this.sessionId) {
      this.error = 'ID de session invalide';
      this.isLoading = false;
      return;
    }

    this.condidatService.checkQuizEligibility(this.sessionId)
      .pipe(
        catchError(err => {
          this.error = err?.error?.message || 'Erreur lors de la vérification de l\'éligibilité au quiz';
          return of(null);
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(response => {
        if (!response) return;

        this.canTakeQuiz = response.canTakeQuiz;
        this.quizId = response.quizId;
        this.previousAttempt = response.previousAttempt;
        this.formationTitle = response.formationTitle || '';
        this.sessionTitle = response.sessionTitle || '';
      });
  }

  /**
   * Vérifie l'éligibilité au quiz de module
   */
  checkModuleQuizEligibility(): void {
    this.isLoading = true;
    this.error = null;

    if (!this.formationId || !this.moduleId) {
      this.error = 'Paramètres invalides pour le quiz de module';
      this.isLoading = false;
      return;
    }

    this.condidatService.checkModuleQuizEligibility(this.formationId, this.moduleId, this.sessionId || undefined)
      .pipe(
        catchError(err => {
          this.error = err?.error?.message || 'Erreur lors de la vérification de l\'éligibilité au quiz de module';
          return of(null);
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(response => {
        if (!response) return;

        this.canTakeQuiz = response.canTakeQuiz;
        this.quizId = response.quizId;
        this.previousAttempt = response.previousAttempt;
        this.formationTitle = response.formationTitle || '';
        this.moduleTitle = response.moduleTitle || '';
      });
  }

  /**
   * Vérifie l'éligibilité au quiz final
   */
  checkFinalQuizEligibility(): void {
    this.isLoading = true;
    this.error = null;

    if (!this.formationId) {
      this.error = 'Paramètres invalides pour le quiz final';
      this.isLoading = false;
      return;
    }

    this.condidatService.checkFinalQuizEligibility(this.formationId, this.sessionId || undefined)
      .pipe(
        catchError(err => {
          this.error = err?.error?.message || 'Erreur lors de la vérification de l\'éligibilité au quiz final';
          return of(null);
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(response => {
        if (!response) return;

        this.canTakeQuiz = response.canTakeQuiz;
        this.quizId = response.quizId;
        this.previousAttempt = response.previousAttempt;
        this.formationTitle = response.formationTitle || '';
      });
  }

  startQuiz(): void {
    if (!this.canTakeQuiz) {
      this.toaster.showInfo('Vous ne pouvez pas passer ce test pour le moment.', 'Information');
      return;
    }

    // Afficher un message de débogage
    console.log('Démarrage du quiz avec les paramètres :', {
      quizType: this.quizType,
      quizId: this.quizId,
      formationId: this.formationId,
      moduleId: this.moduleId,
      sessionId: this.sessionId
    });

    // Construire les query params en fonction du type de quiz
    const queryParams: any = { type: this.quizType };

    if (this.quizType === 'module') {
      queryParams.formationId = this.formationId;
      queryParams.moduleId = this.moduleId;
      if (this.sessionId) {
        queryParams.sessionId = this.sessionId;
      }
    } else if (this.quizType === 'final') {
      queryParams.formationId = this.formationId;
      if (this.sessionId) {
        queryParams.sessionId = this.sessionId;
      }
    } else {
      // Quiz de session (comportement par défaut)
      this.router.navigate(['/condidat/quiz', this.quizId, this.sessionId]);
      return;
    }

    // Naviguer vers la page du quiz avec les query params
    this.router.navigate(['/condidat/quiz', this.quizId], { queryParams });

    // Afficher un message de débogage
    console.log('Navigation vers le quiz avec les paramètres :', queryParams);
  }

  goBack(): void {
    if (this.quizType === 'module' && this.formationId && this.moduleId) {
      // Retour au module
      if (this.sessionId) {
        this.router.navigate(['/condidat/module', this.formationId, this.moduleId, this.sessionId]);
      } else {
        this.router.navigate(['/condidat/module', this.formationId, this.moduleId]);
      }
    } else if (this.quizType === 'final' && this.formationId) {
      // Retour à la formation
      this.router.navigate(['/condidat/formations', this.formationId]);
    } else if (this.sessionId) {
      // Retour à la formation pour les quiz de session
      this.router.navigate(['/condidat/formations']);
    } else {
      // Retour à la liste des formations par défaut
      this.router.navigate(['/condidat/formations']);
    }
  }

  formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
