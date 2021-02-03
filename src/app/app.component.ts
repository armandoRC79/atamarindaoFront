import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { PedidosService } from './services/pedidos/pedidos.service';
import { ProductosService } from './services/productos/productos.service';
import { UsuariosService } from './services/usuarios/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pedidoForm!: FormGroup;
  usuarios: any;
  productos: any;
  //contador = 0;
 /*
  pedido = [{
    "usuarioId": 1,
    "numPedido": 0,
    "producto": [
      {
      cantidad: 0,
      precio: 0,
      idProducto: 0
      }
    ]
  }]*/

  constructor(
    public fb: FormBuilder,
    public pedidosService: PedidosService,
    public productosService: ProductosService,
    public usuariosService: UsuariosService
  ) {

  }
  ngOnInit(): void {
    this.pedidoForm = this.fb.group({
      usuarioId: ['1'],
      numberoPedido: ['', Validators.required],
      producto: [{
        cantidad:['', Validators.required],
        precio:['', Validators.required],
        productoId:['', Validators.required],
      }],
    });

    this.productosService.getAllProductos().subscribe(resp => {
      this.productos = resp;
    },

    );




/*
    this.usuariosService.getAllUsuarios().subscribe(resp => {
      this.usuarios = resp;
    },
      error => { console.error(error) }
    );*/
  }

  guardar(): void {

    console.log("hola");
    
 /*   this.usuariosService.saveUsuario(this.usuarioForm.value).subscribe(resp => {
      this.usuarioForm.reset();
      this.usuarios.push(resp);
    },
      error => { console.error(error) }
    )*/
  }

  comprar(producto:any){
   // this.pedido = contador+1;
  }
  
  eliminar(usuario:any) {
    this.usuariosService.deleteUsuario(usuario.id).subscribe(resp => {
      console.log(resp)
      if (resp === true) {
        this.usuarios.pop(usuario)
      }
    })
  }

}
