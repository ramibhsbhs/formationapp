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
  sessionId?: number;
  formationId?: number;
  moduleId?: number;
  quizType: string = 'session'; // 'session', 'module', ou 'final'

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizService,
    private toaster: ToasterService
  ) { }

  ngOnInit(): void {
    // Récupérer les paramètres de l'URL
    const params = this.route.snapshot.paramMap;
    const queryParams = this.route.snapshot.queryParams;

    // Récupérer l'ID du quiz (obligatoire)
    this.quizId = +params.get('quizId')!;

    if (!this.quizId) {
      this.error = 'ID de quiz invalide';
      return;
    }

    // Récupérer le type de quiz (via les query params)
    if (queryParams['type']) {
      this.quizType = queryParams['type'];
    }

    // Récupérer les autres paramètres en fonction du type de quiz
    if (this.quizType === 'module') {
      // Quiz de module
      this.formationId = +queryParams['formationId'];
      this.moduleId = +queryParams['moduleId'];

      // Récupérer le sessionId s'il existe
      if (queryParams['sessionId']) {
        this.sessionId = +queryParams['sessionId'];
      }

      if (!this.formationId || !this.moduleId) {
        this.error = 'Paramètres invalides pour le quiz de module';
        return;
      }
    } else if (this.quizType === 'final') {
      // Quiz final
      this.formationId = +queryParams['formationId'];

      // Récupérer le sessionId s'il existe
      if (queryParams['sessionId']) {
        this.sessionId = +queryParams['sessionId'];
      }

      if (!this.formationId) {
        this.error = 'Paramètres invalides pour le quiz final';
        return;
      }
    } else {
      // Cas par défaut - traiter comme un quiz final
      this.sessionId = +params.get('sessionId')!;

      if (!this.sessionId) {
        this.error = 'ID de session invalide';
        return;
      }

      // Définir le type de quiz comme "final" pour la suite du traitement
      this.quizType = 'final';
    }

    // Charger le quiz
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

    // Soumettre les réponses à l'API en fonction du type de quiz
    let submitObservable;

    switch (this.quizType) {
      case 'module':
        if (!this.formationId || !this.moduleId) {
          this.error = 'Paramètres invalides pour le quiz de module';
          this.isLoading = false;
          return;
        }
        submitObservable = this.quizService.submitModuleQuizAnswer(
          this.quizId,
          this.formationId,
          this.moduleId,
          formattedAnswers,
          this.sessionId
        );
        break;

      case 'final':
        if (!this.formationId) {
          this.error = 'Paramètres invalides pour le quiz final';
          this.isLoading = false;
          return;
        }
        submitObservable = this.quizService.submitFinalQuizAnswer(
          this.quizId,
          this.formationId,
          formattedAnswers,
          this.sessionId
        );
        break;

      default:
        // Traiter comme un quiz final par défaut
        if (!this.sessionId) {
          this.error = 'ID de session invalide';
          this.isLoading = false;
          return;
        }

        // Si nous avons un formationId, soumettre comme un quiz final
        if (this.formationId) {
          submitObservable = this.quizService.submitFinalQuizAnswer(
            this.quizId,
            this.formationId,
            formattedAnswers,
            this.sessionId
          );
        } else {
          // Sinon, utiliser la méthode par défaut
          submitObservable = this.quizService.submitQuizAnswer(
            this.quizId,
            this.sessionId,
            formattedAnswers
          );
        }
        break;
    }

    // S'abonner à l'observable
    submitObservable.subscribe({
      next: (result) => {
        this.isLoading = false;
        this.isFinished = true;
        this.score = result.score * this.totalPossiblePoints / 100; // Convertir le pourcentage en points

        // Afficher un message de succès
        const message = result.passed
          ? 'Félicitations ! Vous avez réussi le test.'
          : 'Vous n\'avez pas obtenu le score minimum requis.';

        this.toaster.showInfo(message, 'Résultat du test');

        // Rediriger vers la page appropriée après un délai
        setTimeout(() => {
          this.navigateAfterQuiz(result.passed);
        }, 3000);
      },
      error: (err) => {
        this.isLoading = false;
        this.error = err?.error?.message || 'Une erreur est survenue lors de la soumission du test.';
        this.toaster.showInfo('Erreur lors de la soumission du test', 'Erreur');
      }
    });
  }

  /**
   * Redirige l'utilisateur après avoir terminé le quiz
   * @param passed Indique si l'utilisateur a réussi le quiz
   */
  navigateAfterQuiz(passed: boolean): void {
    switch (this.quizType) {
      case 'module':
        // Toujours rediriger vers le module, qu'il ait réussi ou non
        if (this.formationId && this.moduleId) {
          // Construire l'URL du module
          const moduleUrl = `/condidat/module/${this.formationId}/${this.moduleId}`;

          // Ajouter le sessionId s'il existe
          if (this.sessionId) {
            this.router.navigate([moduleUrl, this.sessionId]);
          } else {
            this.router.navigate([moduleUrl]);
          }

          // Afficher un message de succès ou d'échec
          if (passed) {
            this.toaster.showInfo('Vous avez réussi le quiz du module !', 'Félicitations');
          } else {
            this.toaster.showInfo('Vous n\'avez pas obtenu le score minimum requis. Vous pouvez réessayer.', 'Information');
          }
        }
        break;

      case 'final':
        // Rediriger vers la page de détails de la formation
        if (this.formationId) {
          this.router.navigate([`/condidat/formations/${this.formationId}`]);

          // Afficher un message de succès ou d'échec
          if (passed) {
            this.toaster.showInfo('Vous avez réussi le quiz final de la formation !', 'Félicitations');
          } else {
            this.toaster.showInfo('Vous n\'avez pas obtenu le score minimum requis pour le quiz final. Vous pouvez réessayer.', 'Information');
          }
        }
        break;

      default:
        // Rediriger vers la liste des formations
        this.router.navigate(['/condidat/formations']);
        break;
    }
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