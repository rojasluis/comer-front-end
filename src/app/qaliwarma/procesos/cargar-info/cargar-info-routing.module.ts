import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargarInfoMainComponent } from './cargar-info-main/cargar-info-main.component';

const routes: Routes = [
 {
   path : 'main', component : CargarInfoMainComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargarInfoRoutingModule { }
