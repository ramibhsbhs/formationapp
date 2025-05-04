import { Component, OnInit } from '@angular/core';
import { CondidatFormation } from '../../core/models';
import { CondidatService } from '../../core/condidat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { AttachmentService } from 'src/app/core/services/attachment.service';
import { ToasterService } from 'src/app/core/services/toaster.service';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.scss']
})
export class FormationDetailsComponent implements OnInit {
  loading = true;
  error: string | null = null;
  formation: CondidatFormation | null = null;

  constructor(
    private condidatService: CondidatService,
    private route: ActivatedRoute,
    private router: Router,
    private attachmentService: AttachmentService,
    private toaster: ToasterService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadFormation(id);
  }

  loadFormation(id: number) {
    this.loading = true;
    this.condidatService.getFormation(id).subscribe({
      next: (formation) => {
        this.formation = formation;

        // Initialiser les propriétés des modules
        if (formation.modules && formation.modules.length > 0) {
          // Trier les modules par position
          formation.modules.sort((a, b) => a.position - b.position);

          // Le premier module est toujours accessible
          formation.modules[0].isAccessible = true;
        }

        this.loading = false;
        console.log('Formation chargée:', this.formation);
        this.initCountdown();
      },
      error: (err) => {
        this.error = err?.message || 'Failed to load formation.';
        this.loading = false;
      }
    });
  }


  /**
   * Get file icon based on file type
   * @param fileType The type of the file
   * @returns Path to the icon image
   */
  getFileIcon(fileType: string): string {
    return this.attachmentService.getFileIcon(fileType);
  }

  /**
   * Get file icon color based on file type
   * @param fileType The type of the file
   * @returns Tailwind CSS color class
   */
  getFileIconColor(fileType: string): string {
    return this.attachmentService.getFileIconColor(fileType);
  }

  /**
   * Extract filename from URL
   * @param url The URL of the file
   * @returns The filename
   */
  getFileName(url: string): string {
    return this.attachmentService.getFileName(url);
  }



  // session timeout
  // Countdown properties
  countdownText = '';
  countdownState: 'upcoming' | 'ongoing' | 'finished' = 'upcoming';
  private timerSub?: Subscription;

  ngOnDestroy(): void {
    this.timerSub?.unsubscribe();
  }
  formatDuration(ms: number): string {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    const parts: string[] = [];
    if (days) parts.push(`${days}d`);
    if (hours) parts.push(`${hours}h`);
    if (minutes) parts.push(`${minutes}m`);
    parts.push(`${seconds}s`);
    return parts.join(' ');
  }
  initCountdown() {
    if (!this.formation?.sessions?.length) return;
    const session = this.formation.sessions[this.formation.sessions.length - 1];

    this.timerSub = interval(1000).subscribe(() => {
      const now = new Date();
      const start = new Date(session.startDate);
      const end = new Date(session.endDate);
      let diffMs: number;

      if (now < start) {
        this.countdownState = 'upcoming';
        diffMs = start.getTime() - now.getTime();
      } else if (now >= start && now <= end) {
        this.countdownState = 'ongoing';
        diffMs = end.getTime() - now.getTime();
      } else {
        this.countdownState = 'finished';
        this.countdownText = '';
        this.timerSub?.unsubscribe();
        return;
      }

      this.countdownText = this.formatDuration(diffMs);
    });
  }

  /**
   * Vérifie si l'utilisateur a déjà tenté de passer la formation
   * @returns true si l'utilisateur a déjà tenté de passer la formation, false sinon
   */
  hasAttemptedFormation(): boolean {
    if (!this.formation || !this.formation.sessions) return false;

    // Vérifier si l'utilisateur a déjà tenté de passer au moins une session
    return this.formation.sessions.some(session => session.hasAttempted);
  }

  /**
   * Vérifie si l'utilisateur a réussi la formation
   * @returns true si l'utilisateur a réussi la formation, false sinon
   */
  hasPassedFormation(): boolean {
    if (!this.formation || !this.formation.sessions) return false;

    // Vérifier si l'utilisateur a réussi au moins une session
    return this.formation.sessions.some(session => session.hasAttempted && session.score >= 70);
  }

