import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Group } from '../../../core/models/group.model';
import { GroupService } from '../../../core/services/group.service';
export interface GroupSelectionDialogData {
    groups?: Group[];
    multiSelect?: boolean;
}


@Component({
    selector: 'app-select-group-popup',
    templateUrl: './select-group-popup.component.html',
    styleUrls: ['./select-group-popup.component.scss']
})
export class SelectGroupPopupComponent implements OnInit {
    groups: Group[] = [];
    multiSelect = false;

    selectedGroupIds: number[] = [];
    selectedGroupId: number | null = null;

    constructor(
        private groupService: GroupService,
        private dialogRef: MatDialogRef<SelectGroupPopupComponent>,
        @Inject(MAT_DIALOG_DATA) public data: GroupSelectionDialogData
    ) { }

    ngOnInit(): void {
        this.multiSelect = this.data.multiSelect ?? false;

        if (this.data.groups) {
            this.groups = this.data.groups;
        } else {
            this.groupService.getGroups().subscribe((fetched) => {
                this.groups = fetched;

                console.log(this.groups, fetched);

            });
        }
    }

    isSelected(id: number): boolean {
        return this.multiSelect ? this.selectedGroupIds.includes(id) : this.selectedGroupId === id;
    }

    toggleSelection(id: number): void {
        if (this.multiSelect) {
            this.selectedGroupIds = this.isSelected(id)
                ? this.selectedGroupIds.filter(gid => gid !== id)
                : [...this.selectedGroupIds, id];
        } else {
            this.selectedGroupId = id;
        }
    }

    confirm(): void {
        this.dialogRef.close(this.multiSelect ? this.selectedGroupIds : this.selectedGroupId);
    }

    cancel(): void {
        this.dialogRef.close(null);
    }
} 