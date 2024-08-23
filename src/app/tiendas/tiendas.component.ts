import { Component, OnInit } from '@angular/core';
import {TiendaService} from '../tienda.service';
import {Router } from '@angular/router';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-tiendas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tiendas.component.html',
  styleUrl: './tiendas.component.css'
})
export default class TiendasComponent implements OnInit {

    constructor (private tiendaservice:TiendaService, private router:Router) {}
       tiendas: any []= [];
    ngOnInit(): void {
      this.getTiendas();
    }
    
    getTiendas() {
      this.tiendaservice.getTiendas().subscribe ((data)=>{
        this.tiendas= data.data;
        console.log(this.tiendas);
        
      }) 
    
    
    }

    deletetienda (Idtienda: any) {
      let payloaad= {
        "id": Idtienda
      }
      this.tiendaservice.DeleteTienda(payloaad).subscribe ((data)=>{
if (data.code == 200) {
  this.getTiendas();
  alert("se elimino bien esa madre");
}else{
  alert("revisa esa madre");
}

      }) 

      }
      actualizartienda (Idtienda: any) {
        this.router.navigate(['dashboard/edit-tienda', Idtienda])
        
       
 
  
        
  
        }
      crear(){
        this.router.navigate(['dashboard/create-tienda'])
      }
      

    }


