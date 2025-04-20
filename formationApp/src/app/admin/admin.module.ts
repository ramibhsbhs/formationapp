import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { TrainingComponent } from './training/training.component';
import { EmployeesComponent } from './employees/employees.component';
import { SessionComponent } from './session/session.component';
import { SettingsComponent } from './settings/settings.component';
import { SharedModule } from '../shared/shared.module';
import { TestComponent } from './test/test.component';
import { CreateFormationComponent } from './create-formation/create-formation.component';

@NgModule({
  declarations: [
    HomeComponent,
    TrainingComponent,
    EmployeesComponent,
    SessionComponent,
    SettingsComponent,
    TestComponent,
    CreateFormationComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    SharedModule
  ]
})
export class AdminModule { }
