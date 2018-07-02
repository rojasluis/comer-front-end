import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MessagesModule } from 'primeng/primeng';
import { SharedModule } from '../shared/shared.module';
import { ConfigService } from '../shared/config.service';
import {  HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MessagesModule,
    FormsModule,
    HttpClientModule
    
  ],
  declarations: [LoginComponent],
  providers : [ConfigService]
})
export class LoginModule { }
