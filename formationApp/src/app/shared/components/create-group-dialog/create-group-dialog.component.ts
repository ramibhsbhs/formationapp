import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Group } from '../../../core/models/group.model';
import { GroupService } from 'src/app/core/services/group.service';


@Component({
    selector: 'app-create-group-dialog',
    templateUrl: './create-group-dialog.component.html',
    styleUrls: ['./create-group-dialog.component.scss']
})
export class CreateGroupDialogComponent implements OnInit {
    form!: FormGroup;
    private groupService = inject(GroupService);
    isLoading = false;
    constructor(
        private dialogRef: MatDialogRef<CreateGroupDialogComponent>,
        private fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: { group?: Partial<Group> }
    ) {

    }
    ngOnInit(): void {
        this.form = this.fb.group({
            name: ['', Validators.required],
        });
    }

    onSubmit(): void {
        console.log(this.form.value, this.form.valid);
        if (this.form.valid) {
            this.isLoading = true;
            this.groupService.createGroup(this.form.value).subscribe({
                next: (group) => {
                    this.dialogRef.close(group);
                },
                error: (error) => {
                    console.error(error);
                },
                complete: () => {
                    this.isLoading = false;
                }
            });
        }
    }

    onCancel(): void {
        this.dialogRef.close();
    }
} 