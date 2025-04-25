import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FORMATION_CATEGORIES } from 'src/app/core/constants/formation.constants';
import { Formation } from 'src/app/core/models/formation.model';
import Training from 'src/app/core/models/training';
import { FormationService } from 'src/app/core/services/formation.service';
import { SessionPopupComponent } from 'src/app/shared/components/session-popup/session-popup.component';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {
handleDeleteTraining($event: number) {
throw new Error('Method not implemented.');
}
  categories = FORMATION_CATEGORIES
  trainings: Formation[] = [];

  searchTerm: string = '';
  isFormOpen: boolean = false;
  currentTraining: Training | null = null;
  filterCategory: string = '';
  isLoading: boolean = false;

  formationService  = inject(FormationService)
  dialog = inject(MatDialog)
  constructor() { }

  ngOnInit(): void {
    this.fetchFormations();
  }
  handleAddSession(id: number): void {
    const dialogRef = this.dialog.open(SessionPopupComponent, {
      data: { formationId: id }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fetchFormations();
      }
    });
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
    this.formationService.getFormations().subscribe(formations => {
      this.trainings = formations;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      console.error('Erreur lors de la récupération des formations', error);
    })
  }
}
