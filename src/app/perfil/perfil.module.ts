import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilMainComponent } from './perfil-main/perfil-main.component';
import { PerfilListComponent } from './perfil-list/perfil-list.component';
import { PerfilEditComponent } from './perfil-edit/perfil-edit.component';
import { GrowlModule, DataTableModule } from 'primeng/primeng';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PerfilRoutingModule,
    GrowlModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [PerfilMainComponent, PerfilListComponent, PerfilEditComponent]
})
export class PerfilModule { }
