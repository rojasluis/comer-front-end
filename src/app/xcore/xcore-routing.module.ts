import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: '../main/main.module#MainModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: '../login/login.module#LoginModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class XcoreRoutingModule { }
