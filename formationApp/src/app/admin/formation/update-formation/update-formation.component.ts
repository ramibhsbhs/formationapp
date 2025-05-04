import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FORMATION_CATEGORIES } from 'src/app/core/constants/formation.constants';
import { UserRole } from 'src/app/core/constants/roles.constants';
import { Attachment, Formation, Module } from 'src/app/core/models/formation.model';
import { Group } from 'src/app/core/models/group.model';
import { Quiz } from 'src/app/core/models/quiz.model';
import { AttachmentService } from 'src/app/core/services/attachment.service';
import { FormationService } from 'src/app/core/services/formation.service';
import { GroupService } from 'src/app/core/services/group.service';
import { QuizService } from 'src/app/core/services/quiz.service';
import { SesssionsService, SessionStatus } from 'src/app/core/services/sesssions.service';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { SelectGroupPopupComponent } from 'src/app/shared/components/select-group-popup/select-group-popup.component';
import { SelectQuizComponent } from 'src/app/shared/components/select-quiz/select-quiz.component';
import { SessionPopupComponent } from 'src/app/shared/components/session-popup/session-popup.component';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.scss']
})
export class UpdateFormationComponent implements OnInit, OnDestroy {

  categories = FORMATION_CATEGORIES;
  availableRoles = [
    UserRole.Administrator,
    UserRole.HierarchicalLeader,
    UserRole.TeamLeader,
    UserRole.PostLeader,
    UserRole.QualityAgent,
    UserRole.Manager
  ];
  formationForm: FormGroup;
  categoryForm: FormGroup;
  groupForm: FormGroup;
  modulesForm: FormGroup

  formation: Formation | null = null;
  groups: Group[] = [];
  quizzes: Quiz[] = [];
  isLoading = true;
  formationId: number;
  activeTab: string = 'info';
  selectedFiles: { [key: number]: File } = {};
  uploadProgress: { [key: number]: number } = {};
  isUploading: { [key: number]: boolean } = {};
  scrollPosition: number = 0;
  isLoadingSessions: boolean = false;
  private scrollTimeout: any;
  private subscriptions: Subscription[] = [];


