import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportistaRoutingModule } from './transportista-routing.module';
import { TransportistaMainComponent } from './transportista-main/transportista-main.component';
import { TransportistaListComponent } from './transportista-list/transportista-list.component';
import { TransportistaEditComponent } from './transportista-edit/transportista-edit.component';
import { DataTableModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {  DropdownModule} from 'primeng/dropdown';

@NgModule({
  imports: [
    CommonModule,
    TransportistaRoutingModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropdownModule
  ],
  declarations: [TransportistaMainComponent, TransportistaListComponent, TransportistaEditComponent]
})
export class TransportistaModule { }
