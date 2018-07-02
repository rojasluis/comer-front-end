import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntregaPorItemRoutingModule } from './entrega-por-item-routing.module';
import { EntregaPorItemMainComponent } from './entrega-por-item-main/entrega-por-item-main.component';
import { SharedModule } from '../../shared/shared.module';
import { DataTableModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  imports: [
    CommonModule,
    EntregaPorItemRoutingModule,
    CommonModule,
    SharedModule,
    DataTableModule,
    DropdownModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CalendarModule
  ],
  declarations: [EntregaPorItemMainComponent]
})
export class EntregaPorItemModule { }
