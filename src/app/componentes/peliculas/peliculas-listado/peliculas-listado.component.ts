import { Component, OnInit } from '@angular/core';
import {Pelicula} from '../../../clases/peliculas'
import {PeliculasService} from '../../../servicios/peliculas.service'

@Component({
  selector: 'app-peliculas-listado',
  templateUrl: './peliculas-listado.component.html',
  styleUrls: ['./peliculas-listado.component.css']
})
export class PeliculasListadoComponent implements OnInit {

  peliculas: Pelicula[];
  peliculaSeleccionada: Pelicula;

  constructor(private peliculasService: PeliculasService) { 
    this.peliculas = this.peliculasService.obtenerPeliculas();
  }

  ngOnInit(): void {
  }


  enviarPeliculaSeleccionada( event ){
    this.peliculaSeleccionada = event;
  }
  
  eliminar( id ){
    this.peliculasService.eliminarPelicula(id);
    this.peliculas=this.peliculasService.obtenerPeliculas();
  }
}
