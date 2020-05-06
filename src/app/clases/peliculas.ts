
export class Pelicula{

    id :number;
    Nombre :string;
    tipo : string;
    fechaEstreno :string;
    cantidadPublico: number;
    Foto ='https://imagenes.canalrcn.com/lomaslike/avengers-endgame-numero-uno-en-taquillas.jpg';

    

    constructor (id :number, Nombre :string, tipo : string, fechaEstreno :string,cantidadPublico: number, Foto? : string){

        this.id=id;
        this.Nombre=Nombre;
        this.tipo=tipo;
        this.fechaEstreno=fechaEstreno;
        this.cantidadPublico=cantidadPublico;
        this.Foto = Foto;
    }

}



export enum TiposPelis {
    Amor,
    Comedia
}