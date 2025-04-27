import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FormationService } from '../../../core/services/formation.service';
import { GroupService } from '../../../core/services/group.service';
import { QuizService } from '../../../core/services/quiz.service';
import { Group } from '../../../core/models/group.model';
import { Quiz } from '../../../core/models/quiz.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FORMATION_CATEGORIES } from '../../../core/constants/formation.constants';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { UserRole } from '../../../core/constants/roles.constants';
import { SelectQuizComponent } from '../../../shared/components/select-quiz/select-quiz.component';
import { ToasterService } from 'src/app/core/services/toaster.service';

@Component({
    selector: 'app-create-formation',
    templateUrl: './create-formation.component.html',
    styleUrls: ['./create-formation.component.scss']
})
export class CreateFormationComponent implements OnInit {
    formationForm: FormGroup;
    groups: Group[] = [];
    quizzes: Quiz[] = [];
    categories = FORMATION_CATEGORIES;
    availableRoles = [
        UserRole.Administrator,
        UserRole.HierarchicalLeader,
        UserRole.TeamLeader,
        UserRole.PostLeader,
        UserRole.QualityAgent,
        UserRole.Manager
    ];

    constructor(
        private fb: FormBuilder,
        private formationService: FormationService,
        private groupService: GroupService,
        private quizService: QuizService,
        private router: Router,
        private dialog: MatDialog,
        private toaster: ToasterService
    ) {
        this.formationForm = this.fb.group({
            title: ['', [Validators.required, Validators.minLength(3)]],
            description: ['', [Validators.required, Validators.minLength(10)]],
            content: ['', [Validators.required, Validators.minLength(20)]],
            category: ['', Validators.required],
            groupIds: [[]],
            roles: [[]],
            finalQuizId: [null],
            sessions: this.fb.array([]),
            modules: this.fb.array([])
        });
    }

    ngOnInit(): void {
        this.groupService.getGroups().subscribe({
            next: (groups) => {
                this.groups = groups;
            },
            error: (error) => {
                console.error('Error loading groups:', error);
            }
        });

        this.quizService.getQuizzes().subscribe({
            next: (quizzes) => {
                this.quizzes = quizzes;
            },
            error: (error) => {
                console.error('Error loading quizzes:', error);
            }
        });
    }

    get modules(): FormArray {
        return this.formationForm.get('modules') as FormArray;
    }

    get sessions(): FormArray {
        return this.formationForm.get('sessions') as FormArray;
    }

    createModuleFormGroup(): FormGroup {
        return this.fb.group({
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

    createSessionFormGroup(): FormGroup {
        return this.fb.group({
            title: ['', [Validators.required, Validators.minLength(3)]],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required]
        });
    }

    addSession(): void {
        this.sessions.push(this.createSessionFormGroup());
    }

    removeSession(index: number): void {
        this.sessions.removeAt(index);
    }

    toggleGroup(groupId: number): void {
        const groupIds = this.formationForm.get('groupIds')?.value as number[];
        if (groupIds.includes(groupId)) {
            this.formationForm.patchValue({ groupIds: groupIds.filter(id => id !== groupId) });
        } else {
            this.formationForm.patchValue({ groupIds: [...groupIds, groupId] });
        }
    }

    toggleRole(role: string): void {
        const roleNames = this.formationForm.get('roles')?.value as string[];
        if (roleNames.includes(role)) {
            this.formationForm.patchValue({ roles: roleNames.filter(r => r !== role) });
        } else {
            this.formationForm.patchValue({ roles: [...roleNames, role] });
        }
    }

    openQuizSelectionDialog(context: 'formation' | 'module', moduleIndex?: number): void {
        const disabledQuizIds: number[] = [];

        // Disable quizzes assigned to other modules
        this.modules.controls.forEach((control, index) => {
            const quizId = control.get('quizId')?.value;
            if (quizId && (context !== 'module' || index !== moduleIndex)) {
                disabledQuizIds.push(quizId);
            }
        });

        // Disable final quiz if selecting for a module
        if (context === 'module' && this.formationForm.get('finalQuizId')?.value) {
            disabledQuizIds.push(this.formationForm.get('finalQuizId')?.value);
        }

        const dialogRef = this.dialog.open(SelectQuizComponent, {
            width: '500px',
            data: {
                disabledQuizIds,
                context,
                selectedQuizId: context === 'formation' ? this.formationForm.get('finalQuizId')?.value : (moduleIndex !== undefined ? this.modules.at(moduleIndex).get('quizId')?.value : null)
            }
        });

        dialogRef.afterClosed().subscribe(quiz => {
            if (quiz) {
                if (context === 'formation') {
                    this.formationForm.patchValue({ finalQuizId: quiz.id });
                } else if (moduleIndex !== undefined) {
                    this.modules.at(moduleIndex).patchValue({ quizId: quiz.id });
                }
            }
        });
    }

    getQuizTitle(quizId: number | null): string {
        return quizId ? this.quizzes.find(q => q.id === quizId)?.title || 'Select a quiz' : 'Select a quiz';
    }

    onSubmit(): void {
        if (this.formationForm.valid) {
            console.log(this.formationForm.value);

            this.formationService.createFormation(this.formationForm.value).subscribe({
                next: () => {
                    this.router.navigate(['/admin/formations']);
                },
                error: (error) => {
                    console.error('Error creating formation:', error);
                    this.toaster.handleHttpError(error.error);
                }
            });
        } else {
            this.formationForm.markAllAsTouched();
            this.toaster.showError('Invalid Form', 'Please fill in all required fields correctly.');

        }
    }

    dropModule(event: CdkDragDrop<FormGroup[]>) {
        moveItemInArray(this.modules.controls, event.previousIndex, event.currentIndex);
        this.updateModulePositions();
    }
}