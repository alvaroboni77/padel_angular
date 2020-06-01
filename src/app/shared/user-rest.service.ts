import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserRestService {
  private baseurl = 'http://fenw.etsisi.upm.es:10000/users';

  constructor(private http: HttpClient) {}

  getToken(username: string, password: string) {
    const params = new HttpParams().set('username', username).set('password', password);
    return this.http.get( this.baseurl + '/login', {params, observe: 'response'} );
  }

  checkUsername(username: string) {
    const url = this.baseurl + `/${username}`;
    return this.http.get( url );
  }

  createUser(username: string, mail: string, password: string, date: number) {
    const data = {'username': username, 'email': mail, 'password': password, 'birthdate': date};
    return this.http.post( this.baseurl, data);
  }
}
