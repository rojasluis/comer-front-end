import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/config.service';
import { HttpClient } from '@angular/common/http';
import { TransportistaModel } from './transportista-model';
import { Observable } from 'rxjs';

@Injectable()
export class TransportistaService {

  constructor( private configService:ConfigService, private httpClient:HttpClient) { }

  getall():Observable<TransportistaModel[]>{
    let url = this.configService.getUrlSecurityRes("transportista","getall");
    return this.httpClient.get<TransportistaModel[]>(url);
  }

}
