import { Injectable } from '@angular/core';
import { Pelicula, TiposPelis} from '../clases/peliculas'
@Injectable({
  providedIn: 'root'
})


export class PeliculasService {


  peliculas: Pelicula[];

  constructor() { 
    this.peliculas = [
      new Pelicula(1,'Pelicula1',"Amor",'26/04/1995',350,'https://sporting.vteximg.com.br/arquivos/ids/189713-1500-1500/1.jpg?v=637000282345400000'),
      new Pelicula(2,'Pelicula2',"Comedia",'27/04/2000',250,'https://previews.123rf.com/images/koosen/koosen1508/koosen150800027/43644482-botella-de-pl%C3%A1stico-vac%C3%ADa-aisladas-sobre-fondo-blanco.jpg'),
      new Pelicula(3,'Pelicula3',"Drama",'28/04/2001',1000,'https://previews.123rf.com/images/frender/frender1610/frender161000177/63718459-en-blanco-caja-de-cart%C3%B3n-3d-aislado-en-el-fondo-blanco.jpg'),
      new Pelicula(4,'Pelicula4',"Drama",'29/04/2010',222,'https://i.pinimg.com/originals/5d/7e/80/5d7e8095de543443153a701d2926710f.jpg'),
      new Pelicula(5,'Pelicula4',"Comedia",'29/04/2010',222,'https://images-na.ssl-images-amazon.com/images/I/81XG3YOSf5L._AC_UY395_.jpg'),
      new Pelicula(6,'Pelicula4',"Drama",'29/04/2010',222,'https://conceptodefinicion.de/wp-content/uploads/2013/08/objeto.jpg'),
    ]

    localStorage.setItem('peliculas',JSON.stringify(this.peliculas));

  }

  agregarPelicula(pelicula: Pelicula){ 
    console.log(pelicula);
   var localStorageactual:any = new Array<any>();
   if(localStorage.getItem("peliculas")!=null){
    localStorageactual = <Array<any>> JSON.parse(localStorage.getItem("peliculas"));              
  }

  localStorage.removeItem("peliculas");
  localStorageactual.push(pelicula);
  console.log(localStorageactual);
  localStorage.setItem("peliculas",JSON.stringify(localStorageactual));
  }

  obtenerPeliculas(){
    
    return JSON.parse(localStorage.getItem('peliculas'));
  }

  eliminarPelicula( id ){
    let idEliminar;
    for (let index = 0; index < this.peliculas.length; index++) {
      if( id == this.peliculas[index].id ){
        idEliminar = index;
      }
    }
    this.peliculas.splice(idEliminar,1);
    localStorage.setItem('peliculas',JSON.stringify(this.peliculas));
  }

}
