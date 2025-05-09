import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'src/app/shared/app-sidebar/app-sidebar.component';

@Component({
  selector: 'app-manager-layout',
  templateUrl: './manager-layout.component.html',
  styleUrls: ['./manager-layout.component.scss']
})
export class ManagerLayoutComponent implements OnInit, OnDestroy {
  // État de la sidebar (ouverte/fermée)
  sidebarOpen: boolean = true;

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

  constructor() {
    // Initialiser l'état de la sidebar en fonction de la taille de l'écran
    this.sidebarOpen = window.innerWidth >= 768;
  }

  ngOnInit(): void {
    // Ajouter un écouteur de redimensionnement pour mettre à jour l'état de la sidebar
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  ngOnDestroy(): void {
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
