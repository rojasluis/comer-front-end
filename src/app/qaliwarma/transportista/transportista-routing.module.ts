import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransportistaMainComponent } from './transportista-main/transportista-main.component';
import { TransportistaListComponent } from './transportista-list/transportista-list.component';
import { TransportistaEditComponent } from './transportista-edit/transportista-edit.component';

const routes: Routes = [

  {

    path: 'main',
    component: TransportistaMainComponent,
    children: [
      {
        path: '', redirectTo: 'lista'
      },
      {
        path: 'lista', component: TransportistaListComponent,

        children: [
          {
            path: 'edicion', component: TransportistaEditComponent
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
export class TransportistaRoutingModule { }
