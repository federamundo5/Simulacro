import { Component, OnInit } from '@angular/core';
import {Actor} from '../../../clases/actor'
import {ActorServiceService} from '../../../servicios/actor-service.service'
@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})


export class ActorListadoComponent implements OnInit {

  actores: Actor[];
  actorSeleccionado: Actor;

  constructor(private actorService: ActorServiceService) { 
    this.actores = this.actorService.obtenerActores();
  }

  ngOnInit(): void {
  }

}
