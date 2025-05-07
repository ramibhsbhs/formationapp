import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrainingComponent } from './formation/training/training.component';
import { EmployeesComponent } from './employees/employees.component';
import { SessionComponent } from './session/session.component';
import { SettingsComponent } from './settings/settings.component';
import { QuizsComponent } from './quiz/quizs/quizs.component';
import { CreateQuizsComponent } from './quiz/create-quizs/create-quizs.component';
import { QuizDetailsComponent } from './quiz/quiz-details/quiz-details.component';
import { UpdateQuizsComponent } from './quiz/update-quizs/update-quizs.component';
import { UpdateFormationComponent } from './formation/update-formation/update-formation.component';
import { QuizPassingComponent } from '../condidat/quiz/quiz-passing/quiz-passing.component';
import { FormationDetailComponent } from './formation/formation-detail/formation-detail.component';
import { CreateFormationComponent } from './formation/create-formation/create-formation.component';
import { AdminCertificationListComponent } from './certification/certification-list/certification-list.component';
import { CertificationDetailsComponent } from '../shared/certification-details/certification-details.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "formations", component: TrainingComponent },
  { path: "formations/create", component: CreateFormationComponent },
  { path: "formations/:id", component: FormationDetailComponent },
  { path: "formations/edit/:id", component: UpdateFormationComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "sessions", component: SessionComponent },
  { path: "settings", component: SettingsComponent },
  { path: "quizs", component: QuizsComponent },
  { path: "quizs/create", component: CreateQuizsComponent },
  { path: "quizs/:id", component: QuizDetailsComponent },
  { path: "quizs/edit/:id", component: UpdateQuizsComponent },
  { path: "quizs/test/:id", component: QuizPassingComponent },
  { path: "certifications", component: AdminCertificationListComponent },
  { path: "certifications/:id", component: CertificationDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
