import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/shared/app-sidebar/app-sidebar.component';

@Component({
  selector: 'app-employee-layout',
  templateUrl: './employee-layout.component.html',
  styleUrls: ['./employee-layout.component.scss']
})
export class EmployeeLayoutComponent implements OnInit {
  sidebarMenuItems: MenuItem[] = [
    { path: '/condidat', name: 'Tableau de bord', icon: 'fas fa-chart-bar' },
    { path: '/condidat/formations', name: 'Formations', icon: 'fas fa-graduation-cap' },
    { path: '/condidat/certification', name: 'Certifications', icon: 'fas fa-certificate' },
    { path: '/condidat/notifications', name: 'Notifications', icon: 'fas fa-bell' },
    // { path: '/admin/employees', name: 'Employés', icon: 'fas fa-users' },
    // { path: '/admin/quizs', name: 'Quizs', icon: 'fas fa-question' },
    // { path: '/admin/sessions', name: 'Sessions', icon: 'fas fa-calendar' },
    // { path: '/admin/settings', name: 'Paramètres', icon: 'fas fa-cog' },
    // { path: "/admin/test", name: "Tests", icon: "fas fa-cog" },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onSidebarToggle(isOpen: boolean): void {
    console.log('Sidebar toggled:', isOpen);
  }
}
