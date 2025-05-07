import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormationsComponent } from './formation/formations/formations.component';
import { FormationDetailsComponent } from './formation/formation-details/formation-details.component';
import { QuizPassingComponent } from './quiz/quiz-passing/quiz-passing.component';
import { CertificationDetailsComponent } from '../shared/certification-details/certification-details.component';
import { CertificationListComponent } from './certification/certification-list/certification-list.component';
import { QuizValidationComponent } from './quiz/quiz-validation/quiz-validation.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ModuleViewComponent } from './module/module-view/module-view.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "formations", component: FormationsComponent },
  { path: "formations/:id", component: FormationDetailsComponent },
  { path: "formations/:formationId/finaltest/:quizId", component: QuizPassingComponent },
  { path: "validate-quiz/:sessionId", component: QuizValidationComponent },
  { path: "validate-quiz", component: QuizValidationComponent },
  { path: "quiz/:quizId/:sessionId", component: QuizPassingComponent },
  { path: "quiz/:quizId", component: QuizPassingComponent },

  // Routes pour les modules
  { path: "module/:formationId/:moduleId", component: ModuleViewComponent },
  { path: "module/:formationId/:moduleId/:sessionId", component: ModuleViewComponent },

  { path: "certification", component: CertificationListComponent },
  { path: "certification/:id", component: CertificationDetailsComponent },
  { path: "notifications", component: NotificationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondidatRoutingModule { }
