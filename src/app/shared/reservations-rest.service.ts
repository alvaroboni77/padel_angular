import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ReservationsRestService {
  private baseurl = 'http://fenw.etsisi.upm.es:10000/reservations';

  constructor(private http: HttpClient) {}

  getReservations(token: string, date: number) {
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get( this.baseurl + `/${date}`, {headers} );
  }

  sendReservation(token: string, pista: number, fecha: number) {
    const headers = new HttpHeaders().set('Authorization', token);
    const data = {'courtid': pista, 'rsvdatetime': fecha};
    return this.http.post( this.baseurl, data, {headers} );
  }
}
