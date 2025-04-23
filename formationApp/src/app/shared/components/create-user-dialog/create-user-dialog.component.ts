import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Group } from '../../../core/models/group.model';
import { User } from '../../../core/models/user.model';
import { UserRole, USER_ROLES } from '../../../core/constants/roles.constants';
import { GroupService } from 'src/app/core/services/group.service';

@Component({
    selector: 'app-create-user-dialog',
    templateUrl: './create-user-dialog.component.html',
    styleUrls: ['./create-user-dialog.component.scss']
})
export class CreateUserDialogComponent implements OnInit {
    form!: FormGroup;
    isLoading = false;
    roles = USER_ROLES;
    UserRole = UserRole;
    constructor(
        private dialogRef: MatDialogRef<CreateUserDialogComponent>,
        private fb: FormBuilder,
        private groupService: GroupService,
        @Inject(MAT_DIALOG_DATA) public data: { selectedGroup: Group }
    ) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            userName: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            role: ['', Validators.required],
            groupId: [this.data.selectedGroup?.id, Validators.required]
        });
    }

    onSubmit(): void {
        if (this.form.valid) {
            this.isLoading = true;
            const formValue = this.form.value;
            const newUser = {
                username: formValue.userName,
                email: formValue.email,
                role: formValue.role,
                groupId: this.data.selectedGroup.id
            };
            this.groupService.createUser(newUser).subscribe({
                next: (user) => {
                    this.isLoading = false;
                    this.dialogRef.close(user);
                },
                error: (error) => {
                    this.isLoading = false;
                    console.error('Error creating user:', error);
                }
            }

            );
        }
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    getErrorMessage(field: string): string {
        const control = this.form.get(field);
        if (!control?.errors) return '';

        const errors = control.errors;
        if (errors['required']) return 'This field is required';
        if (errors['email']) return 'Invalid email address';
        if (errors['minlength']) return `Minimum length is ${errors['minlength'].requiredLength} characters`;

        return 'Invalid value';
    }
} 