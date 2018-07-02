import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalcularVolumenRoutingModule } from './calcular-volumen-routing.module';
import { CalcularVolumenMainComponent } from './calcular-volumen-main/calcular-volumen-main.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BlockUIModule } from 'primeng/primeng';


@NgModule({
  imports: [
    CommonModule,
    CalcularVolumenRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BlockUIModule
    
  ],
  declarations: [CalcularVolumenMainComponent]
})
export class CalcularVolumenModule { }
