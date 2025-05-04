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
}
