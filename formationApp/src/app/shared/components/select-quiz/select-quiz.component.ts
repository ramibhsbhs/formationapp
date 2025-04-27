import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Quiz } from 'src/app/core/models/quiz.model';
import { QuizService } from 'src/app/core/services/quiz.service';

@Component({
  selector: 'app-select-quiz',
  templateUrl: './select-quiz.component.html',
  styleUrls: ['./select-quiz.component.scss']
})
export class SelectQuizComponent implements OnInit {

  quizzes: Quiz[] = [];
  selectedQuizId: number | null = null;
  disabledQuizIds: number[] = [];
  context: 'formation' | 'module';

  constructor(
    public dialogRef: MatDialogRef<SelectQuizComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      // quizzes: Quiz[],
      disabledQuizIds: number[],
      context: 'formation' | 'module',
      selectedQuizId?: number
    },
    private quizService: QuizService
  ) {
    this.disabledQuizIds = data.disabledQuizIds;
    this.context = data.context;
    this.selectedQuizId = data.selectedQuizId || null;
  }
  ngOnInit(): void {
    this.quizService.getQuizzes().subscribe((quizzes: Quiz[]) => {
      this.quizzes = quizzes.filter(quiz => !this.disabledQuizIds.includes(quiz.id));
    });
  }

  confirm(): void {
    if (this.selectedQuizId) {
      const selectedQuiz = this.quizzes.find(quiz => quiz.id === this.selectedQuizId);
      this.dialogRef.close(selectedQuiz);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
