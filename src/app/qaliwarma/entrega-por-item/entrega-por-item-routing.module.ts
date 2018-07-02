import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntregaPorItemMainComponent } from './entrega-por-item-main/entrega-por-item-main.component';

const routes: Routes = [
  {
    path : 'main', component : EntregaPorItemMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntregaPorItemRoutingModule { }
