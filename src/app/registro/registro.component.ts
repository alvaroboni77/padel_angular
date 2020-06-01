import { Component, OnInit } from '@angular/core';
import {UserRestService} from '../shared/user-rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  exists = false;
  registered = false;
  errorDuplicated = false;
  errorServer = false;
  ranNum1 = 0;
  ranNum2 = 0;
  result;
  captchaMessage = false;
  isDisabled = true;

  constructor(private conex: UserRestService, private router: Router ) { }

  check_captcha(value) {
    if ( value == this.result ) {
      this.captchaMessage = false;
      this.isDisabled = false;
    } else {
      this.captchaMessage = true;
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

  createUser(username: string, mail: string, password: string, date: string) {
    const fechaFormat = new Date(Number(date.split('-')[0]), Number(date.split('-')[1]), Number(date.split('-')[2]));
    const fecha = fechaFormat.getTime();
    this.conex.createUser(username, mail, password, fecha).subscribe(
      () => {
          this.registered = true;
          this.errorDuplicated = false;
          this.errorServer = false;
        },
      (error) => {
        if (error.error === 'duplicated username') {
          this.errorDuplicated = true;
        } else {
          this.errorServer = true;
        }
      }
    );
  }

  ngOnInit() {
    this.ranNum1 = Math.floor(Math.random() * 10);
    this.ranNum2 = Math.floor(Math.random() * 10);
    this.result = this.ranNum1 + this.ranNum2;
  }

}
