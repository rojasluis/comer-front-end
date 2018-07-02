import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargarInfoRoutingModule } from './cargar-info-routing.module';
import { CargarInfoMainComponent } from './cargar-info-main/cargar-info-main.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CargarInfoRoutingModule,
    CommonModule,
 
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [CargarInfoMainComponent]
})
export class CargarInfoModule { }
