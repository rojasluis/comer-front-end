import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChoferRoutingModule } from './chofer-routing.module';
import { ChoferMainComponent } from './chofer-main/chofer-main.component';
import { ChoferListComponent } from './chofer-list/chofer-list.component';
import { ChoferEditComponent } from './chofer-edit/chofer-edit.component';
import { DataTableModule } from 'primeng/primeng';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ChoferRoutingModule,
    CommonModule,
        
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [ChoferMainComponent, ChoferListComponent, ChoferEditComponent]
})
export class ChoferModule { }
