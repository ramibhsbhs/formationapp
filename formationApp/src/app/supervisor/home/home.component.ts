import { Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { DashboardService, SupervisorDashboardData } from 'src/app/core/services/dashboard.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Chart, registerables } from 'chart.js';

// Enregistrer tous les composants de Chart.js
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('attemptsChart') attemptsChartCanvas!: ElementRef;
  @ViewChild('userProgressChart') userProgressChartCanvas!: ElementRef;
  @ViewChild('topFormationsChart') topFormationsChartCanvas!: ElementRef;

  userName: string = '';
  unreadNotificationsCount: number = 0;
  dashboardData!: SupervisorDashboardData;
  loading = true;
  error = false;

  // Références aux graphiques
  attemptsChart!: Chart;
  userProgressChart!: Chart;
  topFormationsChart!: Chart;

  private subscription = new Subscription();

  authService = inject(AuthService);
  router = inject(Router);
  notificationService = inject(NotificationService);
  dashboardService = inject(DashboardService);

  ngOnInit(): void {
    // S'abonner aux notifications pour mettre à jour le compteur
    this.subscription.add(
      this.notificationService.notifications$.subscribe(notifications => {
        this.unreadNotificationsCount = notifications.filter(n => !n.received).length;
      })
    );

    // Charger les données du tableau de bord
    this.loadDashboardData();
  }

  ngOnDestroy(): void {
    // Se désabonner pour éviter les fuites de mémoire
    this.subscription.unsubscribe();
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  loadDashboardData(): void {
    this.loading = true;
    this.error = false;

    this.dashboardService.getSupervisorDashboardData().subscribe({
      next: (data) => {
        this.dashboardData = data;
        this.loading = false;

        // Initialiser les graphiques après le chargement des données
        setTimeout(() => {
          this.initCharts();
        }, 100);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des données du tableau de bord', err);
        this.loading = false;
        this.error = true;
      }
    });
  }

  initCharts(): void {
    this.initAttemptsChart();
    this.initUserProgressChart();
    this.initTopFormationsChart();
  }

  initAttemptsChart(): void {
    if (this.attemptsChartCanvas && this.dashboardData?.groupAttemptsOverTime?.length > 0) {
      const ctx = this.attemptsChartCanvas.nativeElement.getContext('2d');

      if (this.attemptsChart) {
        this.attemptsChart.destroy();
      }

      this.attemptsChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.dashboardData.groupAttemptsOverTime.map(item => item.month),
          datasets: [{
            label: 'Tentatives de quiz',
            data: this.dashboardData.groupAttemptsOverTime.map(item => item.count),
            borderColor: '#4F46E5',
            backgroundColor: 'rgba(79, 70, 229, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Tentatives de quiz par mois'
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }

  initUserProgressChart(): void {
    if (this.userProgressChartCanvas && this.dashboardData?.userProgress?.length > 0) {
      const ctx = this.userProgressChartCanvas.nativeElement.getContext('2d');

      if (this.userProgressChart) {
        this.userProgressChart.destroy();
      }

      const userNames = this.dashboardData.userProgress.map(u => this.truncateUserName(u.userName));
      const formationsCompleted = this.dashboardData.userProgress.map(u => u.formationsCompleted);
      const certificationsEarned = this.dashboardData.userProgress.map(u => u.certificationsEarned);

      this.userProgressChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: userNames,
          datasets: [
            {
              label: 'Formations complétées',
              data: formationsCompleted,
              backgroundColor: '#10B981',
              borderWidth: 0,
              borderRadius: 4
            },
            {
              label: 'Certifications obtenues',
              data: certificationsEarned,
              backgroundColor: '#8B5CF6',
              borderWidth: 0,
              borderRadius: 4
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Progression des utilisateurs'
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Nombre'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Utilisateurs'
              }
            }
          }
        }
      });
    }
  }

  initTopFormationsChart(): void {
    if (this.topFormationsChartCanvas && this.dashboardData?.topGroupFormations?.length > 0) {
      const ctx = this.topFormationsChartCanvas.nativeElement.getContext('2d');

      if (this.topFormationsChart) {
        this.topFormationsChart.destroy();
      }

      this.topFormationsChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.dashboardData.topGroupFormations.map(item => this.truncateTitle(item.title)),
          datasets: [{
            label: 'Nombre de tentatives',
            data: this.dashboardData.topGroupFormations.map(item => item.count),
            backgroundColor: '#F59E0B',
            borderWidth: 0,
            borderRadius: 4
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Formations les plus populaires'
            }
          },
          scales: {
            x: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }

  truncateTitle(title: string): string {
    return title.length > 25 ? title.substring(0, 22) + '...' : title;
  }

  truncateUserName(userName: string): string {
    return userName.length > 15 ? userName.substring(0, 12) + '...' : userName;
  }

  refreshData(): void {
    this.loadDashboardData();
  }
}
