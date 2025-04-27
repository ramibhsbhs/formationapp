import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrainingComponent } from './formation/training/training.component';
import { EmployeesComponent } from './employees/employees.component';
import { SessionComponent } from './session/session.component';
import { SettingsComponent } from './settings/settings.component';
import { TestComponent } from './test/test.component';
import { QuizsComponent } from './quiz/quizs/quizs.component';
import { CreateQuizsComponent } from './quiz/create-quizs/create-quizs.component';
import { QuizDetailsComponent } from './quiz/quiz-details/quiz-details.component';
import { UpdateQuizsComponent } from './quiz/update-quizs/update-quizs.component';
import { CreateFormationComponent } from './formation/create-formation/create-formation.component';
import { UpdateFormationComponent } from './formation/update-formation/update-formation.component';
import { QuizPassingComponent } from './quiz-passing/quiz-passing.component';
import { FormationDetailComponent } from './formation/formation-detail/formation-detail.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "formations", component: TrainingComponent },
  { path: "formations/:id", component: FormationDetailComponent },
  { path: "formations/edit/:id", component: UpdateFormationComponent },
  { path: "formations/create", component: CreateFormationComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "sessions", component: SessionComponent },
  { path: "settings", component: SettingsComponent },
  { path: "quizs", component: QuizsComponent },
  { path: "quizs/create", component: CreateQuizsComponent },
  { path: "quizs/:id", component: QuizDetailsComponent },
  { path: "quizs/edit/:id", component: UpdateQuizsComponent },
  { path: "quizs/test/:id", component: QuizPassingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
