import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/config.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CrudHttpClientServiceShared {



  constructor(private configService:ConfigService, private httpClient:HttpClient) { }

  getall(controller:string,evento:string):Observable<any[]>{
    let url = this.configService.getUrlSecurityRes(controller,evento);
    //let header = this.configService.getHeaderHttpClientGet();
   
    return this.httpClient.get<any[]>(url);
  }

  edit(id:any,controller:string,evento:string):Observable<any>{

    let url = this.configService.getUrlSecurityRes(controller,evento);
    let header = this.configService.getHeaderHttpClientGet();
    let parametros = new HttpParams().set("id",id.toString());

    return this.httpClient.get<any>(url,{params:parametros,headers:header});
  
  }

  create(model:any,controller:string,evento:string):Observable<any>{
    let url = this.configService.getUrlSecurityRes(controller,evento);
    let header = this.configService.getHeaderHttpClientGet();

    return this.httpClient.post<any>(url,model,{headers:header});

  }
  update(model:any,controller:string,evento:string):Observable<any>{
      
    let url = this.configService.getUrlSecurityRes(controller,evento);
    let header = this.configService.getHeaderHttpClientGet();

    return this.httpClient.put<any>(url,model,{headers:header});
  }

  delete(id:any,controller:string,evento:string):Observable<any>{
    let url = `${this.configService.getUrlSecurityRes(controller,evento)}/${id}`;
    let header = this.configService.getHeaderHttpClientGet();
      
    return this.httpClient.delete<any>(url,{headers:header });

  }

  getPagination(pagenumber,rows,sortdireccion,sortcolumn,filters,controller,evento,paramsExtra):Observable<any>{

  
		let obj = {'pagenumber':pagenumber,'rows':rows,'sortdireccion':sortdireccion,'sortcolumn':sortcolumn,'filters':filters, 'paramsExtra':paramsExtra};
    let objser = this.configService.serialize(obj);

  

      let url = this.configService.getUrlSecurityRes(controller,evento);
      return this.httpClient.post(url, objser,{headers:this.configService.getHeaderHttpClientForm() });

   		//return this.http.post(url,objser,this.configService.getHeadersForm())
      //      .map(res=> res.json());		             


  }    

 

}
