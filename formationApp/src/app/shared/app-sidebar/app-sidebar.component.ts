import { Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

export interface MenuItem {
  path: string;
  name: string;
  icon: string;
  badge?: number; // Nombre à afficher dans le badge
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent implements OnInit, OnDestroy {
  @Input() menuItems: MenuItem[] = [];
  @Output() sidebarToggled = new EventEmitter<boolean>();
  auth = inject(AuthService);
  notificationService = inject(NotificationService);
  showPopup: boolean = false;
  isOpen: boolean = false;

  private subscription: Subscription = new Subscription();

  popupMenuItems = [
    { name: 'Settings', icon: 'fas fa-cog' },
    { name: 'Get Help', icon: 'fas fa-question-circle' },
    { name: 'Search', icon: 'fas fa-search' },
    { name: 'Account', icon: 'fas fa-user' },
    { name: 'Billing', icon: 'fas fa-credit-card' },
    { name: 'Notifications', icon: 'fas fa-bell' },
    { name: 'Log out', icon: 'fas fa-sign-out-alt', action: () => { this.auth.logout() } },
  ];
  constructor(private router: Router) {
    // Subscribe to route changes to update active state (optional)
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.showPopup = false;
    });
  }

  ngOnInit(): void {
    // S'abonner au nombre de notifications non lues
    this.subscription.add(
      this.notificationService.notifications$.subscribe(notifications => {
        // Mettre à jour le badge de notifications dans le menu
        const notificationMenuItem = this.menuItems.find(item => item.path.includes('/notifications'));
        if (notificationMenuItem) {
          notificationMenuItem.badge = notifications.filter(n => !n.received).length;;
        }
      })
    );
  }

  ngOnDestroy(): void {
    // Se désabonner pour éviter les fuites de mémoire
    this.subscription.unsubscribe();
  }

  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
    this.sidebarToggled.emit(this.isOpen); // Emit the new state
  }
  togglePopup(): void {
    this.showPopup = !this.showPopup;
  }
  handlePopupAction(item: any): void {
    if (item.action) {
      item.action();
    } else if (item.name === 'Settings') {
      // Déterminer la route de paramètres en fonction du rôle de l'utilisateur
      const user = this.auth.getCurrentUser();
      if (user) {
        let settingsPath = '';

        // Déterminer le chemin en fonction du rôle
        if (user.roles.includes('Administrator')) {
          settingsPath = '/admin/settings';
        } else if (user.roles.includes('Manager')) {
          settingsPath = '/manager/settings';
        } else if (user.roles.includes('HierarchicalLeader')) {
          settingsPath = '/supervisor/settings';
        } else {
          settingsPath = '/condidat/settings';
        }

        // Naviguer vers la page de paramètres
        this.router.navigate([settingsPath]);
      }
    }

    this.showPopup = false; // Close popup after action
  }
}
