import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

export interface MenuItem {
  path: string;
  name: string;
  icon: string; 
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent {
  @Input() menuItems: MenuItem[] = [];
  @Output() sidebarToggled = new EventEmitter<boolean>();
  auth = inject(AuthService)
  showPopup: boolean = false;
  isOpen: boolean = false;

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
    }
    this.showPopup = false; // Close popup after action
  }
}
