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
    return this.http.get<any>(`${this.url}tienda/selectAll`).pipe(res=> res);   
  }

   DeleteTienda (data: any): Observable<any> {
   return this.http.post<any>(`${this.url}tienda/delete`, data).pipe (res=> res);

  }
  actualizartienda (data: any): Observable<any> {
    return this.http.post<any>(`${this.url}tienda/saveOrUpdate`, data).pipe (res=> res);
 
   }
  
   Idtienda  (data: any): Observable<any> {
    return this.http.post<any>(`${this.url}tienda/selectById`, data).pipe (res=> res);
   }

   

}
