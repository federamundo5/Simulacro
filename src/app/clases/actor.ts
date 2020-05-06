

export class Actor{

    id:number
    Nombre:string;
    apellido:string;
    sexo:string;
    FechaNacimiento:string;
    Foto= 'https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg';

    constructor(id:number,Nombre:string,apellido:string,sexo:string,FechaNacimiento:string,Foto:string){

        this.id=id;
        this.Nombre=Nombre;
        this.apellido=apellido;
        this.sexo = sexo;
        this.FechaNacimiento = FechaNacimiento;
        this.Foto = Foto;
    }
}