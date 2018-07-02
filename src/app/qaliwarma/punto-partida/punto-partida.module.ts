import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PuntoPartidaRoutingModule } from './punto-partida-routing.module';
import { PuntoPartidaMainComponent } from './punto-partida-main/punto-partida-main.component';
import { PuntoPartidaListComponent } from './punto-partida-list/punto-partida-list.component';
import { PuntoPartidaEditComponent } from './punto-partida-edit/punto-partida-edit.component';
import { DataTableModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    PuntoPartidaRoutingModule,
    CommonModule,
    
    
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  declarations: [PuntoPartidaMainComponent, PuntoPartidaListComponent, PuntoPartidaEditComponent]
})
export class PuntoPartidaModule { }
