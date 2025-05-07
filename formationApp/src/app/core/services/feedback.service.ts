import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Feedback } from '../models/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = `${environment.baseUrl}/feedback`;

  constructor(private http: HttpClient) { }

  /**
   * Récupère tous les feedbacks (admin seulement)
   */
  getAllFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.apiUrl}`);
  }

  /**
   * Récupère tous les feedbacks (admin seulement)
   */
  getAllByAdmin(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.apiUrl}/admin`);
  }

  /**
   * Récupère les feedbacks de l'utilisateur connecté
   */
  getUserFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.apiUrl}/user`);
  }

  /**
   * Récupère un feedback par son ID
   */
  getFeedback(id: number): Observable<Feedback> {
    return this.http.get<Feedback>(`${this.apiUrl}/${id}`);
  }

  /**
   * Récupère tous les feedbacks pour une formation spécifique
   */
  getFeedbacksByFormation(formationId: number): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.apiUrl}/formation/${formationId}`);
  }

  /**
   * Crée un nouveau feedback
   */
  createFeedback(feedback: { description: string, value: number, formationId: number }): Observable<Feedback> {
    return this.http.post<Feedback>(`${this.apiUrl}`, feedback);
  }

  /**
   * Supprime un feedback (admin seulement)
   */
  deleteFeedback(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
