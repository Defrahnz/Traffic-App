export class Usuario{
    _id?:number;
    numeroTelefono:number;
    localizacion:String;


    constructor(numero:number, localizacion:String){
        this.numeroTelefono=numero;
        this.localizacion=localizacion;

    }
}