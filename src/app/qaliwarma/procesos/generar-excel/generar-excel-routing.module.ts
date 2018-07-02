import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerarExcelMainComponent } from './generar-excel-main/generar-excel-main.component';

const routes: Routes = [
  {
    path : 'main', component : GenerarExcelMainComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerarExcelRoutingModule { }
