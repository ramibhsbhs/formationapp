import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FORMATION_CATEGORIES } from 'src/app/core/constants/formation.constants';
import { Formation } from 'src/app/core/models/formation.model';
import { FormationService } from 'src/app/core/services/formation.service';

@Component({
  selector: 'app-supervisor-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  categories = FORMATION_CATEGORIES;
  trainings: Formation[] = [];
  searchTerm: string = '';
  filterCategory: string = '';
  isLoading: boolean = false;
  isFormOpen: boolean = false;

  formationService = inject(FormationService);
  router = inject(Router);
  dialog = inject(MatDialog);

  ngOnInit(): void {
    this.fetchFormations();
  }

  onSearch(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  get filteredTrainings(): Formation[] {
    return this.trainings.filter(training =>
      training.title.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.filterCategory === '' || training.category === this.filterCategory)
    );
  }

  onFilterCategory(event: Event): void {
    this.filterCategory = (event.target as HTMLSelectElement).value;
  }

  fetchFormations(): void {
    this.isLoading = true;
    // Utilise le service de formation pour récupérer les formations
    // Le backend filtrera automatiquement pour ne renvoyer que les formations du groupe du superviseur
    this.formationService.getFormations().subscribe({
      next: (formations) => {
        this.trainings = formations;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Erreur lors de la récupération des formations', error);
      }
    });
  }

  viewFormationDetails(id: number): void {
    this.router.navigate(['/supervisor/formations', id]);
  }
}
