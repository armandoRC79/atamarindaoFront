import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private API_SERVER = "https://atamarindao.herokuapp.com/productos/"

  constructor(  
    private httpClient: HttpClient
  ) { }

  public getAllProductos(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public getProductoById(id:any): Observable<any>{
    return this.httpClient.get(this.API_SERVER + id);
  }

}
