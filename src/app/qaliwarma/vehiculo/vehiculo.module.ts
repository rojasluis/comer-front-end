import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculoRoutingModule } from './vehiculo-routing.module';
import { VehiculoMainComponent } from './vehiculo-main/vehiculo-main.component';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';
import { VehiculoEditComponent } from './vehiculo-edit/vehiculo-edit.component';
import { DataTableModule } from 'primeng/primeng';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorAutorizationService } from '../../shared/interceptor-autorization.service';

@NgModule({
  imports: [
    CommonModule,
    VehiculoRoutingModule,
    CommonModule,
    SharedModule,
    DataTableModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers :[
  
  ],
  declarations: [VehiculoMainComponent, VehiculoListComponent, VehiculoEditComponent]
})
export class VehiculoModule { }
