import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/config.service';
import { MonedaModel } from './moneda-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MonedaService {

  constructor(private configService:ConfigService, private httpClient : HttpClient) { }


  getall():Observable<MonedaModel[]> {
    let url= this.configService.getUrlSecurityRes("moneda","getall");
    return this.httpClient.get <MonedaModel[]> (url);
  }

}
