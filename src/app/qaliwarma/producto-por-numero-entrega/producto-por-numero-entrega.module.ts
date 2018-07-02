import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoPorNumeroEntregaRoutingModule } from './producto-por-numero-entrega-routing.module';
import { ProductoPorNumeroEntregaMainComponent } from './producto-por-numero-entrega-main/producto-por-numero-entrega-main.component';
import { ProductoPorNumeroEntregaEditComponent } from './producto-por-numero-entrega-edit/producto-por-numero-entrega-edit.component';
import { ProductoPorNumeroEntregaListComponent } from './producto-por-numero-entrega-list/producto-por-numero-entrega-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProductoPorNumeroEntregaRoutingModule
  ],
  declarations: [ProductoPorNumeroEntregaMainComponent, ProductoPorNumeroEntregaEditComponent, ProductoPorNumeroEntregaListComponent]
})
export class ProductoPorNumeroEntregaModule { }
