import { Component, OnInit } from '@angular/core';
import { Group } from '../../core/models/group.model';
import { User } from '../../core/models/user.model';
import { GroupService } from 'src/app/core/services/group.service';
import { UserService } from 'src/app/core/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ToasterService } from 'src/app/core/services/toaster.service';
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
    private userService: UserService,
    private dialog: MatDialog,
    private toaster: ToasterService
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

  /**
   * Bascule l'état actif/inactif d'un utilisateur
   * @param user L'utilisateur à activer/désactiver
   */
  toggleUserStatus(user: User) {
    const action = user.isActive ? 'désactiver' : 'activer';
    const confirmMessage = `Êtes-vous sûr de vouloir ${action} cet utilisateur ?`;

    if (confirm(confirmMessage)) {
      if (user.isActive) {
        this.userService.disableUser(user.id).subscribe({
          next: () => {
            user.isActive = false;
            this.toaster.showSuccess('Succès', `L'utilisateur a été désactivé avec succès.`);
          },
          error: (err) => {
            console.error('Erreur lors de la désactivation de l\'utilisateur:', err);
            this.toaster.showError('Erreur', `Erreur lors de la désactivation de l'utilisateur.`);
          }
        });
      } else {
        this.userService.enableUser(user.id).subscribe({
          next: () => {
            user.isActive = true;
            this.toaster.showSuccess('Succès', `L'utilisateur a été activé avec succès.`);
          },
          error: (err) => {
            console.error('Erreur lors de l\'activation de l\'utilisateur:', err);
            this.toaster.showError('Erreur', `Erreur lors de l'activation de l'utilisateur.`);
          }
        });
      }
    }
  }

  /**
   * Supprime un utilisateur
   * @param user L'utilisateur à supprimer
   */
  deleteUser(user: User) {
    if (confirm(`Êtes-vous sûr de vouloir supprimer définitivement l'utilisateur ${user.userName} ?`)) {
      this.userService.deleteUser(user.id).subscribe({
        next: () => {
          // Supprimer l'utilisateur de la liste des utilisateurs du groupe
          if (this.selectedGroup) {
            this.selectedGroup.users = this.selectedGroup.users.filter(u => u.id !== user.id);
          }

          this.toaster.showSuccess('Succès', `L'utilisateur a été supprimé avec succès.`);
        },
        error: (err) => {
          console.error('Erreur lors de la suppression de l\'utilisateur:', err);
          this.toaster.showError('Erreur', `Erreur lors de la suppression de l'utilisateur.`);
        }
      });
    }
  }

}



