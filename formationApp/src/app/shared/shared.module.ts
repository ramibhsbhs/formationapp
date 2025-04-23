import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './ui/input/input.component';
import { ButtomComponent } from './ui/buttom/buttom.component';
import { RouterModule } from '@angular/router';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TrainingCardComponent } from './training-card/training-card.component';
import { CreateGroupDialogComponent } from './components/create-group-dialog/create-group-dialog.component';
import { CreateUserDialogComponent } from './components/create-user-dialog/create-user-dialog.component';
import { SessionPopupComponent } from './components/session-popup/session-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    InputComponent,
    ButtomComponent,
    AppSidebarComponent,
    TrainingCardComponent,
    CreateGroupDialogComponent,
    CreateUserDialogComponent,
    SessionPopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    ButtomComponent,
    AppSidebarComponent,
    TrainingCardComponent,
    CreateGroupDialogComponent,
    CreateUserDialogComponent,
    SessionPopupComponent,
  ]
})
export class SharedModule { }
