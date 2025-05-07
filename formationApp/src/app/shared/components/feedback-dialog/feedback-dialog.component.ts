import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FeedbackService } from 'src/app/core/services/feedback.service';
import { ToasterService } from 'src/app/core/services/toaster.service';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.scss']
})
export class FeedbackDialogComponent implements OnInit {
  form!: FormGroup;
  isLoading = false;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedRating = 0;
  hoverRating = 0;

  constructor(
    private dialogRef: MatDialogRef<FeedbackDialogComponent>,
    private fb: FormBuilder,
    private feedbackService: FeedbackService,
    private toaster: ToasterService,
    @Inject(MAT_DIALOG_DATA) public data: { formationId: number, formationTitle: string }
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      description: [''],
      value: [0, [Validators.required, Validators.min(0), Validators.max(1)]],
      formationId: [this.data.formationId, Validators.required]
    });
  }

  /**
   * Définit la note sélectionnée (1-5) et met à jour le formulaire (0-1)
   */
  setRating(rating: number): void {
    // Utiliser setTimeout pour éviter les problèmes de détection de changement
    setTimeout(() => {
      this.selectedRating = rating;
      // Convertir la note de 1-5 à 0-1 pour le backend
      const normalizedValue = rating / 5;
      this.form.get('value')?.setValue(normalizedValue);
    }, 0);
  }

  /**
   * Définit la note survolée
   */
  setHoverRating(rating: number): void {
    // Utiliser setTimeout pour éviter les problèmes de détection de changement
    setTimeout(() => {
      this.hoverRating = rating;
    }, 0);
  }

  /**
   * Réinitialise la note survolée
   */
  resetHoverRating(): void {
    // Utiliser setTimeout pour éviter les problèmes de détection de changement
    setTimeout(() => {
      this.hoverRating = 0;
    }, 0);
  }

  /**
   * Soumet le formulaire
   */
  onSubmit(): void {
    if (this.form.valid) {
      this.isLoading = true;
      this.feedbackService.createFeedback(this.form.value).subscribe({
        next: (feedback) => {
          this.isLoading = false;
          this.toaster.showSuccess('Merci pour votre feedback !', 'Feedback envoyé');
          this.dialogRef.close(feedback);
        },
        error: (error) => {
          this.isLoading = false;
          this.toaster.showError('Une erreur est survenue lors de l\'envoi du feedback.', 'Erreur');
          console.error('Erreur lors de la création du feedback:', error);
        }
      });
    }
  }

  /**
   * Ferme le dialogue sans soumettre
   */
  onCancel(): void {
    this.dialogRef.close();
  }
}
