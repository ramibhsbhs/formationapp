import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Quiz } from 'src/app/core/models/quiz.model';
import { QuizService } from 'src/app/core/services/quiz.service';

// interface Answer {
//   id: number;
//   text: string;
//   isCorrect: boolean;
//   questionId: number;
//   createdAt: Date;
//   updatedAt: Date | null;
//   deletedAt: Date | null;
//   enable: boolean;
// }

// interface Question {
//   id: number;
//   quizId: number;
//   points: number;
//   order: number;
//   createdAt: Date;
//   updatedAt: Date | null;
//   deletedAt: Date | null;
//   enable: boolean;
//   answers: Answer[];
// }

// interface Quiz {
//   id: number;
//   title: string;
//   createdAt: Date;
//   updatedAt: Date | null;
//   deletedAt: Date | null;
//   enable: boolean;
//   questions: Question[];
// }

@Component({
  selector: 'app-quizs',
  templateUrl: './quizs.component.html',
  styleUrls: ['./quizs.component.scss']
})
export class QuizsComponent implements OnInit {
  quizzes: Quiz[] = []
  isLoading = false

  searchTerm: string = '';

  constructor(
    private quizService :QuizService
  ) {}

  ngOnInit(): void {
    this.fetchQuizzs()
  }

  get filteredQuizzes(): Quiz[] {
    return this.quizzes.filter(quiz => 
      quiz.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  fetchQuizzs(){
    this.isLoading = true
    this.quizService.getQuizzes().subscribe({
      next :(quizzs)=>{
          this.searchTerm =''
          this.isLoading = false
          this.quizzes = quizzs;
      }
    })
  }

  openCreateQuizDialog(): void {
    // TODO: Implement dialog opening
  }

  editQuiz(quiz: Quiz): void {
    // TODO: Implement edit functionality
  }

  deleteQuiz(quiz: Quiz): void {
    // TODO: Implement delete functionality
  }
}
