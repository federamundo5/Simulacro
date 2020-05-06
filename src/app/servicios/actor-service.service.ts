import { Injectable } from '@angular/core';
import { Actor} from '../clases/actor'

@Injectable({
  providedIn: 'root'
})
export class ActorServiceService {

  actores : Actor[]
  constructor( ) {
    this.actores=[
      new Actor(1,'Actor1','Apellido1','Femenino','26/04/1995','https://www.filo.news/__export/1576617859259/sites/claro/img/2019/12/17/0_1.jpeg_1359985867.jpeg'),
      new Actor(2,'Actor2','Apellido2','Femenino','26/04/2000','https://d8bwfgv5erevs.cloudfront.net/cdn/13/images/curso-online-perfil-psicologico-de-una-persona_l_primaria_1_1524733601.jpg'),
      new Actor(3,'Actor3','Apellido3','Masculino','26/04/2100','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8BZU1bOF9tf5snLJJEWtKeGGjEm7tRBPWahXH3lWwEi_VbBMk&usqp=CAU'),
      new Actor(4,'Actor4','Apellido4','Masculino','26/04/1800','https://assets.show.news/__export/1580263296104/sites/debate/img/2020/01/28/1_3_crop1580263224131.jpg_1694538543.jpg'),
    ]
    localStorage.setItem('actores',JSON.stringify(this.actores));

  }


  obtenerActores(){
    return  this.actores;
  }

}
