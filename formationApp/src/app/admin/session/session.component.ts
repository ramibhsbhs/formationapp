import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Session } from 'src/app/core/models/session.model';
import { SesssionsService } from 'src/app/core/services/sesssions.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  sessions: Session[] = [];
  currentPage: number = 0;
  pageSize: number = 5;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private sessionService: SesssionsService) { }

  ngOnInit(): void {
    this.loadSessions();
  }

  loadSessions(): void {
    this.isLoading = true;
    this.sessionService.getAll().subscribe({
      next: (sessions) => {
        this.sessions = sessions;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading sessions:', error);
        this.isLoading = false;
      }
    });
  }

  reloadSessions(): void {
    this.currentPage = 0; // Reset to first page
    this.loadSessions();
  }

  get paginatedSessions(): Session[] {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.sessions.slice(startIndex, endIndex);
  }

  get pageCount(): number {
    return Math.ceil(this.sessions.length / this.pageSize);
  }

  previousPage(): void {
    this.currentPage = Math.max(0, this.currentPage - 1);
  }

  nextPage(): void {
    this.currentPage = Math.min(this.pageCount - 1, this.currentPage + 1);
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('fr', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(date);
  }
}
