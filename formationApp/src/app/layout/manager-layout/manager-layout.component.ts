import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/shared/app-sidebar/app-sidebar.component';

@Component({
  selector: 'app-manager-layout',
  templateUrl: './manager-layout.component.html',
  styleUrls: ['./manager-layout.component.scss']
})
export class ManagerLayoutComponent implements OnInit {
  sidebarMenuItems: MenuItem[] = [
    { path: '/manager', name: 'Tableau de bord', icon: 'fas fa-chart-bar' },
    { path: '/manager/formations', name: 'Formations', icon: 'fas fa-graduation-cap' },
    // { path: '/admin/employees', name: 'Employés', icon: 'fas fa-users' },
    // { path: '/admin/quizs', name: 'Quizs', icon: 'fas fa-question' },
    { path: '/manager/sessions', name: 'Sessions', icon: 'fas fa-calendar' },
    { path: '/manager/certifications', name: 'Certifications', icon: 'fas fa-certificate' },
    { path: '/manager/settings', name: 'Paramètres', icon: 'fas fa-cog' },
    // { path: "/admin/test", name: "Tests", icon: "fas fa-cog" },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onSidebarToggle(isOpen: boolean): void {
    console.log('Sidebar toggled:', isOpen);
  }

}
