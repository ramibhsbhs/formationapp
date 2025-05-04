import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Notification, NotificationType } from 'src/app/core/models/notification.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ToasterService } from 'src/app/core/services/toaster.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit, OnDestroy {
  notifications: Notification[] = [];
  isLoading = true;
  error: string | null = null;
  notificationType = NotificationType;

  private subscription = new Subscription();

  constructor(
    private notificationService: NotificationService,
    private toaster: ToasterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Indiquer au service que l'utilisateur est sur la page de notifications
    this.notificationService.enterNotificationsPage();

    // S'abonner aux notifications
    this.subscription.add(
      this.notificationService.notifications$.subscribe({
        next: (notifications) => {
          this.notifications = notifications;
          this.isLoading = false;
        },
        error: (err) => {
          this.error = err?.error?.message || 'Erreur lors du chargement des notifications';
          this.isLoading = false;
          this.toaster.showError('Erreur', 'Impossible de charger les notifications');
        }
      })
    );
  }

  ngOnDestroy(): void {
    // Indiquer au service que l'utilisateur quitte la page de notifications
    this.notificationService.exitNotificationsPage();

    // Se désabonner pour éviter les fuites de mémoire
    this.subscription.unsubscribe();
  }

  // marque toutes les notifications comme lues
  markAllAsRead(): void {
    this.notificationService.markAllAsRead()
      .subscribe({
        next: () => {
          this.notifications.forEach(notification => {
            notification.received = true;
          });
          this.toaster.showInfo('Toutes les notifications ont été marquées comme lues', 'Succès');
        },
        error: (err) => {
          this.toaster.showError('Erreur', 'Impossible de marquer toutes les notifications comme lues');
        }
      });
  }

  // si la notification a une actionUrl on le navigue vers cette url
  handleNotificationClick(notification: Notification): void {
    if (notification.actionUrl) {
      this.router.navigateByUrl(notification.actionUrl);
    }
  }
  // get le coulour de notification 
  getNotificationTypeClass(type: NotificationType): string {
    switch (type) {
      case NotificationType.Success:
        return 'bg-green-50 border-green-500';
      case NotificationType.Warning:
        return 'bg-yellow-50 border-yellow-500';
      case NotificationType.Danger:
        return 'bg-red-50 border-red-500';
      case NotificationType.Info:
      default:
        return 'bg-blue-50 border-blue-500';
    }
  }
  // get l'icon de notification selon to type du notification 
  getNotificationIconClass(type: NotificationType): string {
    switch (type) {
      case NotificationType.Success:
        return 'text-green-500 fas fa-check-circle';
      case NotificationType.Warning:
        return 'text-yellow-500 fas fa-exclamation-triangle';
      case NotificationType.Danger:
        return 'text-red-500 fas fa-times-circle';
      case NotificationType.Info:
      default:
        return 'text-blue-500 fas fa-info-circle';
    }
  }
  // juste pour formater la date exemple 'Il y a quelques secondes'  ou "Il y a minutes"
  getTimeAgo(date: Date): string {
    const now = new Date();
    const notificationDate = new Date(date);
    const diffInSeconds = Math.floor((now.getTime() - notificationDate.getTime()) / 1000);

    if (diffInSeconds < 60) {
      return 'Il y a quelques secondes';
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `Il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `Il y a ${hours} heure${hours > 1 ? 's' : ''}`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `Il y a ${days} jour${days > 1 ? 's' : ''}`;
    }
  }
}
