import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/shared/app-sidebar/app-sidebar.component';

@Component({
  selector: 'app-team-leader-layout',
  templateUrl: './team-leader-layout.component.html',
  styleUrls: ['./team-leader-layout.component.scss']
})
export class TeamLeaderLayoutComponent implements OnInit {
  sidebarMenuItems: MenuItem[] = [
    { path: '/admin', name: 'Tableau de bord', icon: 'fas fa-chart-bar' },
    { path: '/admin/formations', name: 'Formations', icon: 'fas fa-graduation-cap' },
    { path: '/admin/employees', name: 'Employés', icon: 'fas fa-users' },
    { path: '/admin/quizs', name: 'Quizs', icon: 'fas fa-question' },
    { path: '/admin/sessions', name: 'Sessions', icon: 'fas fa-calendar' },
    { path: '/admin/settings', name: 'Paramètres', icon: 'fas fa-cog' },
    // { path: "/admin/test", name: "Tests", icon: "fas fa-cog" },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onSidebarToggle(isOpen: boolean): void {
    console.log('Sidebar toggled:', isOpen);
  }

}
