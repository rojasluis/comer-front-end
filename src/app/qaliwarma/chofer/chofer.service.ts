import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/config.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChoferModel } from './chofer-model';

@Injectable()
export class ChoferService {

  constructor(private configService:ConfigService, private httpClient:HttpClient) { }

  getAll():Observable<ChoferModel[]>{
    let url = this.configService.getUrlSecurityRes("chofer","getall");

    return this.httpClient.get<ChoferModel[]>(url);
  }

}
