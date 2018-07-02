import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuntoPartidaListComponent } from './punto-partida-list/punto-partida-list.component';
import { PuntoPartidaEditComponent } from './punto-partida-edit/punto-partida-edit.component';
import { PuntoPartidaMainComponent } from './punto-partida-main/punto-partida-main.component';

const routes: Routes = [
  {

    path: 'main',
    component: PuntoPartidaMainComponent,
    children: [
      {
        path: '', redirectTo: 'lista'
      },
      {
        path: 'lista', component: PuntoPartidaListComponent,

        children: [
          {
            path: 'edicion', component: PuntoPartidaEditComponent
          }
        ]
      }


    ]


  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PuntoPartidaRoutingModule { }
