import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CondidatRoutingModule } from './comdidat-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CondidatRoutingModule
  ]
})
export class CondidatModule { }
