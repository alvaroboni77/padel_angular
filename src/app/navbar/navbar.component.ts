import { Component, OnInit } from '@angular/core';
import {TokenRestService} from '../shared/token-rest.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token = sessionStorage.getItem('token');
  loggedIn = false;

  constructor(private conex: TokenRestService) { }

  removeToken() {
    sessionStorage.removeItem('token');
    this.loggedIn = false;
  }

  ngOnInit() {
    if (this.token !== null) {
      this.loggedIn = true;
    }
  }
}
