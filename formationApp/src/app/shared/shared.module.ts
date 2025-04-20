import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './ui/input/input.component';
import { ButtomComponent } from './ui/buttom/buttom.component';
import { RouterModule } from '@angular/router';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrainingCardComponent } from './training-card/training-card.component';
import { CreateGroupDialogComponent } from './components/create-group-dialog/create-group-dialog.component';
import { CreateUserDialogComponent } from './components/create-user-dialog/create-user-dialog.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtomComponent,
    AppSidebarComponent,
    TrainingCardComponent,
    CreateGroupDialogComponent,
    CreateUserDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    ButtomComponent,
    AppSidebarComponent,
    TrainingCardComponent,
    CreateGroupDialogComponent,
    CreateUserDialogComponent
  ]
})
export class SharedModule { }
