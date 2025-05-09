import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, ReplaySubject } from 'rxjs';
import { LoggedIn } from '../models/loggedIn';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSource = new ReplaySubject<LoggedIn | null>(1);
  currentUser$ = this.currentUserSource.asObservable();

  baseUrl = environment.baseUrl
  constructor(
    private http: HttpClient,
    private route: Router,
    private notificationService: NotificationService
  ) {
    const user = localStorage.getItem('user');
    if (user) {
      this.currentUserSource.next(JSON.parse(user));
    } else {
      this.currentUserSource.next(null);
    }
  }

  login(model: any) {
    return this.http.post<LoggedIn>(this.baseUrl + "/auth/login",
      { username: model.email, password: model.password }
    ).pipe(
      map((res: any) => {
        const user = res;
        if (user) {
          this.setCurrentUser(user)
          this.redirectUser(user.redirectUrl)
        }
      })
    )
  }

  setCurrentUser(user: LoggedIn) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);

    // Initialiser les notifications après la connexion
    this.notificationService.initNotifications(user);
  }

  redirectUser(redirectUrl: string) {
    this.route.navigateByUrl(redirectUrl)
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    // Réinitialiser les notifications lors de la déconnexion
    this.notificationService.resetNotifications();
    this.route.navigateByUrl('/login');
  }

  redirectToDashboard() {
    this.currentUser$.subscribe(
      (user: LoggedIn | null) => {
        if (user) {
          this.redirectUser(user.redirectUrl);
        }
      }
    );
  }

  /**
   * Récupère l'utilisateur actuellement connecté depuis le localStorage
   */
  getCurrentUser(): LoggedIn | null {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      return JSON.parse(userJson) as LoggedIn;
    }
    return null;
  }

  /**
   * Met à jour les informations de l'utilisateur connecté
   * @param userData Les nouvelles données utilisateur (username, email, imageUrl)
   */
  updateCurrentUser(userData: { username?: string, email?: string, imageUrl?: string }): void {
    const currentUser = this.getCurrentUser();

    if (currentUser) {
      // Mettre à jour les propriétés si elles sont fournies
      if (userData.username) {
        currentUser.username = userData.username;
      }

      if (userData.email) {
        currentUser.email = userData.email;
      }

      if (userData.imageUrl) {
        currentUser.imageUrl = userData.imageUrl;
      }

      // Mettre à jour le localStorage et le ReplaySubject
      this.setCurrentUser(currentUser);
    }
  }
}
