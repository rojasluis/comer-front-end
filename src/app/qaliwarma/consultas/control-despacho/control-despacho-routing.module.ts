import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlDespachoMainComponent } from './control-despacho-main/control-despacho-main.component';

const routes: Routes = [
  {
    path : 'main', component : ControlDespachoMainComponent
  }  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlDespachoRoutingModule { }
