import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ErrorLayoutComponent } from './error-layout/error-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeeLayoutComponent } from './employee-layout/employee-layout.component';
import { ManagerLayoutComponent } from './manager-layout/manager-layout.component';
import { TeamLeaderLayoutComponent } from './team-leader-layout/team-leader-layout.component';




@NgModule({
  declarations: [
    MainLayoutComponent,
    ErrorLayoutComponent,
    AuthLayoutComponent,
    AdminLayoutComponent,
    EmployeeLayoutComponent,
    ManagerLayoutComponent,
    TeamLeaderLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class LayoutModule { }
