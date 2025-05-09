import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormationComponent } from './formation/formation.component';
import { SessionComponent } from './session/session.component';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';
import { ManagerCertificationListComponent } from './certification/certification-list/certification-list.component';
import { CertificationDetailsComponent } from '../shared/certification-details/certification-details.component';
import { SettingsComponent } from '../shared/settings/settings.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "formations", component: FormationComponent },
  { path: "formations/:id", component: FormationDetailComponent },
  { path: "sessions", component: SessionComponent },
  { path: "certifications", component: ManagerCertificationListComponent },
  { path: "certifications/:id", component: CertificationDetailsComponent },
  { path: "settings", component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
