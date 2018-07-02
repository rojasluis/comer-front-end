import { Response, Http, Headers, RequestOptions, BaseRequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { ConfigService } from '../../shared/config.service';

@Injectable()
export class MenuService {

  constructor( 
      private configService:ConfigService,
      private http:Http)
   { }


  getAll(){

		  //let url = this.configService.getUrlSecurityRes("menu","getall");
   		//return this.http.get(url,this.configService.getHeadersJson())
           
  }



}
