import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { environment } from 'src/environments/environment';

interface UserCredential {
  username: string;
  email: string;
  password: string;
  role: string;
  group: string | null;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  error = '';
  isAccountDisabled = false;
  loginForm!: FormGroup;
  inDev = !environment.production;
  showUserSelector = false;
  fb = inject(FormBuilder);
  router = inject(Router);
  auth = inject(AuthService);
  selectedRole: string | null = null;
  selectedGroup: string | null = null;

  // Liste complète des utilisateurs
  users: UserCredential[] = [
    {
      username: "admin",
      email: "admin@gmail.com",
      password: "Pa$$w0rd",
      role: "Administrator",
      group: null
    },
    {
      username: "manager",
      email: "manager@gmail.com",
      password: "Pa$$w0rd",
      role: "Manager",
      group: null
    },
    {
      username: "hierarchicalleader1",
      email: "hierarchicalleader1@gmail.com",
      password: "Pa$$w0rd",
      role: "HierarchicalLeader",
      group: "Dev"
    },
    {
      username: "teamleader1",
      email: "teamleader1@gmail.com",
      password: "Pa$$w0rd",
      role: "TeamLeader",
      group: "Dev"
    },
    {
      username: "postleader1",
      email: "postleader1@gmail.com",
      password: "Pa$$w0rd",
      role: "PostLeader",
      group: "Dev"
    },
    {
      username: "qualityagent1",
      email: "qualityagent1@gmail.com",
      password: "Pa$$w0rd",
      role: "QualityAgent",
      group: "Dev"
    },
    {
      username: "hierarchicalleader2",
      email: "hierarchicalleader2@gmail.com",
      password: "Pa$$w0rd",
      role: "HierarchicalLeader",
      group: "RH"
    },
    {
      username: "teamleader2",
      email: "teamleader2@gmail.com",
      password: "Pa$$w0rd",
      role: "TeamLeader",
      group: "RH"
    },
    {
      username: "postleader2",
      email: "postleader2@gmail.com",
      password: "Pa$$w0rd",
      role: "PostLeader",
      group: "RH"
    },
    {
      username: "qualityagent2",
      email: "qualityagent2@gmail.com",
      password: "Pa$$w0rd",
      role: "QualityAgent",
      group: "RH"
    },
    {
      username: "hierarchicalleader3",
      email: "hierarchicalleader3@gmail.com",
      password: "Pa$$w0rd",
      role: "HierarchicalLeader",
      group: "Any"
    },
    {
      username: "teamleader3",
      email: "teamleader3@gmail.com",
      password: "Pa$$w0rd",
      role: "TeamLeader",
      group: "Any"
    },
    {
      username: "postleader3",
      email: "postleader3@gmail.com",
      password: "Pa$$w0rd",
      role: "PostLeader",
      group: "Any"
    },
    {
      username: "qualityagent3",
      email: "qualityagent3@gmail.com",
      password: "Pa$$w0rd",
      role: "QualityAgent",
      group: "Any"
    }
  ];

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onSubmit() {
    this.error = '';
    this.isLoading = true;
    this.auth.login(this.loginForm.value).subscribe({
      next: (result) => {
        console.log(result);
        this.isLoading = false;
        this.loginForm.reset();
      },
      error: (error) => {
        this.error = error.error;
        this.isLoading = false;

        // Vérifier si l'erreur concerne un compte désactivé
        if (this.error && this.error.includes('désactivé')) {
          this.isAccountDisabled = true;
        } else {
          this.isAccountDisabled = false;
        }
      }
    });
  }

  setLogin(email: string, password: string) {
    this.loginForm.patchValue({
      email,
      password
    });
  }

  // Méthodes pour le sélecteur d'utilisateurs
  toggleUserSelector() {
    this.showUserSelector = !this.showUserSelector;
  }

  // Obtenir les rôles uniques pour le filtre
  get uniqueRoles(): string[] {
    return [...new Set(this.users.map(user => user.role))];
  }

  // Obtenir les groupes uniques pour le filtre
  get uniqueGroups(): string[] {
    return [...new Set(this.users.map(user => user.group).filter(Boolean) as string[])];
  }

  // Filtrer les utilisateurs par rôle et groupe
  get filteredUsers(): UserCredential[] {
    return this.users.filter(user => {
      const roleMatch = !this.selectedRole || user.role === this.selectedRole;
      const groupMatch = !this.selectedGroup || user.group === this.selectedGroup;
      return roleMatch && groupMatch;
    });
  }

  // Sélectionner un rôle pour le filtre
  selectRole(role: string | null) {
    this.selectedRole = role;
  }

  // Sélectionner un groupe pour le filtre
  selectGroup(group: string | null) {
    this.selectedGroup = group;
  }

  // Sélectionner un utilisateur et remplir le formulaire
  selectUser(user: UserCredential) {
    this.setLogin(user.email, user.password);
    this.showUserSelector = false;
  }
}
