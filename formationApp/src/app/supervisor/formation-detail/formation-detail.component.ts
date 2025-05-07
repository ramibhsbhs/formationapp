import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/core/models/formation.model';
import { FormationService } from 'src/app/core/services/formation.service';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.scss']
})
export class FormationDetailComponent implements OnInit {
  formation: Formation | null = null;
  isLoading: boolean = false;
  error: string | null = null;
  activeTab: 'info' | 'modules' | 'results' = 'info';

  route = inject(ActivatedRoute);
  router = inject(Router);
  formationService = inject(FormationService);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.loadFormation(+params['id']);
      }
    });

    // Récupérer l'onglet actif depuis les paramètres de requête
    this.route.queryParams.subscribe(params => {
      if (params['tab'] && ['info', 'modules', 'results'].includes(params['tab'])) {
        this.activeTab = params['tab'] as 'info' | 'modules' | 'results';
      }
    });
  }

  loadFormation(id: number): void {
    this.isLoading = true;
    this.error = null;

    this.formationService.getFormation(id).subscribe({
      next: (formation) => {
        this.formation = formation;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement de la formation. Veuillez réessayer plus tard.';
        this.isLoading = false;
        console.error('Erreur lors du chargement de la formation:', err);
      }
    });
  }

  setActiveTab(tab: 'info' | 'modules' | 'results'): void {
    this.activeTab = tab;
    
    // Mettre à jour l'URL sans recharger la page
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tab },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }

  goBack(): void {
    this.router.navigate(['/supervisor/formations']);
  }
}
