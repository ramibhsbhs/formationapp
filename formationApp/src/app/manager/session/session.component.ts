import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Session } from 'src/app/core/models/session.model';
import { SesssionsService } from 'src/app/core/services/sesssions.service';
import { SessionPopupComponent } from 'src/app/shared/components/session-popup/session-popup.component';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  private _sessions: Session[] = [];
  isLoading: boolean = false;

  constructor(private fb: FormBuilder,
    private sessionService: SesssionsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadSessions();
  }
  get sessions(): Session[] {
    return this._sessions
      .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
  }
  loadSessions(): void {
    this.isLoading = true;
    this.sessionService.getAll().subscribe({
      next: (sessions) => {
        this._sessions = sessions;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading sessions:', error);
        this.isLoading = false;
      }
    });
  }

  reloadSessions(): void {
    this.loadSessions();
  }


  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('fr', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(date);
  }
  openCreateSessionDialog(): void {
    const dialogRef = this.dialog.open(SessionPopupComponent, {
      width: '500px',
      data: {}
    });
    dialogRef.afterClosed().subscribe((result: Session) => {
      if (result) {
        this.sessions.push(result);
      }
    });
  }
}
