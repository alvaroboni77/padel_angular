import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokenRestService {

  constructor() {}

  getToken() {
    const token = sessionStorage.getItem('token');
    return token !== null;
  }

}
