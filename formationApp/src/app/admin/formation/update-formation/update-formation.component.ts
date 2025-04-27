import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FORMATION_CATEGORIES } from 'src/app/core/constants/formation.constants';
import { UserRole } from 'src/app/core/constants/roles.constants';
import { Formation, Module } from 'src/app/core/models/formation.model';
import { Group } from 'src/app/core/models/group.model';
import { FormationService } from 'src/app/core/services/formation.service';
import { GroupService } from 'src/app/core/services/group.service';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { SelectGroupPopupComponent } from 'src/app/shared/components/select-group-popup/select-group-popup.component';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.scss']
})
export class UpdateFormationComponent implements OnInit {

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
  isLoading = true;
  formationId: number;


  constructor(
    private fb: FormBuilder,
    private formationService: FormationService,
    private groupService: GroupService,
    private route: ActivatedRoute,
    private router: Router,
    private toaster: ToasterService,
    private dialog: MatDialog
  ) {
    this.formationId = +this.route.snapshot.paramMap.get('id')!;
    this.formationForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      content: ['', Validators.required]
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
    this.loadData();
    this.loadGroups();
  }

  loadData(): void {
    this.isLoading = true;
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
        formation.modules.forEach(module => {
          this.pushModule(module);
        });

        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading formation:', error);
        this.toaster.showError('Erreur', 'Impossible de charger la formation.');
        this.isLoading = false;
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
      content: formation.content
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

  onSubmit(): void {
    if (this.formationForm.valid) {
      this.formationService.updateFormation(this.formationId, this.formationForm.value).subscribe({
        next: () => {
          this.toaster.showSuccess('Formation mise à jour', 'La formation a été mise à jour avec succès.');
          this.router.navigate(['/admin/formations']);
        },
        error: (error) => {
          console.error('Error updating formation:', error);
          this.toaster.showError('Erreur', error.error?.Message || 'Impossible de mettre à jour la formation.');
        }
      });
    } else {
      this.formationForm.markAllAsTouched();
      this.toaster.showError('Erreur', 'Veuillez remplir tous les champs requis.');
    }
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
    this.formationService.updateFormationContent(this.formationId, this.formationForm.value).subscribe({
      next: (formation) => {
        this.toaster.showSuccess('Success', 'Formation content updated successfully');
        this.loadData();  // Refresh the data
      },
      error: (error) => {
        this.toaster.handleHttpError(error);
      }
    }

    );
  }
  updateCategory(): void {
    this.formationService.updateFormationCategory(this.formationId, this.categoryForm.value).subscribe({
      next: (formation) => {
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
      next: (formation) => {
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


}
