import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, ReplaySubject } from 'rxjs';
import { LoggedIn } from '../models/loggedIn';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSource = new ReplaySubject<LoggedIn | null>(1);
  currentUser$ = this.currentUserSource.asObservable();

  baseUrl = environment.baseUrl
  constructor(private http: HttpClient, private route: Router) { }

  login(model: any) {
    return this.http.post<LoggedIn>(this.baseUrl + "/auth/login",
      { username: model.email, password: model.password }
    ).pipe(
      map((res: any) => {
        const user = res;
        if (user) {
          this.setCurrentUser(user)
          this.redirectUser([])

        }
      })
    )
  }

  setCurrentUser(user: LoggedIn) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  redirectUser(roles: String[]) {
    this.route.navigateByUrl("/admin")
  }
  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    this.route.navigateByUrl('/login');
  }
}
