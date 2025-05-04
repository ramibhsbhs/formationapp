import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Quiz, Question } from '../models/quiz.model';
import { FormationResults, QuizAttempt } from '../models/quiz-result.model';

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

    /**
     * Récupère les tentatives de quiz pour une formation spécifique
     * @param formationId ID de la formation
     * @returns Observable avec les résultats de la formation
     */
    getQuizAttemptsByFormation(formationId: number): Observable<FormationResults> {
        return this.http.get<FormationResults>(`${environment.baseUrl}/quizresults/formation/${formationId}`);
    }

    /**
     * Récupère les tentatives de quiz pour une session spécifique
     * @param sessionId ID de la session
     * @returns Observable avec les tentatives de quiz
     */
    getQuizAttemptsBySession(sessionId: number): Observable<QuizAttempt[]> {
        return this.http.get<QuizAttempt[]>(`${environment.baseUrl}/quizresults/session/${sessionId}`);
    }

    /**
     * Récupère une tentative de quiz spécifique
     * @param attemptId ID de la tentative
     * @returns Observable avec la tentative de quiz
     */
    getQuizAttempt(attemptId: number): Observable<QuizAttempt> {
        return this.http.get<QuizAttempt>(`${environment.baseUrl}/quizresults/attempt/${attemptId}`);
    }
}