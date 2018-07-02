import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RutaDistribucionRoutingModule } from './ruta-distribucion-routing.module';

import { RutaDistribucionMainComponent } from './ruta-distribucion-main/ruta-distribucion-main.component';
import { RutaDistribucionListComponent } from './ruta-distribucion-list/ruta-distribucion-list.component';
import { RutaDistribucionEditComponent } from './ruta-distribucion-edit/ruta-distribucion-edit.component';
import { DataTableModule, BlockUIModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoDistribuidorModule } from '../empleado-distribuidor/empleado-distribuidor.module';
import { EmpleadoDistribuidorListComponent } from '../empleado-distribuidor/empleado-distribuidor-list/empleado-distribuidor-list.component';
import { RutaDistribucionDetalleComponent } from './ruta-distribucion-detalle/ruta-distribucion-detalle.component';
import { VolumenRequerimiento001Module } from '../requerimiento-volumen-001/volumen-requerimiento-001.module';
import { MapaDistribucionComponent } from './mapa-distribucion/mapa-distribucion.component';


@NgModule({
  imports: [
    CommonModule,
    RutaDistribucionRoutingModule,
    DataTableModule,
    BlockUIModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EmpleadoDistribuidorModule,
    VolumenRequerimiento001Module
  ],
  declarations: [ RutaDistribucionMainComponent, RutaDistribucionListComponent, RutaDistribucionEditComponent, RutaDistribucionDetalleComponent, MapaDistribucionComponent]
})
export class RutaDistribucionModule { }
