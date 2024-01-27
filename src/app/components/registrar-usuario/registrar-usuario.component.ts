import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { puntosCardinales } from 'src/app/models/puntosCardinales.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
  providers:[DataService]
})
export class RegistrarUsuarioComponent {
  public SelectedCP:puntosCardinales={idCardinal:0,nombre:'Seleccione una Ubicación'};
  public puntos: puntosCardinales[];
  usuarioForm:FormGroup; 
  constructor(private fb:FormBuilder,private toastr: ToastrService, private _usuarioService:UsuarioService, private dataSvc:DataService){
    this.usuarioForm=this.fb.group({
    numero:[''],
    localizacion:['']
})
  }
  ngOnInit():void{
    this.obtenerUsuarios();
    this.puntos=this.dataSvc.getPuntos();
  }

  agregarUsuario(){
    console.log(this.usuarioForm);

    const user: Usuario={
      numeroTelefono:this.usuarioForm.get('numero')?.value,
      localizacion:this.usuarioForm.get('localizacion')?.value
    }
    this._usuarioService.guardarUsuario(user).subscribe(data=>{
      console.log(user);
      this.toastr.success('Usuario Agregado Exitosamente', 'Exito!');
    },error=>{
      console.log(error);
      this.usuarioForm.reset();
    });
  }
  obtenerUsuarios(){
    this._usuarioService.getUsuarios().subscribe(data=>{
      console.log(data);
      
    },error=>{
      console.log(error);
    });
  }
  eliminarUsuario(id:any){
    this._usuarioService.eliminarUsuario(id).subscribe(data =>{

    },error=>{
      console.log(error);
    });
  }

}
