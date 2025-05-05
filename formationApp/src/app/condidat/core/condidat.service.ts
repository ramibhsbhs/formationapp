import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CondidatFormation } from './models';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CondidatService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getFormations() {
    return this.http.get<CondidatFormation[]>(`${this.baseUrl}/formation/condidat`);
  }

  getFormation(id: number) {
    return this.http.get<CondidatFormation>(`${this.baseUrl}/formation/condidat/${id}`);
  }

  /**
   * Vérifie si l'utilisateur peut passer un quiz pour une session donnée
   * @param sessionId ID de la session
   * @returns Observable avec les informations d'éligibilité
   */
  checkQuizEligibility(sessionId: number): Observable<{
    canTakeQuiz: boolean;
    quizId: number;
    previousAttempt: any;
    formationTitle: string;
    sessionTitle: string;
  }> {
    return this.http.get<any>(`${this.baseUrl}/quizs/validate/${sessionId}`);
  }

  /**
   * Vérifie si l'utilisateur peut passer un quiz pour un module donné
   * @param formationId ID de la formation
   * @param moduleId ID du module
   * @param sessionId ID de la session (optionnel)
   * @returns Observable avec les informations d'éligibilité
   */
  checkModuleQuizEligibility(formationId: number, moduleId: number, sessionId?: number): Observable<{
    canTakeQuiz: boolean;
    quizId: number;
    previousAttempt: any;
    formationTitle: string;
    moduleTitle: string;
  }> {
    let url = `${this.baseUrl}/quizs/validate/module/${formationId}/${moduleId}`;
    if (sessionId) {
      url += `?sessionId=${sessionId}`;
    }
    return this.http.get<any>(url);
  }

  /**
   * Vérifie si l'utilisateur peut passer le quiz final d'une formation
   * @param formationId ID de la formation
   * @param sessionId ID de la session (optionnel)
   * @returns Observable avec les informations d'éligibilité
   */
  checkFinalQuizEligibility(formationId: number, sessionId?: number): Observable<{
    canTakeQuiz: boolean;
    quizId: number;
    previousAttempt: any;
    formationTitle: string;
  }> {
    let url = `${this.baseUrl}/quizs/validate/final/${formationId}`;
    if (sessionId) {
      url += `?sessionId=${sessionId}`;
    }
    return this.http.get<any>(url);
  }

  /**
   * Récupère les résultats du quiz d'un module pour l'utilisateur courant
   * @param formationId ID de la formation
   * @param moduleId ID du module
   * @param sessionId ID de la session (optionnel)
   * @returns Observable avec les résultats du quiz
   */
  getModuleQuizResults(formationId: number, moduleId: number, sessionId?: number): Observable<any> {
    let url = `${this.baseUrl}/quizresults/module/${formationId}/${moduleId}`;
    if (sessionId) {
      url += `?sessionId=${sessionId}`;
    }
    return this.http.get<any>(url);
  }

  /**
   * Récupère la progression de l'utilisateur pour une formation
   * @param formationId ID de la formation
   * @param sessionId ID de la session (optionnel)
   * @returns Observable avec la progression de l'utilisateur
   */
  getFormationProgress(formationId: number, sessionId?: number): Observable<Array<{
    moduleId: number;
    quizId: number;
    hasAttempted: boolean;
    hasPassed: boolean;
    score: number;
    attemptDate: Date;
    attemptCount: number;
  }>> {
    let url = `${this.baseUrl}/quizresults/formation/${formationId}/progress`;
    if (sessionId) {
      url += `?sessionId=${sessionId}`;
    }
    return this.http.get<any>(url);
  }
}
