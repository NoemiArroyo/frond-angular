import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Router , ActivatedRoute} from '@angular/router';
import{ FormBuilder, Validators,ReactiveFormsModule, FormsModule } from '@angular/forms'
import{ CommonModule } from '@angular/common'
import {TiendaService} from '../tienda.service';

@Component({
  selector: 'app-actualizar-tienda',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, FormsModule],
  templateUrl: './actualizar-tienda.component.html',
  styleUrl: './actualizar-tienda.component.css'
})
export default class ActualizarTiendaComponent implements OnInit{
  idtienda: string= "";
  form!: FormGroup;

constructor (private tiendaservice:TiendaService, private router:Router, private route:ActivatedRoute, private _formBuilder: FormBuilder) {
  this.form= this._formBuilder.group({
    id:[null,[Validators.required]],
    tipoTienda:[null,[Validators.required]],
    nit:[null,[Validators.required]],

  });
}

  ngOnInit(): void {
    this.idtienda= this.route.snapshot.paramMap.get("id")!;
    console.log(this.idtienda);
    this.TiendaById();
    
  }
  TiendaById(): void{
    let payloaad={
      id: this.idtienda
    }
    this.tiendaservice.Idtienda(payloaad).subscribe(data=>{
      console.log(data);
      
    this.form.patchValue({
    tipoTienda: data.data.tipoTienda,
     id:data.data.id,     
     nit:data.data.nit

    });
    });

  

}
cancelar(){
  this.router.navigate(['dashboard/lista-tienda'])
}

Send(){
  
   let TiendaSend: any = this.form.getRawValue();
   this.tiendaservice.actualizartienda(TiendaSend).subscribe((resp)=>{
    if (resp.code==200) {
      alert("Actualizada con exito");
      this.router.navigate(['dashboard/lista-tienda']);
      
    }else{
      alert("Error al Actualizar");
    }
   })

  
}
}
