import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerarExcelRoutingModule } from './generar-excel-routing.module';
import { GenerarExcelMainComponent } from './generar-excel-main/generar-excel-main.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { BlockUIModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    GenerarExcelRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BlockUIModule
  ],
  declarations: [GenerarExcelMainComponent]
})
export class GenerarExcelModule { }
