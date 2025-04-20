import { Component, OnInit } from '@angular/core';
import Training from 'src/app/core/models/training';
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent {
  trainings: Training[] = [
    {
      id: 1,
      title: 'Formation à la sécurité en atelier',
      description: 'Formation obligatoire sur les règles de sécurité à respecter en atelier. Couvre les équipements de protection, les procédures d\'urgence et les bonnes pratiques.',
      category: 'safety',
      duration: 4,
      sessions: 12,
      participants: 78
    },
    {
      id: 2,
      title: 'Maintenance de premier niveau',
      description: 'Comment effectuer l\'entretien de base des machines et équipements pour prévenir les pannes et optimiser leur durée de vie.',
      category: 'technical',
      duration: 8,
      sessions: 6,
      participants: 42
    },
    {
      id: 3,
      title: 'Leadership et gestion d\'équipe',
      description: 'Techniques de management pour les chefs d\'équipe. Communication efficace, résolution de conflits et motivation des équipes.',
      category: 'management',
      duration: 16,
      sessions: 3,
      participants: 24
    },
    {
      id: 4,
      title: 'Contrôle qualité',
      description: 'Formation aux procédures de contrôle qualité, aux normes ISO 9001 et aux techniques d\'amélioration continue.',
      category: 'quality',
      duration: 12,
      sessions: 5,
      participants: 35
    },
    {
      id: 5,
      title: 'Communication efficace',
      description: 'Améliorer la communication au sein des équipes et avec les autres départements. Techniques de communication écrite et orale.',
      category: 'communication',
      duration: 6,
      sessions: 4,
      participants: 30
    },
    {
      id: 6,
      title: 'Utilisation des machines CNC',
      description: 'Formation technique à l\'utilisation et à la programmation des machines à commande numérique.',
      category: 'technical',
      duration: 24,
      sessions: 2,
      participants: 16
    }
  ];

  searchTerm: string = '';
  isFormOpen: boolean = false;
  currentTraining: Training | null = null;
  filterCategory: string = '';

  get filteredTrainings(): Training[] {
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

  openForm(training: Training | null = null): void {
    this.currentTraining = training;
    this.isFormOpen = true;
  }

  closeForm(): void {
    this.isFormOpen = false;
    this.currentTraining = null;
  }

  handleFormSubmit(data: any): void {
    if (this.currentTraining) {
      // Update existing training
      this.trainings = this.trainings.map(t =>
        t.id === this.currentTraining!.id ? { ...t, ...data } : t
      );
    } else {
      // Add new training
      const newTraining: Training = {
        id: this.trainings.length + 1,
        ...data,
        sessions: 0,
        participants: 0
      };
      this.trainings = [...this.trainings, newTraining];
    }
    this.closeForm();
  }

  handleEditTraining(id: number): void {
    const trainingToEdit = this.trainings.find(t => t.id === id);
    if (trainingToEdit) {
      this.openForm(trainingToEdit);
    }
  }

  handleDeleteTraining(id: number): void {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
      this.trainings = this.trainings.filter(t => t.id !== id);
    }
  }

  handleAddSession(id: number): void {
    alert(`Ajouter une session pour la formation avec l'ID: ${id}`);
  }
}
