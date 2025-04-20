import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.settingsForm = this.fb.group({
      companyName: ['SUMITOMO ELECTRIC BORDNETZE SE', Validators.required],
      logo: [null], // For simplicity, we'll handle logo upload separately
      emailNotifications: [true],
      reminderDays: [7, [Validators.min(1), Validators.max(30)]],
      defaultSessionCapacity: [15, [Validators.min(1)]],
      mandatoryTrainingReminders: [true],
      reportEmail: ['admin@example.com', [Validators.email, Validators.required]],
      language: ['fr', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.settingsForm.valid) {
      console.log('Settings saved:', this.settingsForm.value);
      alert('Paramètres enregistrés avec succès!');
      // Here you would typically send the data to a backend service
    } else {
      alert('Veuillez corriger les erreurs dans le formulaire.');
    }
  }

  onCancel(): void {
    this.settingsForm.reset({
      companyName: 'SUMITOMO ELECTRIC BORDNETZE SE',
      logo: null,
      emailNotifications: true,
      reminderDays: 7,
      defaultSessionCapacity: 15,
      mandatoryTrainingReminders: true,
      reportEmail: 'admin@example.com',
      language: 'fr'
    });
  }

}
