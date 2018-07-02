import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XcoreRoutingModule } from './xcore-routing.module';
import { XcoreComponent } from './xcore.component';
import { AuthGuard } from '../shared/guard/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorAutorizationService } from '../shared/interceptor-autorization.service';




@NgModule({
  imports: [
    CommonModule,
    XcoreRoutingModule
  ],
  providers:[AuthGuard
  ],
  declarations: [XcoreComponent],
  exports:[XcoreComponent]

})
export class XcoreModule { }
