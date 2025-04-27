import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ErrorLayoutComponent } from './layout/error-layout/error-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { EmployeeLayoutComponent } from './layout/employee-layout/employee-layout.component';
import { ManagerLayoutComponent } from './layout/manager-layout/manager-layout.component';
import { TeamLeaderLayoutComponent } from './layout/team-leader-layout/team-leader-layout.component';
import { RoleGuard } from './core/guards/role.guard';
import { UserRole } from './core/constants/roles.constants';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      {
        path: '',
        loadChildren: () => import('./main/main.module').then(m => m.MainModule)
      }
    ]
  },
  {
    path: '', component: AdminLayoutComponent, children: [
      {
       
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),

      }
    ],
    canActivate: [RoleGuard],
    data: { roles: [UserRole.Administrator] },

  },
  {
    path: '', component: EmployeeLayoutComponent, children: [
      {
        path: 'employee',
        loadChildren: () => import('./condidat/condidat.module').then(m => m.CondidatModule)
      }
    ],
    // canActivate: [RoleGuard],
    // data: { roles: [UserRole.Employee] }
  },
  {
    path: '', component: ManagerLayoutComponent, children: [
      {
        path: 'manager',
        loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule)
      }
    ],
    // canActivate: [RoleGuard],
    // data: { roles: [UserRole.Manager] }
  },
  {
    path: '', component: TeamLeaderLayoutComponent, children: [
      {
        path: 'team-leader',
        loadChildren: () => import('./supervisor/supervisor.module').then(m => m.SupervisorModule)
      }
    ],
    // canActivate: [RoleGuard],
    // data: { roles: [UserRole.TeamLeader] }
  },
  {
    path: '', component: AuthLayoutComponent, children: [
      {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: '', component: ErrorLayoutComponent, children: [

      {
        path: '',
        loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)
      },
      { path: '**', redirectTo: '404', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
