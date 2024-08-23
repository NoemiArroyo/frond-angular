import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Router , ActivatedRoute} from '@angular/router';
import{ FormBuilder, Validators,ReactiveFormsModule, FormsModule } from '@angular/forms'
import{ CommonModule } from '@angular/common'
import {TiendaService} from '../tienda.service';



@Component({
  selector: 'app-create-tienda',
  standalone: true,
  imports: [ CommonModule,ReactiveFormsModule, FormsModule],
  templateUrl: './create-tienda.component.html',
  styleUrl: './create-tienda.component.css'
})
export default class CreateTiendaComponent implements OnInit{
form!:FormGroup;

  constructor(private router:Router, private _formBuilder: FormBuilder,private tiendaservice:TiendaService){
    this.form= this._formBuilder.group({
      tipoTienda:[null,[Validators.required]],
      nit:[null,[Validators.required]],

    });
  }

  ngOnInit(): void {
    
  }
  Send(){
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
      
    }else{
     let TiendaSend: any = this.form.getRawValue();
     this.tiendaservice.actualizartienda(TiendaSend).subscribe((resp)=>{
      if (resp.code==200) {
        alert("Creada con exito");
        this.router.navigate(['dashboard/lista-tienda']);
        
      }else{
        alert("Error al crear");
      }
     })

    }
  }


  cancelar(){
    this.router.navigate(['dashboard/lista-tienda'])
  }

}
