import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValorizacionRoutingModule } from './valorizacion-routing.module';
import { ValorizacionMainComponent } from './valorizacion-main/valorizacion-main.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BlockUIModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ValorizacionRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BlockUIModule
  ],
  declarations: [ValorizacionMainComponent]
})
export class ValorizacionModule { }