  /**
   * Vérifie si l'utilisateur a des sessions disponibles pour passer un test
   * @returns true si l'utilisateur a des sessions disponibles, false sinon
   */
  hasAvailableSessions(): boolean {
    if (!this.formation || !this.formation.sessions) return false;

    // Si l'utilisateur a déjà réussi la formation, il n'a pas besoin de passer d'autres tests
    if (this.hasPassedFormation()) return false;

    // Vérifier s'il y a des sessions disponibles
    const now = new Date();
    return this.formation.sessions.some(session => {
      const start = new Date(session.startDate);
      const end = new Date(session.endDate);

      // La session est disponible si :
      // 1. La date actuelle est entre la date de début et la date de fin
      // 2. ET (l'utilisateur n'a pas encore passé le test OU il a échoué au test et peut le repasser)
      return now >= start && now <= end &&
        (session.canRepass || (!session.hasAttempted) || (session.hasAttempted && session.score < 70));
    });
  }

  /**
   * Vérifie si la session est actuellement active (dans la période de dates)
   * @param session La session à vérifier
   * @returns true si la session est active, false sinon
   */
  isSessionActive(session: any): boolean {
    const now = new Date();
    const start = new Date(session.startDate);
    const end = new Date(session.endDate);

    return now >= start && now <= end;
  }

  /**
   * Vérifie si toutes les sessions sont terminées
   * @returns true si toutes les sessions sont terminées, false sinon
   */
  areAllSessionsEnded(): boolean {
    if (!this.formation || !this.formation.sessions || this.formation.sessions.length === 0) return false;

    const now = new Date();
    return this.formation.sessions.every(session => {
      const end = new Date(session.endDate);
      return now > end;
    });
  }

  /**
   * Vérifie si toutes les sessions n'ont pas encore commencé
   * @returns true si toutes les sessions n'ont pas encore commencé, false sinon
   */
  areAllSessionsNotStarted(): boolean {
    if (!this.formation || !this.formation.sessions || this.formation.sessions.length === 0) return false;

    const now = new Date();
    return this.formation.sessions.every(session => {
      const start = new Date(session.startDate);
      return now < start;
    });
  }

  /**
   * Démarre la formation en redirigeant vers le premier module
   */
  startFormation(): void {
    if (!this.formation || !this.formation.modules.length) {
      this.toaster.showInfo('Cette formation ne contient aucun module.', 'Information');
      return;
    }

    // Vérifier si des sessions sont disponibles
    if (!this.hasAvailableSessions()) {
      // Vérifier si toutes les sessions sont terminées
      const allSessionsEnded = this.formation.sessions.every(session => {
        const end = new Date(session.endDate);
        const now = new Date();
        return now > end;
      });

      // Vérifier si toutes les sessions n'ont pas encore commencé
      const allSessionsNotStarted = this.formation.sessions.every(session => {
        const start = new Date(session.startDate);
        const now = new Date();
        return now < start;
      });

      if (allSessionsEnded) {
        this.toaster.showInfo('Toutes les sessions de cette formation sont terminées.', 'Information');
      } else if (allSessionsNotStarted) {
        this.toaster.showInfo('Les sessions de cette formation n\'ont pas encore commencé.', 'Information');
      } else {
        this.toaster.showInfo('Aucune session disponible pour cette formation.', 'Information');
      }
      return;
    }

    // Récupérer le premier module
    const firstModule = this.formation.modules.sort((a, b) => a.position - b.position)[0];

    // Trouver une session disponible
    const availableSession = this.getAvailableSession();

    if (availableSession) {
      // Rediriger vers la page du module avec la session
      this.router.navigate(['/condidat/module', this.formation.id, firstModule.id, availableSession.sessionId]);
    } else {
      // Ce cas ne devrait pas se produire car on a vérifié hasAvailableSessions() plus haut
      this.toaster.showInfo('Aucune session disponible pour cette formation.', 'Information');
    }
  }

  /**
   * Récupère une session disponible pour la formation
   * @returns La première session disponible ou null si aucune n'est disponible
   */
  getAvailableSession(): any {
    if (!this.formation || !this.formation.sessions) return null;

    // Si l'utilisateur a déjà réussi la formation, il n'a pas besoin de passer d'autres tests
    if (this.hasPassedFormation()) return null;

    const now = new Date();

    // Filtrer les sessions disponibles
    const availableSessions = this.formation.sessions.filter(session => {
      const start = new Date(session.startDate);
      const end = new Date(session.endDate);

      // La session est disponible si :
      // 1. La date actuelle est entre la date de début et la date de fin
      // 2. ET (l'utilisateur n'a pas encore passé le test OU il a échoué au test et peut le repasser)
      return now >= start && now <= end &&
        (session.canRepass || (!session.hasAttempted) || (session.hasAttempted && session.score < 70));
    });

    // Trier les sessions par date de début (la plus récente d'abord)
    availableSessions.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

    return availableSessions.length > 0 ? availableSessions[0] : null;
  }
}
