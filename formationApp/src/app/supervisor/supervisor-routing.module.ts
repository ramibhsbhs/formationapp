import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormationDetailComponent } from './formations/formation-detail/formation-detail.component';
import { FormationsComponent } from './formations/formations.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CertificationDetailsComponent } from '../shared/certification-details/certification-details.component';
import { GroupComponent } from './group/group.component';


const routes: Routes = [
  // { path: "", component: HomeComponent },
  { path: "formations", component: FormationsComponent },
  { path: "formations/:id", component: FormationDetailComponent },
  { path: "certifications", component: CertificationsComponent },
  { path: "certifications/:id", component: CertificationDetailsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "group", component: GroupComponent },
  { path: "", pathMatch: "full", redirectTo: "formations" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupervisorRoutingModule { }
