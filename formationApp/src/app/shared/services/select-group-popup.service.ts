import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectGroupPopupComponent } from '../components/select-group-popup/select-group-popup.component';
import { Group } from '../../core/models/group.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SelectGroupPopupService {
    constructor(private dialog: MatDialog) { }

    open(singleSelect: boolean = true): Observable<Group | undefined> {
        const dialogRef = this.dialog.open(SelectGroupPopupComponent, {
            width: '400px',
            data: { singleSelect }
        });

        return dialogRef.afterClosed();
    }
} 