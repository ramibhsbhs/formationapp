import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { TrainingComponent } from './formation/training/training.component';
import { EmployeesComponent } from './employees/employees.component';
import { SessionComponent } from './session/session.component';
import { SettingsComponent } from './settings/settings.component';
import { SharedModule } from '../shared/shared.module';
import { TestComponent } from './test/test.component';

import { QuizsComponent } from './quiz/quizs/quizs.component';
import { CreateQuizsComponent } from './quiz/create-quizs/create-quizs.component';
import { QuizDetailsComponent } from './quiz/quiz-details/quiz-details.component';
import { UpdateQuizsComponent } from './quiz/update-quizs/update-quizs.component';
import { CreateFormationComponent } from './formation/create-formation/create-formation.component';
import { UpdateFormationComponent } from './formation/update-formation/update-formation.component';
import { QuizPassingComponent } from '../condidat/quiz/quiz-passing/quiz-passing.component';
import { FormationDetailComponent } from './formation/formation-detail/formation-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    TrainingComponent,
    EmployeesComponent,
    SessionComponent,
    SettingsComponent,
    TestComponent,
    CreateFormationComponent,
    QuizsComponent,
    CreateQuizsComponent,
    QuizDetailsComponent,
    UpdateQuizsComponent,
    UpdateFormationComponent,
    FormationDetailComponent
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
