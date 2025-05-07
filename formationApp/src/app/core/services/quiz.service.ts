import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Quiz, Question } from '../models/quiz.model';
import { FormationResults, QuizAttempt, AttemptType, QuizResult } from '../models/quiz-result.model';

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

    submitQuizAnswer(quizId: number, sessionId: number, answers: { questionId: number, selectedAnswerId: number }[]): Observable<QuizResult> {
        return this.http.post<QuizResult>(`${this.apiUrl}/${quizId}/submit`, {
            sessionId,
            answers,
            attemptType: AttemptType.Module // Par défaut, on considère que c'est un quiz de module
        });
    }

    /**
     * Soumet les réponses d'un utilisateur à un quiz de module
     * @param quizId ID du quiz
     * @param formationId ID de la formation
     * @param moduleId ID du module
     * @param sessionId ID de la session (optionnel)
     * @param answers Réponses de l'utilisateur
     * @returns Observable avec le résultat du quiz
     */
    submitModuleQuizAnswer(
        quizId: number,
        formationId: number,
        moduleId: number,
        answers: { questionId: number, selectedAnswerId: number }[],
        sessionId?: number
    ): Observable<QuizResult> {
        const payload: any = {
            formationId,
            moduleId,
            answers,
            attemptType: AttemptType.Module
        };

        if (sessionId) {
            payload.sessionId = sessionId;
        }

        return this.http.post<QuizResult>(`${this.apiUrl}/${quizId}/submit`, payload);
    }

    /**
     * Soumet les réponses d'un utilisateur à un quiz final
     * @param quizId ID du quiz
     * @param formationId ID de la formation
     * @param sessionId ID de la session (optionnel)
     * @param answers Réponses de l'utilisateur
     * @returns Observable avec le résultat du quiz
     */
    submitFinalQuizAnswer(
        quizId: number,
        formationId: number,
        answers: { questionId: number, selectedAnswerId: number }[],
        sessionId?: number
    ): Observable<QuizResult> {
        const payload: any = {
            formationId,
            answers,
            attemptType: AttemptType.Formation
        };

        if (sessionId) {
            payload.sessionId = sessionId;
        }

        return this.http.post<QuizResult>(`${this.apiUrl}/${quizId}/submit`, payload);
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
     * Récupère les tentatives de quiz pour une formation spécifique, filtrées par le groupe du superviseur
     * @param formationId ID de la formation
     * @returns Observable avec les résultats de la formation filtrés par groupe
     */
    getQuizAttemptsByFormationForSupervisor(formationId: number): Observable<FormationResults> {
        return this.http.get<FormationResults>(`${environment.baseUrl}/quizresults/formation/${formationId}/supervisor`);
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

    /**
     * Récupère le titre d'une formation
     * @param formationId ID de la formation
     * @returns Observable avec le titre de la formation
     */
    getFormationTitle(formationId: number): Observable<string> {
        return this.http.get<any>(`${environment.baseUrl}/formations/${formationId}`).pipe(
            map(formation => formation.title || 'Formation')
        );
    }
}