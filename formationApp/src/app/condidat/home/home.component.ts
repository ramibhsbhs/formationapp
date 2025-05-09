import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateDashboardData, DashboardService } from 'src/app/core/services/dashboard.service';
import { Chart, registerables } from 'chart.js';

// Enregistrer tous les composants de Chart.js
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('progressChart') progressChartCanvas!: ElementRef;
  @ViewChild('attemptsChart') attemptsChartCanvas!: ElementRef;

  dashboardData!: CandidateDashboardData;
  loading = true;
  error = false;

  // Références aux graphiques
  progressChart!: Chart;
  attemptsChart!: Chart;

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

    this.dashboardService.getCandidateDashboardData().subscribe({
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
    this.initProgressChart();
    this.initAttemptsChart();
  }

  initProgressChart(): void {
    if (this.progressChartCanvas && this.dashboardData?.formationProgress?.length > 0) {
      const ctx = this.progressChartCanvas.nativeElement.getContext('2d');

      if (this.progressChart) {
        this.progressChart.destroy();
      }

      const formationTitles = this.dashboardData.formationProgress.map(f => this.truncateTitle(f.formationTitle));
      const completedModules = this.dashboardData.formationProgress.map(f => f.modulesCompleted);
      const totalModules = this.dashboardData.formationProgress.map(f => f.totalModules);

      this.progressChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: formationTitles,
          datasets: [
            {
              label: 'Modules complétés',
              data: completedModules,
              backgroundColor: '#4F46E5',
              borderWidth: 0,
              borderRadius: 4
            },
            {
              label: 'Total des modules',
              data: totalModules,
              backgroundColor: '#E5E7EB',
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
              text: 'Progression des formations'
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Nombre de modules'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Formations'
              }
            }
          }
        }
      });
    }
  }

  initAttemptsChart(): void {
    if (this.attemptsChartCanvas && this.dashboardData?.attemptsOverTime?.length > 0) {
      const ctx = this.attemptsChartCanvas.nativeElement.getContext('2d');

      if (this.attemptsChart) {
        this.attemptsChart.destroy();
      }

      this.attemptsChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.dashboardData.attemptsOverTime.map(item => item.month),
          datasets: [{
            label: 'Tentatives de quiz',
            data: this.dashboardData.attemptsOverTime.map(item => item.count),
            borderColor: '#10B981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
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
              text: 'Vos tentatives de quiz par mois'
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

  truncateTitle(title: string): string {
    return title.length > 20 ? title.substring(0, 17) + '...' : title;
  }

  refreshData(): void {
    this.loadDashboardData();
  }

  viewFormations(): void {
    this.router.navigate(['/condidat/formations']);
  }

  viewCertifications(): void {
    this.router.navigate(['/condidat/certification']);
  }
}
