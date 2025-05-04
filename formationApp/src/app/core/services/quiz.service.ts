import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Quiz, Question } from '../models/quiz.model';

@Injectable({
    providedIn: 'root'
})
export class QuizService {
    private apiUrl = `${environment.baseUrl}/quizs`;

    constructor(private http: HttpClient) { }

    createQuiz(quiz: Quiz): Observable<Quiz> {
        return this.http.post<Quiz>(this.apiUrl, quiz);
    }

    getQuizzes() {
        return this.http.get<Quiz[]>(this.apiUrl);
    }

    getQuiz(id: number): Observable<Quiz> {
        return this.http.get<Quiz>(`${this.apiUrl}/${id}`);
    }

    getQuizzesByFormation(formationId: number): Observable<Quiz[]> {
        return this.http.get<Quiz[]>(`${this.apiUrl}/formation/${formationId}`);
    }

    updateQuiz(id: number, quiz: Quiz): Observable<Quiz> {
        return this.http.put<Quiz>(`${this.apiUrl}/${id}`, quiz);
    }

    deleteQuiz(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    submitQuizAnswer(quizId: number, sessionId: number, answers: { questionId: number, selectedAnswerId: number }[]): Observable<{ score: number, passed: boolean }> {
        return this.http.post<{ score: number, passed: boolean }>(`${this.apiUrl}/${quizId}/submit`, {
            sessionId,
            answers
        });
    }
}