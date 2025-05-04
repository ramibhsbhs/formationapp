import { Component, OnInit } from '@angular/core';
import { CondidatFormation } from '../../core/models';
import { CondidatService } from '../../core/condidat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.scss']
})
export class FormationDetailsComponent implements OnInit {
  loading = false;
  error: string | null = null;
  formation: CondidatFormation | null = null;

  constructor(
    private condidatService: CondidatService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadFormation(id);


  }
  loadFormation(id: number) {
    this.condidatService.getFormation(id).subscribe({
      next: (formation) => {
        this.formation = formation;
        this.loading = false;
        console.log(this.formation);
        this.initCountdown();
      },
      error: (err) => {
        this.error = err?.message || 'Failed to load formation.';
        this.loading = false;
      }
    });
  }
  getFileIcon(type: string): string {
    switch (type.toLowerCase()) {
      case 'pdf':
        return '/assets/icons/pdf.svg';
      case 'image':
        return 'fas fa-image';
      case 'video':
        return 'fas fa-video';
      case 'document':
        return 'fas fa-file-word';
      default:
        return 'fas fa-file';
    }

  }
  getFileIconColor(type: string): string {
    switch (type.toLowerCase()) {
      case 'pdf':
        return 'text-red-500';
      case 'image':
        return 'text-blue-500';
      case 'video':
        return 'text-green-500';
      case 'document':
        return 'text-yellow-500';
      default:
        return 'text-gray-500';
    }
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
   * Vérifie si l'utilisateur peut passer le quiz pour une session donnée
   * en fonction des dates et de l'état de la session
   * @param session La session à vérifier
   * @returns true si l'utilisateur peut passer le quiz, false sinon
   */
  canTakeQuiz(session: any): boolean {
    // Vérifier si l'utilisateur a le droit de repasser le quiz (selon les règles métier)
    if (!session.canRepass) {
      return false;
    }

    // Vérifier si la date actuelle est dans la période de la session
    const now = new Date();
    const start = new Date(session.startDate);
    const end = new Date(session.endDate);

    // L'utilisateur peut passer le quiz si la date actuelle est entre la date de début et la date de fin
    return now >= start && now <= end;
  }

  /**
   * Obtient le message d'état de la session en fonction des dates
   * @param session La session à vérifier
   * @returns Un message décrivant l'état de la session
   */
  getSessionStatusMessage(session: any): string {
    const now = new Date();
    const start = new Date(session.startDate);
    const end = new Date(session.endDate);

    if (now < start) {
      return "La session n'a pas encore commencé";
    } else if (now > end) {
      return "La session est terminée";
    } else {
      return "La session est en cours";
    }
  }

  /**
   * Détermine la classe CSS à appliquer en fonction de l'état de la session
   * @param session La session à vérifier
   * @returns Une classe CSS pour le style du message d'état
   */
  getSessionStatusClass(session: any): string {
    const now = new Date();
    const start = new Date(session.startDate);
    const end = new Date(session.endDate);

    if (now < start) {
      return "text-blue-600";
    } else if (now > end) {
      return "text-red-600";
    } else {
      return "text-green-600";
    }
  }

}
