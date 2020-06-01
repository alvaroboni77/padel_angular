import {Component, OnInit} from '@angular/core';
import {ReservationsRestService} from '../shared/reservations-rest.service';
import {Reservation} from '../shared/models/reservation.model';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit {
  myReservations: Reservation[] = [];
  p1 = Array(12);
  p2 = Array(12);
  p3 = Array(12);
  p4 = Array(12);
  pistas = Array(this.p1, this.p2, this.p3, this.p4);
  errorLogout = false;
  errorMaxReservations = false;
  errorOcupada = false;
  horario = false;
  reservaRealizada = false;
  nombrePistas = [ 'Pista 1', 'Pista 2', 'Pista 3', 'Pista 4'];
  ocupaciones = [ 'Libre', 'Libre', 'Libre', 'Libre', 'Libre', 'Libre', 'Libre', 'Libre', 'Libre', 'Libre', 'Libre'];
  horas = [ '', '10:00 11:00', '11:00 12:00', '12:00 13:00', '13:00 14:00', '14:00 15:00', '15:00 16:00', '16:00 17:00', '17:00 18:00', '18:00 19:00', '19:00 20:00', '20:00 21:00', '21:00 22:00'];
  mydate = '';
  fechaReserva = '';
  idPista = 0;

  constructor(private conex: ReservationsRestService) { }

  showReservations(): void {
    for (let i = 0; i < this.pistas.length; i++) {
      for (let j = 0; j < this.pistas[i].length; j++) {
        this.pistas[i][j] = 'Libre';
      }
    }
    for (let i = 0; i < this.myReservations.length; i++) {
      let posicion = Number(this.myReservations[i].rsvtime.split(':')[0]) - 10;
      this.pistas[(this.myReservations[i].courtId) - 1][posicion] = 'Ocupado';
    }
  }

  getReservations( date: string ) {
    const fechaFormat = new Date(Number(date.split('-')[0]), Number(date.split('-')[1]) - 1, Number(date.split('-')[2]));
    const fecha = fechaFormat.getTime();
    const token = 'Bearer ' + sessionStorage.getItem('token');
    this.conex.getReservations(token, fecha).subscribe(
      (response: Reservation[]) => {
          this.myReservations = response;
          this.showReservations();
          this.horario = true;
          this.errorLogout = false;
        },
      (error) => {
        if (error.error === 'no valid token') {
          this.errorLogout = true;
          this.horario = false;
        }
      }
    );
  }

  sendReservation( e ) {
    const pista = parseInt(e.target.dataset.pista, 10);
    const horaIndex = parseInt(e.target.dataset.hora, 10);
    if (this.pistas[pista][horaIndex] == 'Libre') {
      this.errorOcupada = false;
      const token = 'Bearer ' + sessionStorage.getItem('token');
      const horaReserva = this.horas[horaIndex + 1].split(' ')[0].split(':')[0];
      const fecha = e.target.dataset.fecha;
      const fechaFormat = new Date(Number(fecha.split('-')[0]), Number(fecha.split('-')[1]) - 1, Number(fecha.split('-')[2]), Number(horaReserva), 0, 0, 0);
      const fechaReserva = fechaFormat.getTime();
      this.conex.sendReservation(token, pista + 1, fechaReserva).subscribe(
        () => {
          const fechaReserva = fecha.split('-')[2] + '/' + fecha.split('-')[1] + '/' + fecha.split('-')[0];
          this.horario = false;
          this.errorOcupada = false;
          this.fechaReserva = this.horas[horaIndex + 1].split(' ')[0] + ' ' + fechaReserva;
          this.idPista = pista + 1;
          this.reservaRealizada = true;
          },
        (error) => {
          if (error.error === 'maximum number of reservations reached') {
            this.horario = false;
            this.errorMaxReservations = true;
          } else if (error.error === 'court already reserved') {
            this.errorOcupada = true;
          }
        }
      );
    } else {
      this.errorOcupada = true;
    }
  }

  ngOnInit() {

  }

}
