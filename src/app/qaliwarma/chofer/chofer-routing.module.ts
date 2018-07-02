import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoferMainComponent } from './chofer-main/chofer-main.component';
import { ChoferListComponent } from './chofer-list/chofer-list.component';
import { ChoferEditComponent } from './chofer-edit/chofer-edit.component';

const routes: Routes = [

  {

    path: 'main',
    component: ChoferMainComponent,
    children: [
      {
        path: '', redirectTo: 'lista'
      },
      {
        path: 'lista', component: ChoferListComponent,

        children: [
          {
            path: 'edicion', component: ChoferEditComponent
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
export class ChoferRoutingModule { }
