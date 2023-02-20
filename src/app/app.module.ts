import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Adicionei aqui
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './pages/login/login.component';
import { AppComponentForm } from './pages/main/app.componentform';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppComponentForm,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    CommonModule,
    FormsModule, ReactiveFormsModule, MatButtonModule, MatTableModule// Adicione aqui
  ],
  providers: [AppComponentForm, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }