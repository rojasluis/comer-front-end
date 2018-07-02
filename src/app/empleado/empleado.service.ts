import { Injectable } from '@angular/core';


import { ConfigService } from '../shared/config.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmpleadoService {

  constructor(private configService:ConfigService, private http:HttpClient) { }




  getEmpleadoByDni(dni: string) {
    let url = this.configService.getUrlSecurityRes("empleado", "getallbydni");
    let obj = { 'dni': dni };
    let objser = this.configService.serialize(obj);
    
    return this.http.post(url, objser, {headers:this.configService.getHeaderHttpClientFormPost()})
     
      ;

  }

}
