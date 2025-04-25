import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const requiredRoles = route.data['roles'] as string[];
    
    return this.authService.currentUser$.pipe(
      take(1),
      map(user => {
        console.log('RoleGuard: User:', user, 'Required Roles:', requiredRoles); // Debug log
        if (!user) {
          console.log('RoleGuard: No user, redirecting to /login');
          this.router.navigate(['/login']);
          return false;
        }
        const hasRequiredRole = requiredRoles.some(role => 
          user.roles.includes(role)
        );

        if (!hasRequiredRole) {
          console.log('RoleGuard: User lacks required role, redirecting to /403');
          this.router.navigate(['/403']);
          return false;
        }

        console.log('RoleGuard: Access granted');
        return true;
      })
    );
  }
}