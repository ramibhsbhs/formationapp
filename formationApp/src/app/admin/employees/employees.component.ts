import { Component, OnInit } from '@angular/core';
import { Group } from '../../core/models/group.model';
import { User } from '../../core/models/user.model';
import { Role } from '../../core/models/role.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { GroupService } from 'src/app/core/services/group.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateGroupDialogComponent } from 'src/app/shared/components/create-group-dialog/create-group-dialog.component';
import { CreateUserDialogComponent } from 'src/app/shared/components/create-user-dialog/create-user-dialog.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  groups: Group[] = [];
  selectedGroup: Group | null = null;
  showCreateUserModal = false;
  loading = true;
  error: string | null = null;


  constructor(
    private groupService: GroupService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.fetchGroups();
  }

  fetchGroups() {
    this.loading = true;
    this.error = null;

    this.groupService.getGroups().subscribe({
      next: (groups) => {
        this.groups = groups;
        if (groups.length > 0) {
          this.selectedGroup = groups[0];
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load groups. Please try again later.';
        this.loading = false;
        console.error('Error fetching groups:', err);
      }
    });
  }

  selectGroup(group: Group) {
    this.selectedGroup = group;
  }

  openCreateUserModal() {
    const dialogRef = this.dialog.open(CreateUserDialogComponent, {
      data: { selectedGroup: this.selectedGroup },
      width: '1000px'
    });
    dialogRef.afterClosed().subscribe((user: User) => {
      if (user) {
        console.log(user);
        this.groups.find(g => g.id === this.selectedGroup?.id)?.users.push(user);
      }
    });
  }

  openCreateGroupModal() {
    const dialogRef = this.dialog.open(CreateGroupDialogComponent);
    dialogRef.afterClosed().subscribe((group: Group) => {
      if (group) {
        this.groups.push(group);
        this.selectedGroup = group;
      }
    });
  }

  createUser() {

  }



}



