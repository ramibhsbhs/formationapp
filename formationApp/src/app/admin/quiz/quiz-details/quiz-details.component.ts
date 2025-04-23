import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../../core/services/quiz.service';
import { Quiz } from '../../../core/models/quiz.model';

@Component({
    selector: 'app-quiz-details',
    templateUrl: './quiz-details.component.html',
    styleUrls: ['./quiz-details.component.scss']
})
export class QuizDetailsComponent implements OnInit {
    quiz: Quiz | null = null;
    isLoading = true;

    constructor(
        private route: ActivatedRoute,
        private quizService: QuizService
    ) { }

    ngOnInit(): void {
        const quizId = Number(this.route.snapshot.paramMap.get('id'));
        this.quizService.getQuiz(quizId).subscribe({
            next: (quiz) => {
                this.quiz = quiz;
                this.isLoading = false;
            },
            error: (error) => {
                console.error('Error fetching quiz:', error);
                this.isLoading = false;
            }
        });
    }
} 