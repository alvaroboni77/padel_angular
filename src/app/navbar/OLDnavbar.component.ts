import { Component, OnInit } from '@angular/core';
import {TokenRestService} from '../shared/token-rest.service';
import {Subject, Subscription} from 'rxjs';
//
// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent implements OnInit {
//   token = '';
//   loggedIn = false;
//   private organizator$: Subject<number> = new Subject();
//   private suscription: Subscription;
//
//   constructor(private conex: TokenRestService) { }
//
//   removeToken() {
//     sessionStorage.removeItem('token');
//     this.loggedIn = false;
//   }
//
//   notifysuscriptor(token) {
//     if (token !== null) {
//       this.loggedIn = true;
//     }
//   }
//
//   ngOnInit() {
//     // if (this.token !== null) {
//     //   this.loggedIn = true;
//     // }
//     this.organizator$.asObservable().subscribe(
//       () => { this.notifysuscriptor(this.token); }
//     );
//     this.getToken();
//   }
//
//   getToken() {
//     this.token = sessionStorage.getItem('token');
//     this.organizator$.next(this.token);
//   }
// }
