import { Component, OnInit } from '@angular/core';
import {Pelicula} from '../../clases/peliculas'
import {PeliculasService} from '../../servicios/peliculas.service'
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  peliculas: Pelicula[];
  peliculaSeleccionada: Pelicula;
  constructor(private peliculasService: PeliculasService) {
    this.peliculas = this.peliculasService.obtenerPeliculas();

   }

  ngOnInit(): void {
  }

}
