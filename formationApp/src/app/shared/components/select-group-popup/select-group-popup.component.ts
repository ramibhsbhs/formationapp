import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Group } from '../../../core/models/group.model';
import { GroupService } from '../../../core/services/group.service';

@Component({
    selector: 'app-select-group-popup',
    templateUrl: './select-group-popup.component.html',
    styleUrls: ['./select-group-popup.component.scss']
})
export class SelectGroupPopupComponent implements OnInit {
    groups: Group[] = [];
    selectedGroup: Group | null = null;
    loading = false;

    constructor(
        public dialogRef: MatDialogRef<SelectGroupPopupComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { singleSelect: boolean },
        private groupService: GroupService
    ) { }

    ngOnInit(): void {
        this.loadGroups();
    }

    loadGroups(): void {
        this.loading = true;
        this.groupService.getGroups().subscribe({
            next: (groups) => {
                this.groups = groups;
                this.loading = false;
            },
            error: (error) => {
                console.error('Error loading groups:', error);
                this.loading = false;
            }
        });
    }

    onSelect(group: Group): void {
        if (this.data.singleSelect) {
            this.selectedGroup = group;
        }
    }

    onConfirm(): void {
        this.dialogRef.close(this.selectedGroup);
    }

    onCancel(): void {
        this.dialogRef.close();
    }
} 