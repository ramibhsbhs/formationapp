import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/core/models/formation.model';
import { Session, SessionStatus } from 'src/app/core/models/session.model';
import { FormationService } from 'src/app/core/services/formation.service';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.scss']
})
export class FormationDetailComponent implements OnInit {
  formation: Formation | null = null;
  loading: boolean = false;
  error: string | null = null;

  constructor(
    private formationService: FormationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadFormation(id);
  }
  loadFormation(id: number): void {
    this.loading = true;
    this.formationService.getFormation(id).subscribe({
      next: (formation: Formation) => {
        this.formation = formation;
        this.loading = false;
        console.log(this.formation.sessions.map((session: Session) => session.status));
        
      },
      error: (error) => {
        this.error = error;
        this.loading = false;

      }
    })
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

  getStatus(session:Session): SessionStatus {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const start = new Date(session.startDate);
    const end = new Date(session.endDate);
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    if (today < start) {
      return 'Pas encore'; // Not yet started
    } else if (today > end) {
      return 'Terminée';   // Finished
    } else {
      return 'En cours';   // Ongoing
    }
  }




}