  constructor(
    private fb: FormBuilder,
    private formationService: FormationService,
    private groupService: GroupService,
    private attachmentService: AttachmentService,
    private sessionsService: SesssionsService,
    private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router,
    private toaster: ToasterService,
    private dialog: MatDialog
  ) {
    this.formationId = +this.route.snapshot.paramMap.get('id')!;
    this.formationForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      content: ['', Validators.required],
      finalQuizId: [null]
    });

    this.categoryForm = this.fb.group({
      category: ['', Validators.required]
    });

    this.groupForm = this.fb.group({
      groupIds: this.fb.array([])
    });

    this.modulesForm = this.fb.group({
      modules: this.fb.array([])
    })

  }

  get groupIdsArray(): FormArray {
    return this.groupForm.get('groupIds') as FormArray;
  }

  get groupsChanged(): boolean {
    const currentIds = this.groupIdsArray.value;
    const originalIds = this.formation?.groups.map(g => g.id) || [];
    return currentIds.length !== originalIds.length ||
      currentIds.some((id: number) => !originalIds.includes(id));
  }

  ngOnInit(): void {
    // Get query parameters
    const queryParamsSub = this.route.queryParams.subscribe(queryParams => {
      // Get active tab from URL or use default
      if (queryParams['tab']) {
        this.activeTab = queryParams['tab'];
      }

      // Get scroll position from URL or use default
      if (queryParams['scroll']) {
        this.scrollPosition = +queryParams['scroll'];
        // Apply scroll position after a short delay to ensure the DOM is ready
        setTimeout(() => {
          window.scrollTo(0, this.scrollPosition);
        }, 100);
      }
    });
    this.subscriptions.push(queryParamsSub);

    this.loadData();
    this.loadGroups();
    this.loadQuizzes();

    // Listen for scroll events to update scroll position
    window.addEventListener('scroll', this.onScroll.bind(this));
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
        this.toaster.showError('Erreur', 'Impossible de charger les quiz.');
      }
    });
  }

  /**
   * Handle scroll events
   */
  onScroll(): void {
    // Debounce scroll events to avoid too many updates
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.scrollPosition = window.scrollY;
      this.updateUrlParams();
    }, 100);
  }

  /**
   * Update URL parameters without reloading the page
   */
  updateUrlParams(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        tab: this.activeTab,
        scroll: Math.round(this.scrollPosition)
      },
      queryParamsHandling: 'merge',
      replaceUrl: true // Replace the URL instead of adding a new history entry
    });
  }

  /**
   * Change active tab and update URL
   * @param tabName Name of the tab to activate
   */
  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
    this.updateUrlParams();
  }

  /**
   * Clean up event listeners and subscriptions
   */
  ngOnDestroy(): void {
    // Remove scroll event listener
    window.removeEventListener('scroll', this.onScroll.bind(this));

    // Unsubscribe from all subscriptions
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Open dialog to create a new session
   */
  openSessionDialog(): void {
    const dialogRef = this.dialog.open(SessionPopupComponent, {
      width: '500px',
      data: { formationId: this.formationId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // If we got a result, refresh the formation data to show the new session
        this.loadData();
        this.toaster.showSuccess('Succès', 'Session créée avec succès');
      }
    });
  }

  /**
   * Open dialog to edit an existing session
   * @param session The session to edit
   */
  editSession(session: any): void {
    const dialogRef = this.dialog.open(SessionPopupComponent, {
      width: '500px',
      data: {
        formationId: this.formationId,
        session: session
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // If we got a result, refresh the formation data to show the updated session
        this.loadData();
        this.toaster.showSuccess('Succès', 'Session mise à jour avec succès');
      }
    });
  }

  /**
   * Delete a session
   * @param session The session to delete
   */
  deleteSession(session: any): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer la session "${session.title}" ? Cette action est irréversible.`)) {
      this.isLoadingSessions = true;
      this.sessionsService.deleteSession(session.id).subscribe({
        next: () => {
          this.toaster.showSuccess('Succès', 'Session supprimée avec succès');
          this.loadData();
        },
        error: (error: any) => {
          console.error('Error deleting session:', error);
          this.toaster.handleHttpError(error);
          this.isLoadingSessions = false;
        }
      });
    }
  }

  /**
   * Get the status of a session
   * @param session The session to check
   * @returns The status of the session (En cours, Terminée, Pas encore)
   */
  getSessionStatus(session: any): string {
    const now = new Date();
    const startDate = new Date(session.startDate);
    const endDate = new Date(session.endDate);

    if (now > endDate) {
      return 'Terminée';
    } else if (now < startDate) {
      return 'Pas encore';
    } else {
      return 'En cours';
    }
  }

  loadData(): void {
    this.isLoading = true;
    this.isLoadingSessions = true;
    this.formationService.getFormation(this.formationId).subscribe({
      next: (formation) => {
        this.formation = formation;

        this.populateForm(formation);

        this.categoryForm.patchValue({
          category: formation.category
        });

        this.groupIdsArray.clear();
        formation.groups.forEach(group => {
          this.groupIdsArray.push(this.fb.control(group.id));
        });

        // Clear modules array before adding new modules
        this.modules.clear();
        formation.modules.forEach(module => {
          this.pushModule(module);
        });

        this.isLoading = false;
        this.isLoadingSessions = false;
      },
      error: (error) => {
        console.error('Error loading formation:', error);
        this.toaster.showError('Erreur', 'Impossible de charger la formation.');
        this.isLoading = false;
        this.isLoadingSessions = false;
      }
    });
  }

  loadGroups(): void {
    this.groupService.getGroups().subscribe({
      next: (groups) => {
        this.groups = groups;
      },
      error: (error) => {
        console.error('Error loading groups:', error);
        this.toaster.showError('Erreur', 'Impossible de charger les groupes.');
      }
    });
  }

  populateForm(formation: Formation): void {
    this.formationForm.patchValue({
      title: formation.title,
      description: formation.description,
      content: formation.content,
      finalQuizId: formation.finalQuizId
    });
    this.formationForm.markAsPristine();
  }

  toggleGroup(groupId: number): void {
    const index = this.groupIdsArray.controls.findIndex(ctrl => ctrl.value === groupId);
    if (index !== -1) {
      this.groupIdsArray.removeAt(index);
    } else {
      this.groupIdsArray.push(this.fb.control(groupId));
    }
    this.groupIdsArray.markAsDirty();
  }

  resetGroupsForm(): void {
    this.groupIdsArray.clear();
    this.formation?.groups.forEach(group => {
      this.groupIdsArray.push(this.fb.control(group.id));
    });
    this.groupIdsArray.markAsPristine();
  }

  resetCategory(): void {
    this.categoryForm.patchValue({
      category: this.formation?.category
    });
  }

  cancel(): void {
    this.router.navigate(['/admin/formations']);
  }

  openGroupSelectionDialog(): void {
    const dialogRef = this.dialog.open(SelectGroupPopupComponent, {
      width: '500px',
      data: {
        groups: this.groups,
        multiSelect: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        // Apply selected groups from dialog (optional)
      }
    });
  }

  updateContent(): void {
    // Get the raw form value including disabled fields
    const formData = {
      ...this.formationForm.getRawValue()
    };

    this.formationService.updateFormationContent(this.formationId, formData).subscribe({
      next: () => {
        this.toaster.showSuccess('Succès', 'Contenu de la formation mis à jour avec succès');
        this.loadData();  // Refresh the data
      },
      error: (error) => {
        this.toaster.handleHttpError(error);
      }
    });
  }
  updateCategory(): void {
    this.formationService.updateFormationCategory(this.formationId, this.categoryForm.value).subscribe({
      next: () => {
        this.toaster.showSuccess('Success', 'Formation category updated successfully');
        this.loadData();  // Refresh the data
      },
      error: (error) => {
        this.toaster.handleHttpError(error);
      }
    }

    );
  }
  updateGroups(): void {
    this.formationService.updateFormationGroups(this.formationId, this.groupForm.value).subscribe({
      next: () => {
        this.toaster.showSuccess('Success', 'Formation groups updated successfully');
        this.loadData();  // Refresh the data
      },
      error: (error) => {
        this.toaster.handleHttpError(error);
      }
    });
  }

  get modules(): FormArray {
    return this.modulesForm.get('modules') as FormArray;
  }

  createModuleFormGroup(): FormGroup {
    return this.fb.group({
      id: [null],
      formationId: [this.formationId],
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      position: [this.modules.length + 1, Validators.required],
      quizId: [null]
    });
  }

  addModule(): void {
    this.modules.push(this.createModuleFormGroup());
    this.updateModulePositions();
  }

  removeModule(index: number): void {
    this.modules.removeAt(index);
    this.updateModulePositions();
  }

  updateModulePositions(): void {
    this.modules.controls.forEach((control, index) => {
      control.patchValue({ position: index + 1 });
    });
  }
  moveModule(fromIndex: number, toIndex: number): void {
    const module = this.modules.at(fromIndex);
    this.modules.removeAt(fromIndex);
    this.modules.insert(toIndex, module);
    this.updateModulePositions();
  }

  pushModule(module: Module) {
    this.modules.push(this.fb.group({
      id: [module.id],
      formationId: [module.formationId],
      title: [module.title, [Validators.required, Validators.minLength(3)]],
      description: [module.description, [Validators.required, Validators.minLength(10)]],
      position: [module.position, Validators.required],
      quizId: [module.quizId]
    }));
  }

  updateModules(): void {
    if (this.modulesForm.valid) {
      this.formationService.updateFormationModules(this.formationId, this.modulesForm.value).subscribe({
        next: () => {
          this.toaster.showSuccess('Succès', 'Modules mis à jour avec succès');
          this.loadData();  // Refresh the data
        },
        error: (error: any) => {
          this.toaster.handleHttpError(error);
        }
      });
    } else {
      this.modulesForm.markAllAsTouched();
      this.toaster.showError('Erreur', 'Veuillez remplir tous les champs requis.');
    }
  }

  /**
   * Get attachments for a specific module
   * @param moduleIndex Index of the module in the form array
   * @returns Array of attachments for the module
   */
  getModuleAttachments(moduleIndex: number): Attachment[] {
    if (!this.formation || !this.formation.modules) return [];

    const moduleId = this.modules.at(moduleIndex).get('id')?.value;
    if (!moduleId) return [];

    const module = this.formation.modules.find(m => m.id === moduleId);
    return module?.attachments || [];
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
   * Extract filename from URL
   * @param url The URL of the file
   * @returns The filename
   */
  getFileName(url: string): string {
    return this.attachmentService.getFileName(url);
  }

  /**
   * Handle file selection
   * @param event The file input change event
   * @param moduleIndex Index of the module in the form array
   */
  onFileSelected(event: Event, moduleIndex: number): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFiles[moduleIndex] = input.files[0];
    }
  }

  /**
   * Format file size in bytes to human-readable format
   * @param bytes File size in bytes
   * @returns Formatted file size (e.g., "2.5 MB")
   */
  formatFileSize(bytes: number): string {
    return this.attachmentService.formatFileSize(bytes);
  }

  /**
   * Upload selected file for a module
   * @param moduleIndex Index of the module in the form array
   */
  uploadFile(moduleIndex: number): void {
    const file = this.selectedFiles[moduleIndex];
    if (!file) return;

    const moduleId = this.modules.at(moduleIndex).get('id')?.value;
    if (!moduleId) {
      this.toaster.showError('Erreur', 'Veuillez d\'abord enregistrer le module avant d\'ajouter des pièces jointes.');
      return;
    }

    // Set uploading state
    this.isUploading[moduleIndex] = true;

    // Initialize progress
    this.uploadProgress[moduleIndex] = 0;

    // Upload file
    this.attachmentService.uploadAttachment(moduleId, file).subscribe({
      next: () => {
        // Update progress to 100%
        this.uploadProgress[moduleIndex] = 100;

        // Show success message
        this.toaster.showSuccess('Succès', 'Fichier téléchargé avec succès');

        // Reload data to refresh attachments
        this.loadData();

        // Reset states after a delay
        setTimeout(() => {
          delete this.selectedFiles[moduleIndex];
          delete this.uploadProgress[moduleIndex];
          delete this.isUploading[moduleIndex];
        }, 2000);
      },
      error: (error: any) => {
        // Reset states
        delete this.uploadProgress[moduleIndex];
        delete this.isUploading[moduleIndex];

        // Show error message
        this.toaster.handleHttpError(error);
      }
    });
  }

  /**
   * Delete an attachment
   * @param moduleIndex Index of the module in the form array (not used but kept for consistency)
   * @param attachmentId ID of the attachment to delete
   */
  deleteAttachment(_moduleIndex: number, attachmentId: number | undefined): void {
    if (!attachmentId) return;

    if (confirm('Êtes-vous sûr de vouloir supprimer cette pièce jointe ? Cette action est irréversible.')) {
      this.attachmentService.deleteAttachment(attachmentId).subscribe({
        next: () => {
          this.toaster.showSuccess('Succès', 'Pièce jointe supprimée avec succès');
          this.loadData();
        },
        error: (error: any) => {
          this.toaster.handleHttpError(error);
        }
      });
    }
  }

  /**
   * Open dialog to select a quiz for a module
   * @param moduleIndex Index of the module in the form array
   */
  openQuizSelectionDialog(moduleIndex: number): void {
    // Get all quiz IDs that are already assigned to other modules
    const disabledQuizIds: number[] = [];

    // Disable quizzes assigned to other modules
    this.modules.controls.forEach((control, index) => {
      const quizId = control.get('quizId')?.value;
      if (quizId && index !== moduleIndex) {
        disabledQuizIds.push(quizId);
      }
    });

    // Get the currently selected quiz ID for this module
    const selectedQuizId = this.modules.at(moduleIndex).get('quizId')?.value;

    // Open the dialog
    const dialogRef = this.dialog.open(SelectQuizComponent, {
      width: '500px',
      data: {
        disabledQuizIds,
        context: 'module',
        selectedQuizId
      }
    });

    // Handle the result
    dialogRef.afterClosed().subscribe(quiz => {
      if (quiz) {
        // Update the module's quizId
        this.modules.at(moduleIndex).patchValue({ quizId: quiz.id });
        this.modules.markAsDirty();
      }
    });
  }

  /**
   * Remove the quiz from a module
   * @param moduleIndex Index of the module in the form array
   */
  removeQuiz(moduleIndex: number): void {
    this.modules.at(moduleIndex).patchValue({ quizId: null });
    this.modules.markAsDirty();
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

  /**
   * Open dialog to select a final quiz for the formation
   */
  openFinalQuizSelectionDialog(): void {
    // Get all quiz IDs that are already assigned to modules
    const disabledQuizIds: number[] = [];

    // Disable quizzes assigned to modules
    this.modules.controls.forEach(control => {
      const quizId = control.get('quizId')?.value;
      if (quizId) {
        disabledQuizIds.push(quizId);
      }
    });

    // Get the currently selected final quiz ID
    const selectedQuizId = this.formationForm.get('finalQuizId')?.value;

    // Open the dialog
    const dialogRef = this.dialog.open(SelectQuizComponent, {
      width: '500px',
      data: {
        disabledQuizIds,
        context: 'formation',
        selectedQuizId
      }
    });

    // Handle the result
    dialogRef.afterClosed().subscribe(quiz => {
      if (quiz) {
        // Update the formation's finalQuizId
        this.formationForm.patchValue({ finalQuizId: quiz.id });
        this.formationForm.markAsDirty();
      }
    });
  }

  /**
   * Remove the final quiz from the formation
   */
  removeFinalQuiz(): void {
    this.formationForm.patchValue({ finalQuizId: null });
    this.formationForm.markAsDirty();
  }
}
