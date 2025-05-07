import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  userName: string = '';
  unreadNotificationsCount: number = 0;

  private subscription = new Subscription();

  authService = inject(AuthService);
  router = inject(Router);
  notificationService = inject(NotificationService);

  ngOnInit(): void {
    // S'abonner aux notifications pour mettre à jour le compteur
    this.subscription.add(
      this.notificationService.notifications$.subscribe(notifications => {
        this.unreadNotificationsCount = notifications.filter(n => !n.received).length;
      })
    );
  }

  ngOnDestroy(): void {
    // Se désabonner pour éviter les fuites de mémoire
    this.subscription.unsubscribe();
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
