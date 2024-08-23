import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TiendaService {
private url : string = 'http://localhost:1020/';
  constructor(private http: HttpClient) {



   
   }
   getTiendas(): Observable<any>{
    return this.http.get<any>(`${this.url}`)

    
  }

}
