import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardData, DashboardService } from 'src/app/core/services/dashboard.service';
import { Chart, registerables } from 'chart.js';

// Enregistrer tous les composants de Chart.js
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('categoryChart') categoryChartCanvas!: ElementRef;
  @ViewChild('attemptsChart') attemptsChartCanvas!: ElementRef;
  @ViewChild('ratingsChart') ratingsChartCanvas!: ElementRef;
  @ViewChild('topFormationsChart') topFormationsChartCanvas!: ElementRef;

  dashboardData!: DashboardData;
  loading = true;
  error = false;

  // Références aux graphiques
  categoryChart!: Chart;
  attemptsChart!: Chart;
  ratingsChart!: Chart;
  topFormationsChart!: Chart;

  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.loading = true;
    this.error = false;

    this.dashboardService.getManagerDashboardData().subscribe({
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
    this.initCategoryChart();
    this.initAttemptsChart();
    this.initRatingsChart();
    this.initTopFormationsChart();
  }

  initCategoryChart(): void {
    if (this.categoryChartCanvas && this.dashboardData?.formationsByCategory?.length > 0) {
      const ctx = this.categoryChartCanvas.nativeElement.getContext('2d');

      if (this.categoryChart) {
        this.categoryChart.destroy();
      }

      this.categoryChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: this.dashboardData.formationsByCategory.map(item => item.category),
          datasets: [{
            data: this.dashboardData.formationsByCategory.map(item => item.count),
            backgroundColor: [
              '#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6',
              '#EC4899', '#06B6D4', '#84CC16', '#F97316', '#6366F1'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
            },
            title: {
              display: true,
              text: 'Formations par catégorie'
            }
          }
        }
      });
    }
  }

  initAttemptsChart(): void {
    if (this.attemptsChartCanvas && this.dashboardData?.quizAttemptsOverTime?.length > 0) {
      const ctx = this.attemptsChartCanvas.nativeElement.getContext('2d');

      if (this.attemptsChart) {
        this.attemptsChart.destroy();
      }

      this.attemptsChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.dashboardData.quizAttemptsOverTime.map(item => item.month),
          datasets: [{
            label: 'Tentatives de quiz',
            data: this.dashboardData.quizAttemptsOverTime.map(item => item.count),
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

  initRatingsChart(): void {
    if (this.ratingsChartCanvas && this.dashboardData?.feedbackRatings?.length > 0) {
      const ctx = this.ratingsChartCanvas.nativeElement.getContext('2d');

      if (this.ratingsChart) {
        this.ratingsChart.destroy();
      }

      this.ratingsChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.dashboardData.feedbackRatings.map(item => `${item.rating.toFixed(1)} étoiles`),
          datasets: [{
            label: 'Nombre d\'évaluations',
            data: this.dashboardData.feedbackRatings.map(item => item.count),
            backgroundColor: '#10B981',
            borderWidth: 0,
            borderRadius: 4
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Distribution des évaluations'
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

  initTopFormationsChart(): void {
    if (this.topFormationsChartCanvas && this.dashboardData?.topFormations?.length > 0) {
      const ctx = this.topFormationsChartCanvas.nativeElement.getContext('2d');

      if (this.topFormationsChart) {
        this.topFormationsChart.destroy();
      }

      this.topFormationsChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.dashboardData.topFormations.map(item => this.truncateTitle(item.title)),
          datasets: [{
            label: 'Nombre de tentatives',
            data: this.dashboardData.topFormations.map(item => item.count),
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

  refreshData(): void {
    this.loadDashboardData();
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
