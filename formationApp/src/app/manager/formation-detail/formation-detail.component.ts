import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Formation } from 'src/app/core/models/formation.model';
import { Quiz } from 'src/app/core/models/quiz.model';
import { Session, SessionStatus } from 'src/app/core/models/session.model';
import { AttachmentService } from 'src/app/core/services/attachment.service';
import { FormationService } from 'src/app/core/services/formation.service';
import { QuizService } from 'src/app/core/services/quiz.service';

type ActiveTabText = "info" | "sessions" | "groups" | "modules" | "results";
@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.scss']
})
export class FormationDetailComponent implements OnInit, OnDestroy {
  formation: Formation | null = null;
  loading: boolean = false;
  error: string | null = null;
  activeTab: ActiveTabText = 'info';
  quizzes: Quiz[] = [];
  private subscriptions: Subscription[] = [];

  constructor(
    private formationService: FormationService,
    private quizService: QuizService,
    private attachmentService: AttachmentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Get query parameters
    const queryParamsSub = this.route.queryParams.subscribe(queryParams => {
      // Get active tab from URL or use default
      if (queryParams['tab']) {
        this.activeTab = queryParams['tab'] as ActiveTabText;
      }
    });
    this.subscriptions.push(queryParamsSub);

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadFormation(id);
    this.loadQuizzes();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.subscriptions.forEach(sub => sub.unsubscribe());
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

  // Méthodes déléguées au service d'attachement
  getFileIcon(type: string): string {
    return this.attachmentService.getFileIcon(type);
  }

  getFileIconColor(type: string): string {
    return this.attachmentService.getFileIconColor(type);
  }

  getFileName(url: string): string {
    return this.attachmentService.getFileName(url);
  }

  formatFileSize(bytes: number): string {
    return this.attachmentService.formatFileSize(bytes);
  }

  getStatus(session: Session): SessionStatus {
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

  /**
   * Set the active tab and update URL parameters
   * @param tabName Name of the tab to activate
   */
  setActiveTab(tabName: ActiveTabText): void {
    this.activeTab = tabName;
    this.updateUrlParams();
  }

  /**
   * Update URL parameters without reloading the page
   */
  updateUrlParams(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        tab: this.activeTab
      },
      queryParamsHandling: 'merge',
      replaceUrl: true // Replace the URL instead of adding a new history entry
    });
  }

  /**
   * Load all available quizzes
   */
  loadQuizzes(): void {
    this.quizService.getQuizzes().subscribe({
      next: (quizzes) => {
        this.quizzes = quizzes;
      },
      error: (error) => {
        console.error('Error loading quizzes:', error);
        this.error = 'Impossible de charger les quiz.';
      }
    });
  }

  /**
   * Get the title of a quiz by its ID
   * @param quizId ID of the quiz
   * @returns Title of the quiz or a default message
   */
  getQuizTitle(quizId: number | null): string {
    if (!quizId) return 'Aucun quiz sélectionné';
    const quiz = this.quizzes.find(q => q.id === quizId);
    return quiz ? quiz.title : 'Quiz inconnu';
  }

  // Cette méthode est maintenant déléguée au service d'attachement
}
