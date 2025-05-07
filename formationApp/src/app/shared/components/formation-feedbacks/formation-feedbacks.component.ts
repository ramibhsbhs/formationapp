import { Component, Input, OnInit } from '@angular/core';
import { Feedback } from 'src/app/core/models/feedback.model';
import { FeedbackService } from 'src/app/core/services/feedback.service';

@Component({
  selector: 'app-formation-feedbacks',
  templateUrl: './formation-feedbacks.component.html',
  styleUrls: ['./formation-feedbacks.component.scss']
})
export class FormationFeedbacksComponent implements OnInit {
  @Input() formationId!: number;
  @Input() canDelete: boolean = false;

  feedbacks: Feedback[] = [];
  loading = false;
  error: string | null = null;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.loadFeedbacks();
  }

  loadFeedbacks(): void {
    if (!this.formationId) {
      this.error = 'ID de formation non spécifié';
      return;
    }

    this.loading = true;
    this.feedbackService.getFeedbacksByFormation(this.formationId).subscribe({
      next: (feedbacks) => {
        this.feedbacks = feedbacks;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message || 'Erreur lors du chargement des feedbacks';
        this.loading = false;
      }
    });
  }

  /**
   * Convertit la valeur numérique (0-1) en tableau d'étoiles pour l'affichage sur 5
   * Retourne un tableau de 5 éléments avec les valeurs:
   * 2 = étoile pleine, 1 = demi-étoile, 0 = étoile vide
   */
  getStarsArray(value: number): number[] {
    const result = [];

    // Convertir la valeur de 0-1 à 0-5
    const valueOn5 = value * 5;

    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(valueOn5)) {
        // Étoile pleine
        result.push(2);
      } else if (i < Math.floor(valueOn5 + 0.5)) {
        // Demi-étoile
        result.push(1);
      } else {
        // Étoile vide
        result.push(0);
      }
    }

    return result;
  }

  /**
   * Calcule la note moyenne des feedbacks
   */
  getAverageRating(): number {
    if (this.feedbacks.length === 0) return 0;
    
    const sum = this.feedbacks.reduce((acc, feedback) => acc + feedback.value, 0);
    return sum / this.feedbacks.length;
  }

  /**
   * Supprime un feedback
   */
  deleteFeedback(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce feedback ?')) {
      this.feedbackService.deleteFeedback(id).subscribe({
        next: () => {
          this.feedbacks = this.feedbacks.filter(f => f.id !== id);
        },
        error: (err) => {
          this.error = err.message || 'Erreur lors de la suppression du feedback';
        }
      });
    }
  }

  /**
   * Formate une date au format dd/MM/yyyy
   */
  formatDate(date: Date): string {
    if (!date) return '';

    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();

    return `${day}/${month}/${year}`;
  }
}
