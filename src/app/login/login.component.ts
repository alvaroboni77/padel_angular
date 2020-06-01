import { Component, OnInit } from '@angular/core';
import {UserRestService} from '../shared/user-rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  incorrect = false;
  exists = true;

  constructor(private conex: UserRestService, private router: Router) {}

  getToken(username: string, password: string) {
    if (username !== '' && password !== '') {
      this.conex.getToken(username, password).subscribe(
        response => {
          const token = response.headers.get('Authorization').split(' ')[1];
          sessionStorage.setItem('token', token);
          this.incorrect = false;
          this.router.navigateByUrl('/').then(() => window.location.reload());
        },
        (error) => {
          this.incorrect = true;
        }
      );
    }
  }

  checkUsername(username: string) {
    if (username !== '') {
      this.conex.checkUsername( username ).subscribe(
        () => { this.exists = true; },
        () => { this.exists = false; }
      );
    }
  }

  ngOnInit() {
  }

}
