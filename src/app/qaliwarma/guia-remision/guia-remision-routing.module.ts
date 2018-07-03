import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuiaRemisionListComponent } from './guia-remision-list/guia-remision-list.component';
import { GuiaRemisionEditComponent } from './guia-remision-edit/guia-remision-edit.component';
import { ActualizaNumeroGuiaComponent } from './actualiza-numero-guia/actualiza-numero-guia.component';

const routes: Routes = [
 
  
  {
    
    path : 'main', redirectTo: 'listar',
    children : [
      {
        path: '', redirectTo: 'listar'
      },
      {
        path : 'listar',component : GuiaRemisionListComponent
      },
      {
        path : 'editar', component: GuiaRemisionEditComponent
      }
    ]
    
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuiaRemisionRoutingModule { }
