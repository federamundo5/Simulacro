import { Component, OnInit } from '@angular/core';
import {Pelicula} from '../../../clases/peliculas'
import {PeliculasService} from '../../../servicios/peliculas.service'
import { FormControl, FormGroup} from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {
  formulario;
  pelicula;

  constructor(private peliculasService: PeliculasService,     private formBuilder: FormBuilder
    )
   { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      Nombre: new FormControl(''),
      tipo: new FormControl(''),
      fechaEstreno: new FormControl(''),
      cantidadPublico: new FormControl(''),
    });
  }
  
  onSubmit(data) {
    // TODO: Use EventEmitter with form value
    console.log(this.formulario.value.tipo);
    this.pelicula =  new Pelicula(51,this.formulario.value.Nombre,this.formulario.value.tipo,this.formulario.value.fechaEstreno,this.formulario.value.cantidadPublico)
    this.peliculasService.agregarPelicula(this.pelicula);
  }


}
