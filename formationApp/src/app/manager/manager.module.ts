import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { HomeComponent } from './home/home.component';
import { FormationComponent } from './formation/formation.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SessionComponent } from './session/session.component';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';
import { ManagerCertificationListComponent } from './certification/certification-list/certification-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    FormationComponent,
    SessionComponent,
    FormationDetailComponent,
    ManagerCertificationListComponent,
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ManagerModule { }
