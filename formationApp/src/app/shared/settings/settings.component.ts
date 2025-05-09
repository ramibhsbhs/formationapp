import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { Subscription } from 'rxjs';
import { LoggedIn } from 'src/app/core/models/loggedIn';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  // Formulaires
  profileForm: FormGroup;
  passwordForm: FormGroup;
  notificationForm: FormGroup;
  appearanceForm: FormGroup;
  
  // État du composant
  loading = false;
  user: LoggedIn | null = null;
  activeTab = 'profile';
  
  // Options d'apparence
  themeOptions = [
    { value: 'light', label: 'Clair' },
    { value: 'dark', label: 'Sombre' },
    { value: 'system', label: 'Système' }
  ];
  
  fontSizeOptions = [
    { value: 'small', label: 'Petit' },
    { value: 'medium', label: 'Moyen' },
    { value: 'large', label: 'Grand' }
  ];
  
  // Gestion des abonnements
  private subscriptions = new Subscription();
  
  // Prévisualisation de l'image de profil
  imagePreview: string | null = null;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private toaster: ToasterService
  ) {
    // Initialisation des formulaires
    this.profileForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      bio: [''],
      phoneNumber: ['']
    });
    
    this.passwordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
    
    this.notificationForm = this.fb.group({
      emailNotifications: [true],
      pushNotifications: [true],
      formationReminders: [true],
      quizReminders: [true],
      sessionUpdates: [true]
    });
    
    this.appearanceForm = this.fb.group({
      theme: ['light'],
      fontSize: ['medium'],
      highContrast: [false],
      animationsReduced: [false]
    });
  }

  ngOnInit(): void {
    // Charger les données de l'utilisateur
    this.subscriptions.add(
      this.authService.currentUser$.subscribe(user => {
        this.user = user;
        if (user) {
          this.profileForm.patchValue({
            userName: user.username,
            email: user.email,
            // Les autres champs seront chargés depuis le service utilisateur
          });
          
          // Charger les données complètes de l'utilisateur
          this.loadUserData(user.id);
        }
      })
    );
    
    // Charger les préférences d'apparence depuis le stockage local
    this.loadAppearanceSettings();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
  
  // Chargement des données utilisateur complètes
  loadUserData(userId: number): void {
    this.loading = true;
    this.subscriptions.add(
      this.userService.getUserById(userId).subscribe({
        next: (userData :any) => {
          this.profileForm.patchValue({
            bio: userData.bio || '',
            phoneNumber: userData.phoneNumber || ''
          });
          this.loading = false;
        },
        error: (error:any) => {
          console.error('Erreur lors du chargement des données utilisateur', error);
          this.toaster.showError('Erreur lors du chargement des données utilisateur',"");
          this.loading = false;
        }
      })
    );
  }
  
  // Chargement des préférences d'apparence
  loadAppearanceSettings(): void {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedFontSize = localStorage.getItem('fontSize') || 'medium';
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedAnimationsReduced = localStorage.getItem('animationsReduced') === 'true';
    
    this.appearanceForm.patchValue({
      theme: savedTheme,
      fontSize: savedFontSize,
      highContrast: savedHighContrast,
      animationsReduced: savedAnimationsReduced
    });
    
    // Appliquer les paramètres
    this.applyAppearanceSettings();
  }
  
  // Validation de la correspondance des mots de passe
  passwordMatchValidator(g: FormGroup) {
    return g.get('newPassword')?.value === g.get('confirmPassword')?.value
      ? null : { 'mismatch': true };
  }
  
  // Changement d'onglet
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
  
  // Gestion de l'upload d'image
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      
      // Prévisualisation de l'image
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
  
  // Soumission du formulaire de profil
  onProfileSubmit(): void {
    if (this.profileForm.invalid) {
      return;
    }
    
    this.loading = true;
    const profileData = {
      ...this.profileForm.value,
      id: this.user?.id
    };
    
    this.subscriptions.add(
      this.userService.updateUserProfile(profileData, this.selectedFile).subscribe({
        next: () => {
          this.toaster.showSuccess('Profil mis à jour avec succès',"");
          this.loading = false;
        },
        error: (error:any) => {
          console.error('Erreur lors de la mise à jour du profil', error);
          this.toaster.showError('Erreur lors de la mise à jour du profil',"");
          this.loading = false;
        }
      })
    );
  }
  
  // Soumission du formulaire de mot de passe
  onPasswordSubmit(): void {
    if (this.passwordForm.invalid) {
      return;
    }
    
    this.loading = true;
    const passwordData = {
      userId: this.user?.id,
      currentPassword: this.passwordForm.value.currentPassword,
      newPassword: this.passwordForm.value.newPassword
    };
    
    this.subscriptions.add(
      this.userService.changePassword(passwordData).subscribe({
        next: () => {
          this.toaster.showSuccess('Mot de passe modifié avec succès',"");
          this.passwordForm.reset();
          this.loading = false;
        },
        error: (error:any) => {
          console.error('Erreur lors du changement de mot de passe', error);
          this.toaster.showError('Erreur lors du changement de mot de passe',"");
          this.loading = false;
        }
      })
    );
  }
  
  // Soumission du formulaire de notifications
  onNotificationSubmit(): void {
    if (this.notificationForm.invalid) {
      return;
    }
    
    this.loading = true;
    const notificationSettings = this.notificationForm.value;
    
    // Enregistrer les préférences de notification
    localStorage.setItem('notificationSettings', JSON.stringify(notificationSettings));
    this.toaster.showSuccess('Préférences de notification enregistrées',"");
    this.loading = false;
  }
  
  // Soumission du formulaire d'apparence
  onAppearanceSubmit(): void {
    if (this.appearanceForm.invalid) {
      return;
    }
    
    const appearanceSettings = this.appearanceForm.value;
    
    // Enregistrer les préférences d'apparence
    localStorage.setItem('theme', appearanceSettings.theme);
    localStorage.setItem('fontSize', appearanceSettings.fontSize);
    localStorage.setItem('highContrast', appearanceSettings.highContrast.toString());
    localStorage.setItem('animationsReduced', appearanceSettings.animationsReduced.toString());
    
    // Appliquer les paramètres
    this.applyAppearanceSettings();
    
    this.toaster.showSuccess('Préférences d\'apparence enregistrées',"");
  }
  
  // Application des paramètres d'apparence
  applyAppearanceSettings(): void {
    const settings = this.appearanceForm.value;
    const htmlElement = document.documentElement;
    
    // Appliquer le thème
    if (settings.theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    
    // Appliquer la taille de police
    htmlElement.classList.remove('text-sm', 'text-base', 'text-lg');
    switch (settings.fontSize) {
      case 'small':
        htmlElement.classList.add('text-sm');
        break;
      case 'medium':
        htmlElement.classList.add('text-base');
        break;
      case 'large':
        htmlElement.classList.add('text-lg');
        break;
    }
    
    // Appliquer le contraste élevé
    if (settings.highContrast) {
      htmlElement.classList.add('high-contrast');
    } else {
      htmlElement.classList.remove('high-contrast');
    }
    
    // Appliquer la réduction des animations
    if (settings.animationsReduced) {
      htmlElement.classList.add('reduce-motion');
    } else {
      htmlElement.classList.remove('reduce-motion');
    }
  }
}
