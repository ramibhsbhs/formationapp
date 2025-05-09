import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CondidatRoutingModule } from './comdidat-routing.module';
import { HomeComponent } from './home/home.component';
import { CondidatFormationCardComponent } from './components/condidat-formation-card/condidat-formation-card.component';
import { FormationsComponent } from './formation/formations/formations.component';
import { QuizPassingComponent } from './quiz/quiz-passing/quiz-passing.component';
import { FormsModule } from '@angular/forms';
import { FormationDetailsComponent } from './formation/formation-details/formation-details.component';
import { CertificationListComponent } from './certification/certification-list/certification-list.component';
import { QuizValidationComponent } from './quiz/quiz-validation/quiz-validation.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ModuleViewComponent } from './module/module-view/module-view.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    CondidatFormationCardComponent,
    FormationsComponent,
    QuizPassingComponent,
    FormationDetailsComponent,
    CertificationListComponent,
    QuizValidationComponent,
    NotificationsComponent,
    ModuleViewComponent,
  ],
  imports: [
    CommonModule,
    CondidatRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class CondidatModule { }
