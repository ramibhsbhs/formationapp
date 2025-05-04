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
  sessionId!: number;
  quizId!: number;
  isLoading = true;
  error: string | null = null;
  canTakeQuiz = false;
  previousAttempt: any = null;
  formationTitle: string = '';
  sessionTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private condidatService: CondidatService,
    private toaster: ToasterService
  ) { }

  ngOnInit(): void {
    this.sessionId = Number(this.route.snapshot.paramMap.get('sessionId'));

    if (!this.sessionId) {
      this.error = 'ID de session invalide';
      this.isLoading = false;
      return;
    }

    this.checkQuizEligibility();
  }

  checkQuizEligibility(): void {
    this.isLoading = true;
    this.error = null;

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

  startQuiz(): void {
    if (!this.canTakeQuiz) {
      this.toaster.showInfo('Vous ne pouvez pas passer ce test pour le moment.', 'Information');
      return;
    }

    this.router.navigate(['/condidat/quiz', this.quizId, this.sessionId]);
  }

  goBack(): void {
    this.router.navigate(['/condidat/formations']);
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
