import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuItem } from 'src/app/shared/app-sidebar/app-sidebar.component';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-team-leader-layout',
  templateUrl: './team-leader-layout.component.html',
  styleUrls: ['./team-leader-layout.component.scss']
})
export class TeamLeaderLayoutComponent implements OnInit, OnDestroy {
  // État de la sidebar (ouverte/fermée)
  sidebarOpen: boolean = true;

  sidebarMenuItems: MenuItem[] = [
    { path: '/supervisor', name: 'Tableau de bord', icon: 'fas fa-chart-bar' },
    { path: '/supervisor/formations', name: 'Formations', icon: 'fas fa-graduation-cap' },
    { path: '/supervisor/group', name: 'Mon Groupe', icon: 'fas fa-users' },
    { path: '/supervisor/certifications', name: 'Certifications', icon: 'fas fa-certificate' },
    { path: '/supervisor/notifications', name: 'Notifications', icon: 'fas fa-bell' },
  ];

  private subscription = new Subscription();
  notificationService = inject(NotificationService);

  constructor() {
    // Initialiser l'état de la sidebar en fonction de la taille de l'écran
    this.sidebarOpen = window.innerWidth >= 768;
  }

  ngOnInit(): void {
    // S'abonner aux notifications pour mettre à jour le badge
    this.subscription.add(
      this.notificationService.notifications$.subscribe(notifications => {
        // Mettre à jour le badge de notifications dans le menu
        const notificationMenuItem = this.sidebarMenuItems.find(item => item.path.includes('/notifications'));
        if (notificationMenuItem) {
          notificationMenuItem.badge = notifications.filter(n => !n.received).length;
        }
      })
    );

    // Ajouter un écouteur de redimensionnement pour mettre à jour l'état de la sidebar
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  ngOnDestroy(): void {
    // Se désabonner pour éviter les fuites de mémoire
    this.subscription.unsubscribe();

    // Supprimer l'écouteur de redimensionnement pour éviter les fuites de mémoire
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  /**
   * Gère le redimensionnement de la fenêtre
   */
  private handleResize(): void {
    // Mettre à jour l'état de la sidebar en fonction de la taille de l'écran
    this.sidebarOpen = window.innerWidth >= 768;
  }

  /**
   * Gère le basculement de la sidebar
   * @param isOpen Nouvel état de la sidebar
   */
  onSidebarToggle(isOpen: boolean): void {
    this.sidebarOpen = isOpen;
  }
}
