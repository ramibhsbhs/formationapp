import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FormationService } from '../../core/services/formation.service';
import { GroupService } from '../../core/services/group.service';
import { Group } from '../../core/models/group.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FORMATION_CATEGORIES } from '../../core/constants/formation.constants';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-create-formation',
    templateUrl: './create-formation.component.html',
    styleUrls: ['./create-formation.component.scss']
})
export class CreateFormationComponent implements OnInit {
    formationForm: FormGroup;
    groups: Group[] = [];
    categories = FORMATION_CATEGORIES;
    selectedCategory: string = '';
    selectedGroupIds: number[] = [];
    isLoadingGroups = true;

    constructor(
        private fb: FormBuilder,
        private formationService: FormationService,
        private groupService: GroupService,
        private router: Router,
        private dialog: MatDialog
    ) {
        this.formationForm = this.fb.group({
            title: ['', [Validators.required, Validators.minLength(3)]],
            description: ['', [Validators.required, Validators.minLength(10)]],
            content: ['', [Validators.required, Validators.minLength(20)]],
            category: ['', Validators.required],
            groupIds: [[]],
            sessions: this.fb.array([]),
            modules: this.fb.array([])
        });
    }

    ngOnInit(): void {
        this.isLoadingGroups = true;
        this.groupService.getGroups().subscribe({
            next: (groups) => {
                this.groups = groups;
                this.isLoadingGroups = false;
            },
            error: (error) => {
                console.error('Error loading groups:', error);
                this.isLoadingGroups = false;
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
            formationId: [0]
        });
    }

    addModule(): void {
        const moduleGroup = this.createModuleFormGroup();
        this.modules.push(moduleGroup);
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
            endDate: ['', Validators.required],
            formationId: [0]
        });
    }

    addSession(): void {
        const sessionGroup = this.createSessionFormGroup();
        this.sessions.push(sessionGroup);
    }

    removeSession(index: number): void {
        this.sessions.removeAt(index);
    }

    onGroupSelectionChange(groupId: number, event: Event): void {
        const checkbox = event.target as HTMLInputElement;
        if (checkbox.checked) {
            if (!this.selectedGroupIds.includes(groupId)) {
                this.selectedGroupIds.push(groupId);
            }
        } else {
            this.selectedGroupIds = this.selectedGroupIds.filter(id => id !== groupId);
        }
        this.formationForm.patchValue({ groupIds: this.selectedGroupIds });
    }

    onCategorySelectionChange(category: string): void {
        this.selectedCategory = category;
        this.formationForm.patchValue({ category });
    }

    onSubmit(): void {
        if (this.formationForm.valid) {
            const formData = {
                ...this.formationForm.value,
                groupIds: this.selectedGroupIds
            };

            this.formationService.createFormation(formData).subscribe({
                next: (response) => {
                    this.router.navigate(['/admin/formations']);
                },
                error: (error) => {
                    console.error('Error creating formation:', error);
                }
            });
        } else {
            this.formationForm.markAllAsTouched();
        }
    }

    dropModule(event: CdkDragDrop<FormGroup[]>) {
        moveItemInArray(this.modules.controls, event.previousIndex, event.currentIndex);
        this.updateModulePositions();
    }
} 