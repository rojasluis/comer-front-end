import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonedaRoutingModule } from './moneda-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MonedaRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: []
})
export class MonedaModule { }
