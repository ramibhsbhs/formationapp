import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/core/models/quiz.model';
import { QuizService } from 'src/app/core/services/quiz.service';
import { ToasterService } from 'src/app/core/services/toaster.service';

@Component({
  selector: 'app-quiz-passing',
  templateUrl: './quiz-passing.component.html',
  styleUrls: ['./quiz-passing.component.scss']
})
export class QuizPassingComponent implements OnInit {
  quiz!: Quiz;
  isLoading = true;
  error: string | null = null;
  currentQuestionIndex = 0;
  selectedAnswers: { [qid: number]: number[] } = {};
  isFinished = false;
  score = 0;
  quizId!: number;
  sessionId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizService,
    private toaster: ToasterService
  ) { }

  ngOnInit(): void {
    this.quizId = +this.route.snapshot.paramMap.get('quizId')!;
    this.sessionId = +this.route.snapshot.paramMap.get('sessionId')!;

    if (!this.quizId || !this.sessionId) {
      this.error = 'Paramètres invalides';
      return;
    }

    this.loadQuiz(this.quizId);
  }

  loadQuiz(id: number): void {
    this.isLoading = true;
    this.error = null;
    this.quizService.getQuiz(id).subscribe({
      next: quiz => {
        this.quiz = quiz;
        this.isLoading = false;
      },
      error: err => {
        this.error = err?.error?.message || 'Failed to load quiz.';
        this.isLoading = false;
      }
    });
  }

  selectAnswer(answerId: number): void {
    const question = this.quiz.questions[this.currentQuestionIndex];
    const qid = question.id;

    if (!this.selectedAnswers[qid]) {
      this.selectedAnswers[qid] = [];
    }

    if (question.answers.length > 2) {
      const index = this.selectedAnswers[qid].indexOf(answerId);
      if (index === -1) {
        this.selectedAnswers[qid].push(answerId);
      } else {
        this.selectedAnswers[qid].splice(index, 1);
      }
    } else {
      this.selectedAnswers[qid] = [answerId];
    }
  }

  nextQuestion(): void {
    const qid = this.quiz.questions[this.currentQuestionIndex].id;
    if (this.selectedAnswers[qid]?.length > 0) {
      if (this.currentQuestionIndex < this.quiz.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.finishQuiz();
      }
    } else {
      this.toaster.showInfo('Please select at least one answer.', 'warning');
    }
  }

  finishQuiz(): void {
    this.isLoading = true;

    // Préparer les réponses au format attendu par l'API
    const formattedAnswers = Object.entries(this.selectedAnswers).map(([questionId, selectedAnswerIds]) => {
      return {
        questionId: parseInt(questionId),
        selectedAnswerId: selectedAnswerIds[0] // Pour simplifier, on prend la première réponse sélectionnée
      };
    });

    // Soumettre les réponses à l'API
    this.quizService.submitQuizAnswer(this.quizId, this.sessionId, formattedAnswers)
      .subscribe({
        next: (result) => {
          this.isLoading = false;
          this.isFinished = true;
          this.score = result.score * this.totalPossiblePoints / 100; // Convertir le pourcentage en points

          // Afficher un message de succès
          const message = result.passed
            ? 'Félicitations ! Vous avez réussi le test.'
            : 'Vous n\'avez pas obtenu le score minimum requis.';

          this.toaster.showInfo(message, 'Résultat du test');
        },
        error: (err) => {
          this.isLoading = false;
          this.error = err?.error?.message || 'Une erreur est survenue lors de la soumission du test.';
          this.toaster.showInfo('Erreur lors de la soumission du test', 'Erreur');
        }
      });
  }



  // Helper to check if an answer is selected
  isAnswerSelected(questionId: number, answerId: number): boolean {
    return this.selectedAnswers[questionId]?.includes(answerId) || false;
  }

  // Getter for total possible points
  get totalPossiblePoints(): number {
    return this.quiz.questions.length * 10; // 10 points per question
  }
}