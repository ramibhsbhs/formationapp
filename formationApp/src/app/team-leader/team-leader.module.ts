import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamLeaderRoutingModule } from './team-leader-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TeamLeaderRoutingModule
  ]
})
export class TeamLeaderModule { }
