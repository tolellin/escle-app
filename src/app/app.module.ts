import { environment } from './../environments/environment.prod';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationComponent } from './components/navegation/navegation.component';
import { HelpListComponent } from './components/help-list/help-list.component';

import { HelpService } from './services/help.service';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { SigninComponent } from './components/signin/signin.component';
import { AditionaldataComponent } from './components/aditionaldata/aditionaldata.component';
import { UserdataComponent } from './components/userdata/userdata.component'

import { FullCalendarModule } from 'primeng/fullcalendar';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { NewitemsComponent } from './components/newitems/newitems.component';
import { EjerciciosComponent } from './components/ejercicios/ejercicios.component';
import { NivelunoComponent } from './components/niveluno/niveluno.component';
import { NiveldosComponent } from './components/niveldos/niveldos.component';
import { NiveltresComponent } from './components/niveltres/niveltres.component';
import { NivelcuatroComponent } from './components/nivelcuatro/nivelcuatro.component';
import { NivelcincoComponent } from './components/nivelcinco/nivelcinco.component';
import { UpdatedataComponent } from './components/updatedata/updatedata.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    HelpListComponent,
    LoginComponent,
    SigninComponent,
    AditionaldataComponent,
    UserdataComponent,
    CalendarioComponent,
    NewitemsComponent,
    EjerciciosComponent,
    NivelunoComponent,
    NiveldosComponent,
    NiveltresComponent,
    NivelcuatroComponent,
    NivelcincoComponent,
    UpdatedataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FullCalendarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    HelpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
