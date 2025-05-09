import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface CategoryStat {
  category: string;
  count: number;
}

export interface MonthlyStat {
  month: string;
  count: number;
}

export interface RatingStat {
  rating: number;
  count: number;
}

export interface TopItem {
  id: number;
  title: string;
  count: number;
}

export interface UserProgress {
  userId: number;
  userName: string;
  formationsCompleted: number;
  certificationsEarned: number;
  averageScore: number;
}

export interface FormationProgress {
  formationId: number;
  formationTitle: string;
  modulesCompleted: number;
  totalModules: number;
  finalQuizPassed: boolean;
  score: number | null;
}

export interface DashboardData {
  totalUsers: number;
  totalFormations: number;
  totalSessions: number;
  totalModules: number;
  totalGroups: number;
  totalFeedbacks: number;
  totalCertifications: number;
  totalQuizzes: number;
  totalQuizAttempts: number;
  formationsByCategory: CategoryStat[];
  quizAttemptsOverTime: MonthlyStat[];
  feedbackRatings: RatingStat[];
  topFormations: TopItem[];
}

export interface SupervisorDashboardData {
  groupId: number;
  groupName: string;
  totalGroupMembers: number;
  totalGroupFormations: number;
  totalGroupCertifications: number;
  totalGroupQuizAttempts: number;
  averageGroupScore: number;
  userProgress: UserProgress[];
  groupAttemptsOverTime: MonthlyStat[];
  topGroupFormations: TopItem[];
}

export interface CandidateDashboardData {
  totalFormationsEnrolled: number;
  totalFormationsCompleted: number;
  totalCertificationsEarned: number;
  totalQuizAttempts: number;
  averageScore: number;
  formationProgress: FormationProgress[];
  attemptsOverTime: MonthlyStat[];
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = `${environment.baseUrl}/data`;

  constructor(private http: HttpClient) { }

  /**
   * Récupère les données du tableau de bord pour l'administrateur
   */
  getAdminDashboardData(): Observable<DashboardData> {
    return this.http.get<DashboardData>(`${this.apiUrl}/admin`);
  }

  /**
   * Récupère les données du tableau de bord pour le superviseur
   */
  getSupervisorDashboardData(): Observable<SupervisorDashboardData> {
    return this.http.get<SupervisorDashboardData>(`${this.apiUrl}/supervisor`);
  }

  /**
   * Récupère les données du tableau de bord pour le candidat
   */
  getCandidateDashboardData(): Observable<CandidateDashboardData> {
    return this.http.get<CandidateDashboardData>(`${this.apiUrl}/candidate`);
  }

  /**
   * Récupère les données du tableau de bord pour le manager
   */
  getManagerDashboardData(): Observable<DashboardData> {
    return this.http.get<DashboardData>(`${this.apiUrl}/manager`);
  }
}
