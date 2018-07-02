import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlDespachoRoutingModule } from './control-despacho-routing.module';
import { ControlDespachoMainComponent } from './control-despacho-main/control-despacho-main.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BlockUIModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ControlDespachoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BlockUIModule
  ],
  declarations: [ControlDespachoMainComponent]
})
export class ControlDespachoModule { }
