import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CondidatService } from '../../core/condidat.service';
import { CondidatFormation, Module } from '../../core/models';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { AttachmentService } from 'src/app/core/services/attachment.service';

@Component({
  selector: 'app-module-view',
  templateUrl: './module-view.component.html',
  styleUrls: ['./module-view.component.scss']
})
export class ModuleViewComponent implements OnInit {
  // Paramètres d'URL
  formationId: number = 0;
  moduleId: number = 0;
  sessionId: number | null = null;

  // Données
  loading: boolean = true;
  error: string | null = null;
  formation: CondidatFormation | null = null;
  currentModule: Module | null = null;
  nextModuleId: number | null = null;
  isLastModule: boolean = false;
  currentSession: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private condidatService: CondidatService,
    private toaster: ToasterService,
    private attachmentService: AttachmentService
  ) { }

  ngOnInit(): void {
    // Récupérer les paramètres de l'URL
    this.route.params.subscribe(params => {
      this.formationId = +params['formationId'];
      this.moduleId = +params['moduleId'];

      // Récupérer le sessionId s'il existe
      if (params['sessionId']) {
        this.sessionId = +params['sessionId'];
      }

      // Charger les données
      this.loadFormation();
    });
  }

  /**
   * Charge les données de la formation
   */
  loadFormation(): void {
    this.loading = true;
    this.error = null;

    this.condidatService.getFormation(this.formationId).subscribe({
      next: (formation) => {
        this.formation = formation;

        // Trier les modules par position
        if (formation.modules) {
          formation.modules.sort((a, b) => a.position - b.position);
        }

        // Trouver le module actuel
        this.currentModule = formation.modules.find(m => m.id === this.moduleId) || null;

        if (!this.currentModule) {
          this.error = 'Module non trouvé';
          this.loading = false;
          return;
        }

        // Trouver la session si un sessionId est fourni
        if (this.sessionId && formation.sessions) {
          this.currentSession = formation.sessions.find(s => s.sessionId === this.sessionId);

          if (!this.currentSession) {
            this.toaster.showInfo('Session non trouvée. Vous êtes en mode consultation.', 'Attention');
          }
        }

        // Trouver le module suivant
        const currentIndex = formation.modules.findIndex(m => m.id === this.moduleId);
        if (currentIndex !== -1 && currentIndex < formation.modules.length - 1) {
          this.nextModuleId = formation.modules[currentIndex + 1].id;
        } else {
          this.isLastModule = true;
        }

        this.loading = false;
      },
      error: (err) => {
        this.error = err?.message || 'Erreur lors du chargement de la formation';
        this.loading = false;
      }
    });
  }

  /**
   * Marque le module actuel comme complété et passe au module suivant
   */
  completeAndContinue(): void {
    if (!this.formation || !this.currentModule) return;

    // Simuler la complétion du module (dans une implémentation réelle, on appellerait une API)
    this.currentModule.isCompleted = true;

    // Si c'est le dernier module, rediriger vers le quiz final
    if (this.isLastModule) {
      this.toaster.showInfo('Vous avez terminé tous les modules. Vous allez être redirigé vers le quiz final.', 'Félicitations');

      // Rediriger vers le quiz final avec la session si disponible
      setTimeout(() => {
        const queryParams: any = {
          formationId: this.formationId,
          type: 'final'
        };

        if (this.sessionId) {
          queryParams.sessionId = this.sessionId;
        }

        this.router.navigate(['/condidat/validate-quiz'], { queryParams });
      }, 2000);

      return;
    }

    // Sinon, passer au module suivant
    if (this.nextModuleId) {
      if (this.sessionId) {
        // Inclure la session dans la navigation
        this.router.navigate(['/condidat/module', this.formationId, this.nextModuleId, this.sessionId]);
      } else {
        // Navigation sans session
        this.router.navigate(['/condidat/module', this.formationId, this.nextModuleId]);
      }
    }
  }

  /**
   * Retourne à la page de détails de la formation
   */
  goBackToFormation(): void {
    this.router.navigate(['/condidat/formations', this.formationId]);
  }

  /**
   * Obtient l'icône de fichier en fonction du type
   * @param fileType Type de fichier
   * @returns Chemin vers l'icône
   */
  getFileIcon(fileType: string): string {
    return this.attachmentService.getFileIcon(fileType);
  }

  /**
   * Obtient la couleur de l'icône de fichier en fonction du type
   * @param fileType Type de fichier
   * @returns Classe CSS pour la couleur
   */
  getFileIconColor(fileType: string): string {
    return this.attachmentService.getFileIconColor(fileType);
  }

  /**
   * Obtient le nom du fichier à partir de l'URL
   * @param url URL du fichier
   * @returns Nom du fichier
   */
  getFileName(url: string): string {
    return url.split('/').pop() || url;
  }
}
