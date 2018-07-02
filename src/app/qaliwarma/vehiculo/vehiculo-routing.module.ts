import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculoMainComponent } from './vehiculo-main/vehiculo-main.component';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';
import { VehiculoEditComponent } from './vehiculo-edit/vehiculo-edit.component';

const routes: Routes = [

  {

    path: 'main',
    component: VehiculoMainComponent,
    children: [
      {
        path: '', redirectTo: 'lista'
      },
      {
        path: 'lista', component: VehiculoListComponent,

        children: [
          {
            path: 'edicion', component: VehiculoEditComponent
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
export class VehiculoRoutingModule { }
