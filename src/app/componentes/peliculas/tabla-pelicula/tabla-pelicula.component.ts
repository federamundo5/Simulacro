import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Pelicula} from '../../../clases/peliculas'

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  @Input() peliculas; 
  @Output() peliculaSeleccionada = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  verDetalles( pelicula ){
    this.peliculaSeleccionada.emit(pelicula);
  }

}
