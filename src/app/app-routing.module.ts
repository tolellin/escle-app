import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelpListComponent } from './components/help-list/help-list.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { AditionaldataComponent } from './components/aditionaldata/aditionaldata.component';
import { UserdataComponent } from './components/userdata/userdata.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { NewitemsComponent } from './components/newitems/newitems.component';
import {EjerciciosComponent } from './components/ejercicios/ejercicios.component';
import { NivelunoComponent } from './components/niveluno/niveluno.component';
import { NiveldosComponent } from './components/niveldos/niveldos.component';
import { NivelcincoComponent } from './components/nivelcinco/nivelcinco.component';
import { NivelcuatroComponent } from './components/nivelcuatro/nivelcuatro.component';
import { NiveltresComponent } from './components/niveltres/niveltres.component';
import { UpdatedataComponent } from './components/updatedata/updatedata.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'userdata',
    pathMatch: 'full'


  },
  {
    path: 'help-list',
    component: HelpListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'aditionaldata',
    component: AditionaldataComponent
  },
  {
    path: 'userdata',
    component: UserdataComponent
  },
  {
    path: 'calendar',
    component: CalendarioComponent
  },
  {
    path: 'newitems',
    component: NewitemsComponent
  },
  {
    path: 'exercises',
    component: EjerciciosComponent
  },
  {
    path: 'niveluno',
    component: NivelunoComponent
  },
  {
    path: 'niveldos',
    component: NiveldosComponent
  },
  {
    path: 'niveltres',
    component: NiveltresComponent
  },
  {
    path: 'nivelcuatro',
    component: NivelcuatroComponent
  },
  {
    path: 'nivelcinco',
    component: NivelcincoComponent
  },
  {
    path: 'updatedata',
    component: UpdatedataComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
