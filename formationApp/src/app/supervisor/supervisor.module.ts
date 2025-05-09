import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { SupervisorRoutingModule } from './supervisor-routing.module';
import { HomeComponent } from './home/home.component';
import { FormationsComponent } from './formations/formations.component';
import { FormationDetailComponent } from './formations/formation-detail/formation-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CertificationsComponent } from './certifications/certifications.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { GroupComponent } from './group/group.component';



@NgModule({
  declarations: [
    HomeComponent,
    FormationsComponent,
    FormationDetailComponent,
    CertificationsComponent,
    NotificationsComponent,
    GroupComponent,
  ],
  imports: [
    CommonModule,
    SupervisorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatDialogModule
  ]
})
export class SupervisorModule { }
