import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Session } from '../models/session.model';
import { environment } from '../../../environments/environment';

export type SessionStatus = 'Terminée' | 'En cours' | 'Pas encore';

@Injectable({
  providedIn: 'root'
})
export class SesssionsService {
  private apiUrl = `${environment.baseUrl}/session`;

  constructor(private http: HttpClient) { }

  // Create a new session
  getAll() {
    return this.http.get<Session[]>(this.apiUrl).pipe(
      map(sessions => sessions.map(session => ({
        ...session,
        startDate: new Date(session.startDate),
        endDate: new Date(session.endDate),
        status: this.getSessionStatus(session)
      })))
    );
  }

  createSession(model: any) {
    return this.http.post<Session>(this.apiUrl, model).pipe(
      map(session => ({
        ...session,
        startDate: new Date(session.startDate),
        endDate: new Date(session.endDate),
        status: this.getSessionStatus(session)
      }))
    );
  }

  updateSession(model: any) {
    return this.http.put<Session>(`${this.apiUrl}/${model.id}`, model).pipe(
      map(session => ({
        ...session,
        startDate: new Date(session.startDate),
        endDate: new Date(session.endDate),
        status: this.getSessionStatus(session)
      }))
    );
  }

  deleteSession(sessionId: number) {
    return this.http.delete<void>(`${this.apiUrl}/${sessionId}`);
  }

  getSessionStatus(session: Session): SessionStatus {
    const now = new Date();
    const startDate = new Date(session.startDate);
    const endDate = new Date(session.endDate);

    if (now > endDate) {
      return 'Terminée';
    } else if (now < startDate) {
      return 'Pas encore';
    } else {
      return 'En cours';
    }
  }
}
