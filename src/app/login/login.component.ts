import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Message } from 'primeng/primeng';
import { LoginService } from './login.service';
import { ConfigService } from '../shared/config.service';
import { UserIdleService } from 'angular-user-idle';
import { map } from 'rxjs/operators';


@Component({
  selector: 'ad-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService, ConfigService]
})
export class LoginComponent implements OnInit {

  public model = { 'username': '', 'password': '' };
  public loginForm: any;
  public msgs: Message[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
   
  ) {

  }

  ngOnInit() {
    this.buildForm();
    localStorage.clear();

   
  }

  buildForm() {

    this.loginForm = this.formBuilder.group({
      username: [this.model.username, Validators.required],
      password: [this.model.password, Validators.required]

    });
  }

  onsubmit() {

    let request;
    this.model.username = this.loginForm.controls.username.value;
    this.model.password = this.loginForm.controls.password.value;

    this.loginService.sendCredentials(this.model)
      .subscribe(
      res => {

        // debugger;
         request = res;
         let x = JSON.stringify(res)
         let y = JSON.parse(x);
         if (y.sucess == true) {
           localStorage.setItem("currentUserName", this.model.username);
           localStorage.setItem("token", y.token);
           localStorage.setItem("anno",y.anno);
           localStorage.setItem("numeroEntrega",y.numeroEntrega)
         } else {
           localStorage.clear();
           this.showInfo()
         }

        //this.redireccion();


      }

      )
  }

  showInfo() {
    this.msgs = [];
    this.msgs.push({ severity: 'Atencion', summary: 'Aviso', detail: 'El usuario no existe' });
  }
  clearMsg() {
    this.msgs = [];
  }

}
