import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrainingComponent } from './training/training.component';
import { EmployeesComponent } from './employees/employees.component';
import { SessionComponent } from './session/session.component';
import { SettingsComponent } from './settings/settings.component';
import { TestComponent } from './test/test.component';
import { CreateFormationComponent } from './create-formation/create-formation.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "formations", component: TrainingComponent },
  { path: "formations/create", component: CreateFormationComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "sessions", component: SessionComponent },
  { path: "settings", component: SettingsComponent },
  { path: "test", component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
