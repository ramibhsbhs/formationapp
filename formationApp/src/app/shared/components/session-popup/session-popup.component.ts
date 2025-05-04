import { Component, Inject, OnInit, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
        @Inject(MAT_DIALOG_DATA) public data: { formationId?: number, session?: any },
        private fb: FormBuilder
    ) {
        // Initialize form with default values or existing session data if provided
        this.sessionForm = this.fb.group({
            title: [data.session?.title || '', Validators.required],
            startDate: [data.session?.startDate ? new Date(data.session.startDate).toISOString().split('T')[0] : '', Validators.required],
            endDate: [data.session?.endDate ? new Date(data.session.endDate).toISOString().split('T')[0] : '', Validators.required],
            formationId: [data.formationId?.toString() || data.session?.formationId?.toString() || '', Validators.required]
        });

        // If formationId is provided, disable the field to prevent changes
        if (data.formationId) {
            this.sessionForm.get('formationId')?.disable();
        }
    }

    ngOnInit(): void {
        // Only load formations if formationId is not provided
        if (!this.data.formationId) {
            this.formationsService.getFormations()
                .subscribe({
                    next: (formations) => {
                        this.formations = formations;
                    },
                    error: (error) => {
                        console.error('Error loading formations:', error);
                        this.dialogRef.close();
                    }
                });
        } else {
            // If formationId is provided, just load that specific formation for display
            this.formationsService.getFormation(this.data.formationId)
                .subscribe({
                    next: (formation) => {
                        this.formations = [formation];
                    },
                    error: (error) => {
                        console.error('Error loading formation:', error);
                        this.dialogRef.close();
                    }
                });
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.sessionForm.valid) {
            this.isLoading = true;

            // Prepare form data - include the disabled formationId
            const formData = {
                ...this.sessionForm.getRawValue(), // Gets all values including disabled fields
            };

            // If we have a session ID, it's an update operation
            if (this.data.session?.id) {
                formData.id = this.data.session.id;
                this.sessionsService.updateSession(formData).subscribe({
                    next: (session: any) => {
                        this.dialogRef.close(session);
                        this.isLoading = false;
                    },
                    error: (error: any) => {
                        console.error('Error updating session:', error);
                        this.isLoading = false;
                        this.dialogRef.close();
                    }
                });
            } else {
                // Otherwise it's a create operation
                this.sessionsService.createSession(formData).subscribe({
                    next: (session: any) => {
                        this.dialogRef.close(session);
                        this.isLoading = false;
                    },
                    error: (error: any) => {
                        console.error('Error creating session:', error);
                        this.isLoading = false;
                        this.dialogRef.close();
                    }
                });
            }
        }
    }
}