import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { LoggedIn } from 'src/app/core/models/loggedIn';
import { AuthService } from 'src/app/core/services/auth.service';
import { GlobalStats, StatsService } from 'src/app/core/services/stats.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private auth = inject(AuthService);
  private statsService = inject(StatsService);

  user: LoggedIn | null = null;
  actionLink: string = '/login';
  actionText: string = 'Se connecter';

  stats: GlobalStats | null = null;
  loading = true;
  error = false;

  private subscriptions = new Subscription();

  // Données pour les témoignages
  testimonials = [
    {
      name: 'Sophie Martin',
      position: 'Directrice RH',
      company: 'TechSolutions',
      quote: 'Cette plateforme a transformé notre approche de la formation. Nos employés sont plus engagés et les résultats sont visibles.',
      avatar: 'assets/images/avatar-1.jpg'
    },
    {
      name: 'Thomas Dubois',
      position: 'Responsable Formation',
      company: 'IndustrieGroup',
      quote: 'La simplicité d\'utilisation combinée à des fonctionnalités puissantes fait de cette solution un outil indispensable pour notre entreprise.',
      avatar: 'assets/images/avatar-2.jpg'
    },
    {
      name: 'Émilie Rousseau',
      position: 'Directrice des Opérations',
      company: 'ConseilPro',
      quote: 'Le suivi des compétences et la gestion des certifications n\'ont jamais été aussi simples. Un gain de temps considérable pour nos équipes.',
      avatar: 'assets/images/avatar-3.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // S'abonner aux changements d'utilisateur
    this.subscriptions.add(
      this.auth.currentUser$.subscribe(user => {
        this.user = user;
        this.actionLink = user ? user.redirectUrl : '/login';
        this.actionText = user ? 'Accéder au tableau de bord' : 'Se connecter';
      })
    );

    // Charger les statistiques globales
    this.loadStats();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /**
   * Charge les statistiques globales depuis l'API
   */
  loadStats(): void {
    this.loading = true;
    this.error = false;

    this.subscriptions.add(
      this.statsService.getGlobalStats().subscribe({
        next: (data) => {
          this.stats = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Erreur lors du chargement des statistiques', err);
          this.error = true;
          this.loading = false;

          // Utiliser des données par défaut en cas d'erreur
          this.stats = {
            totalFormations: 24,
            totalUsers: 186,
            totalSessions: 8,
            successRate: 92,
            totalCertifications: 145,
            totalModules: 56,
            totalGroups: 12,
            totalQuizAttempts: 1250
          };
        }
      })
    );
  }

  /**
   * Rafraîchit les statistiques
   */
  refreshStats(): void {
    this.loadStats();
  }
}
