import { Component, Inject, OnInit, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormationService } from '../../../core/services/formation.service';
import { Formation } from 'src/app/core/models/formation.model';
import { SesssionsService } from 'src/app/core/services/sesssions.service';


@Component({
    selector: 'app-session-popup',
    templateUrl: './session-popup.component.html',
    styleUrls: ['./session-popup.component.scss']
})
export class SessionPopupComponent implements OnInit {
    sessionForm: FormGroup;
    formations: Formation[] = [];
    isLoading = false;
    formationsService = inject(FormationService)
    sessionsService = inject(SesssionsService)
    constructor(
        public dialogRef: MatDialogRef<SessionPopupComponent>,
        @Inject(MAT_DIALOG_DATA) public data: {formationId?:number},
        private fb: FormBuilder
    ) {
        this.sessionForm = this.fb.group({
            title: ['', Validators.required],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required],
            formationId: [data.formationId?.toString() ?? '', Validators.required]
        });
    }
    ngOnInit(): void {
        this.formationsService.getFormations()
            .subscribe({
                next: (formations) => {
                    this.formations = formations;
                }, error: (error) => {
                    console.log(error);
                    this.dialogRef.close();
                }
            });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.sessionForm.valid) {
            this.isLoading = true
            this.sessionsService.createSession(this.sessionForm.value).subscribe({
                next: (session) => {
                    this.dialogRef.close(session);
                    this.isLoading = false
                }, error: (error) => {
                    console.log(error);
                    this.isLoading = false
                    this.dialogRef.close();
                }
            });
        }
    }
} 