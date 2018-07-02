import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalcularVolumenMainComponent } from './calcular-volumen-main/calcular-volumen-main.component';

const routes: Routes = [
  {
    path : 'main', component : CalcularVolumenMainComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalcularVolumenRoutingModule { }
