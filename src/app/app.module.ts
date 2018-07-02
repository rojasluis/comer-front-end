
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { XcoreModule } from './xcore/xcore.module';
import { XcoreComponent } from './xcore/xcore.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';




@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    XcoreModule
    
    
  ],

  providers: [
   
  ],
  bootstrap: [XcoreComponent],
  declarations: []
 
})
export class AppModule { }
