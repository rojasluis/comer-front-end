import { Injectable } from '@angular/core';
import { ConfigService } from '../shared/config.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, switchMap, tap, mergeMap, map } from 'rxjs/operators';

interface datos {
  token:string,
  msg:string,
  anno:number,
  numeroEntrega:number

}

@Injectable()
export class LoginService {

  constructor(     
    private configService:ConfigService,
    private httpCliente:HttpClient
    ) { }

   

  sendCredentials(model)  {
    let tokenUrl= this.configService.getUrlBasic("usuario","login");
    
    //let headers1 = new Headers({'Content-type': 'application/json'});
    //headers1.append("Access-Control-Allow-Origin", "*");
    //headers1.append("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
    let repuesta;
   
    let header = this.configService.getHeaderHttpClientGet();
 
    let obj = JSON.stringify(model);
    
    let data;
    return this.httpCliente.post(tokenUrl,obj ,{headers:this.configService.getHeaderHttpClientFormPostTypeJson() })
    
    /* .pipe(
      map( res=>{
        data = res;
        return true;
      } ),
      tap(_ => console.log('found heroes matching' )),
      
      catchError(this.handleError('Error',[]))
    ) */
    ;
   

    
  
       

  }    

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`{operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
