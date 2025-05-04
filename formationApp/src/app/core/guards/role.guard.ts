
import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

/**
 * Garde de rôle pour protéger les routes en fonction des rôles utilisateur
 *
 * Ce garde vérifie si l'utilisateur connecté possède au moins un des rôles
 * requis pour accéder à une route spécifique. Si l'utilisateur n'est pas
 * connecté ou ne possède pas les rôles nécessaires, il sera redirigé.
 */
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  /**
   * Constructeur du garde de rôle
   *
   * @param authService - Service d'authentification pour accéder à l'utilisateur courant
   * @param router - Service de routage pour les redirections
   */
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  /**
   * Méthode principale du garde qui détermine si l'accès à la route est autorisé
   *
   * @param route - Instantané de la route activée contenant les données de route
   * @param state - État actuel du routeur
   * @returns Observable<boolean> - Observable qui émet true si l'accès est autorisé, false sinon
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    // Récupération des rôles requis depuis les données de la route
    const requiredRoles = route.data['roles'] as string[];


    // Observation de l'utilisateur courant via le service d'authentification
    return this.authService.currentUser$.pipe(
      // Prend seulement la première émission puis se désabonne
      take(1),
      map(user => {
        console.log('RoleGuard: User:', user, 'Required Roles:', requiredRoles); // Log de débogage

        // Vérification si l'utilisateur est connecté
        if (!user) {
          console.log('RoleGuard: No user, redirecting to /login');
          // Redirection vers la page de connexion si aucun utilisateur n'est connecté
          this.router.navigate(['/login']);
          return false;
        }

        // Vérification si l'utilisateur possède au moins un des rôles requis
        const hasRequiredRole = requiredRoles.some(role =>
          user.roles.includes(role)
        );

        // Redirection vers la page 403 (Accès interdit) si l'utilisateur n'a pas les rôles nécessaires
        if (!hasRequiredRole) {
          console.log('RoleGuard: User lacks required role, redirecting to /403');
          this.router.navigate(['/403']);
          return false;
        }

        // Accès autorisé si l'utilisateur a les rôles requis
        console.log('RoleGuard: Access granted');
        return true;
      })
    );
  }
}