import { Component, OnInit, OnDestroy } from '@angular/core';
import { GroupService } from 'src/app/core/services/group.service';
import { Group } from 'src/app/core/models/group.model';
import { User } from 'src/app/core/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-supervisor-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit, OnDestroy {
  group: Group | null = null;
  employees: User[] = [];
  isLoading: boolean = true;
  error: string | null = null;
  searchTerm: string = '';
  
  private subscription = new Subscription();

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.loadSupervisorGroup();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadSupervisorGroup(): void {
    this.isLoading = true;
    this.error = null;
    
    this.subscription.add(
      this.groupService.getSupervisorGroup().subscribe({
        next: (group) => {
          this.group = group;
          this.employees = group.users || [];
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Erreur lors du chargement du groupe:', err);
          this.error = 'Impossible de charger les informations du groupe. Veuillez réessayer plus tard.';
          this.isLoading = false;
        }
      })
    );
  }

  get filteredEmployees(): User[] {
    if (!this.searchTerm.trim()) {
      return this.employees;
    }
    
    const term = this.searchTerm.toLowerCase().trim();
    return this.employees.filter(employee => 
      employee.userName.toLowerCase().includes(term) || 
      employee.email.toLowerCase().includes(term)
    );
  }

  onSearch(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }
}
