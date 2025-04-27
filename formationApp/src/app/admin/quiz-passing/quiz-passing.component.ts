import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private toaster: ToasterService
  ) { }

  ngOnInit(): void {
    const quizId = +this.route.snapshot.paramMap.get('id')!;
    this.loadQuiz(quizId);
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
    this.isFinished = true;
    this.calculateScore();
  }

  private calculateScore(): void {
    let totalScore = 0;
    for (const q of this.quiz.questions) {
      const selected = this.selectedAnswers[q.id] || [];
      const correctAnswers = q.answers.filter(a => a.isCorrect).map(a => a.id);
      const points = 10; // 10 points per question

      const isCorrect =
        selected.length === correctAnswers.length &&
        selected.every(id => correctAnswers.includes(id));

      if (isCorrect) {
        totalScore += points;
      }
    }
    this.score = totalScore;
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