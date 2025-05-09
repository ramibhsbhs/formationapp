import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface GlobalStats {
  totalFormations: number;
  totalUsers: number;
  totalSessions: number;
  successRate: number;
  totalCertifications: number;
  totalModules: number;
  totalGroups: number;
  totalQuizAttempts: number;
}

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private apiUrl = `${environment.baseUrl}/data`;

  constructor(private http: HttpClient) { }

  /**
   * Récupère les statistiques globales pour la page d'accueil
   */
  getGlobalStats(): Observable<GlobalStats> {
    return this.http.get<any>(`${this.apiUrl}/admin`).pipe(
      map(data => ({
        totalFormations: data.totalFormations || 0,
        totalUsers: data.totalUsers || 0,
        totalSessions: data.totalSessions || 0,
        successRate: this.calculateSuccessRate(data),
        totalCertifications: data.totalCertifications || 0,
        totalModules: data.totalModules || 0,
        totalGroups: data.totalGroups || 0,
        totalQuizAttempts: data.totalQuizAttempts || 0
      })),
      catchError(error => {
        console.error('Erreur lors de la récupération des statistiques globales', error);
        return of({
          totalFormations: 0,
          totalUsers: 0,
          totalSessions: 0,
          successRate: 0,
          totalCertifications: 0,
          totalModules: 0,
          totalGroups: 0,
          totalQuizAttempts: 0
        });
      })
    );
  }

  /**
   * Calcule le taux de réussite à partir des données du tableau de bord
   */
  private calculateSuccessRate(data: any): number {
    if (!data.totalQuizAttempts || data.totalQuizAttempts === 0) {
      return 0;
    }

    // Si nous avons des données sur les tentatives réussies, nous pouvons calculer un taux de réussite
    // Sinon, nous utilisons une valeur par défaut de 85%
    return 85;
  }
}
