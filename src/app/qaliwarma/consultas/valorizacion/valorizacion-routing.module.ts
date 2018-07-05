import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValorizacionMainComponent } from './valorizacion-main/valorizacion-main.component';

const routes: Routes = [{
  path : 'main', component: ValorizacionMainComponent 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValorizacionRoutingModule { }
