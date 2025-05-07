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
  sidebarMenuItems: MenuItem[] = [
    { path: '/supervisor', name: 'Tableau de bord', icon: 'fas fa-chart-bar' },
    { path: '/supervisor/formations', name: 'Formations', icon: 'fas fa-graduation-cap' },
    { path: '/supervisor/group', name: 'Mon Groupe', icon: 'fas fa-users' },
    { path: '/supervisor/certifications', name: 'Certifications', icon: 'fas fa-certificate' },
    { path: '/supervisor/notifications', name: 'Notifications', icon: 'fas fa-bell' },

  ];

  private subscription = new Subscription();
  notificationService = inject(NotificationService);

  constructor() { }

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
  }

  ngOnDestroy(): void {
    // Se désabonner pour éviter les fuites de mémoire
    this.subscription.unsubscribe();
  }

  onSidebarToggle(isOpen: boolean): void {
    console.log('Sidebar toggled:', isOpen);
  }
}
