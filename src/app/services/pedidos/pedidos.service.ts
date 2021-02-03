import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private API_SERVER = "https://atamarindao.herokuapp.com/pedidos/"
  constructor(
    private httpClient: HttpClient
  ) { }

  public savePedido(pedido:any){
    return this.httpClient.post(this.API_SERVER,pedido);
  }
}
