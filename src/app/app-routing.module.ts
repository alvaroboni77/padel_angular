import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ServiciosComponent} from './servicios/servicios.component';
import {InstalacionesComponent} from './instalaciones/instalaciones.component';
import {LoginComponent} from './login/login.component';
import {RegistroComponent} from './registro/registro.component';
import {ReservarComponent} from './reservar/reservar.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'servicios', component: ServiciosComponent},
  { path: 'instalaciones', component: InstalacionesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'reservar', component: ReservarComponent},
  { path: 'inicio', component: HomeComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
