import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FORMATION_CATEGORIES } from 'src/app/core/constants/formation.constants';
import { Formation } from 'src/app/core/models/formation.model';
import Training from 'src/app/core/models/training';
import { FormationService } from 'src/app/core/services/formation.service';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { SessionPopupComponent } from 'src/app/shared/components/session-popup/session-popup.component';
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  categories = FORMATION_CATEGORIES
  trainings: Formation[] = [];

  searchTerm: string = '';
  isFormOpen: boolean = false;
  currentTraining: Training | null = null;
  filterCategory: string = '';
  isLoading: boolean = false;


  constructor(
    private formationService: FormationService,
    private dialog: MatDialog,
    private toaster: ToasterService,
    private router: Router
  ) { }


  get filteredTrainings(): Formation[] {
    return this.trainings.filter(training =>
      training.title.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.filterCategory === '' || training.category === this.filterCategory)
    );
  }

  onSearch(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  onFilterCategory(event: Event): void {
    this.filterCategory = (event.target as HTMLSelectElement).value;
  }

  handleEditTraining(id: number): void {
    this.router.navigate(['/admin/formations/edit', id]);
  }

  handleDeleteTraining(id: number): void {
    // if (window.confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
    //   this.trainings = this.trainings.filter(t => t.id !== id);
    // }
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

  ngOnInit(): void {
    this.fetchFormations();
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

  deleteFormation(id: number): void {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
      this.formationService.deleteFormation(id).subscribe(() => {
        this.fetchFormations();
        this.toaster.showSuccess('Formation supprimée', 'La formation a été supprimée avec succès.');

      }, error => {
        console.error('Erreur lors de la suppression de la formation', error);
        this.toaster.showError('Erreur', 'Une erreur est survenue lors de la suppression de la formation.');
      });
    }
  }
}
