import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrainingComponent } from './training/training.component';
import { EmployeesComponent } from './employees/employees.component';
import { SessionComponent } from './session/session.component';
import { SettingsComponent } from './settings/settings.component';
import { TestComponent } from './test/test.component';
import { CreateFormationComponent } from './create-formation/create-formation.component';
import { QuizsComponent } from './quiz/quizs/quizs.component';
import { CreateQuizsComponent } from './quiz/create-quizs/create-quizs.component';
import { QuizDetailsComponent } from './quiz/quiz-details/quiz-details.component';
import { UpdateQuizsComponent } from './quiz/update-quizs/update-quizs.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "formations", component: TrainingComponent },
  { path: "formations/create", component: CreateFormationComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "sessions", component: SessionComponent },
  { path: "settings", component: SettingsComponent },
  { path: "quizs", component: QuizsComponent },
  { path: "quizs/create", component: CreateQuizsComponent },
  { path: "quizs/:id", component: QuizDetailsComponent },
  { path: "quizs/edit/:id", component: UpdateQuizsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
