import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BienvenidoComponent} from '../app/componentes/bienvenido/bienvenido.component'
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/peliculas/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor/actor-listado/actor-listado.component';
import { PeliculasListadoComponent } from './componentes/peliculas/peliculas-listado/peliculas-listado.component';


const routes: Routes = [

  {path: 'Bienvenido', component: BienvenidoComponent },
  {path: 'Busqueda', component: BusquedaComponent },
  {path: 'Peliculas/alta', component: PeliculaAltaComponent },
  {path: 'Actor/alta', component: ActorAltaComponent },
  {path: 'Actor/listado', component: ActorListadoComponent },
  {path: 'Peliculas/listado', component: PeliculasListadoComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'Bienvenido'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
