import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FirebaseComponent } from './firebase.component';

const forms = [LoginComponent, RegisterComponent, FirebaseComponent];

@NgModule({
  declarations: forms,
  exports: forms,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  providers: [],
})
export class FBAuthModule {}
