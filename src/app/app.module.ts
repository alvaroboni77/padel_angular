import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { InstalacionesComponent } from './instalaciones/instalaciones.component';
import { ReservarComponent } from './reservar/reservar.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {UserRestService} from './shared/user-rest.service';
import {ReservationsRestService} from './shared/reservations-rest.service';
import { ClickReservationDirective } from './shared/directives/click-reservation.directive';
import {TokenRestService} from './shared/token-rest.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServiciosComponent,
    InstalacionesComponent,
    ReservarComponent,
    RegistroComponent,
    LoginComponent,
    ClickReservationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserRestService, ReservationsRestService, TokenRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
