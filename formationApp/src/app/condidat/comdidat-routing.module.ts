import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormationsComponent } from './formation/formations/formations.component';
import { FormationDetailsComponent } from './formation/formation-details/formation-details.component';
import { QuizPassingComponent } from './quiz/quiz-passing/quiz-passing.component';
import { CertificationDeatilsComponent } from './certification/certification-deatils/certification-deatils.component';
import { CertificationListComponent } from './certification/certification-list/certification-list.component';
import { QuizValidationComponent } from './quiz/quiz-validation/quiz-validation.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "formations", component: FormationsComponent },
  { path: "formations/:id", component: FormationDetailsComponent },
  { path: "formations/:formationId/finaltest/:quizId", component: QuizPassingComponent },
  { path: "validate-quiz/:sessionId", component: QuizValidationComponent },
  { path: "quiz/:quizId/:sessionId", component: QuizPassingComponent },
  { path: "certification", component: CertificationListComponent },
  { path: "certification/:id", component: CertificationDeatilsComponent },
  { path: "notifications", component: NotificationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondidatRoutingModule { }
