import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormationComponent } from './formation/formation.component';
import { SessionComponent } from './session/session.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "formations", component: FormationComponent },
  { path: "sessions", component: SessionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
