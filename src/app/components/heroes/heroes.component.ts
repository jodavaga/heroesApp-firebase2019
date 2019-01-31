import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService: HeroesService,
               private router:Router ) { }

  ngOnInit() {

    this._heroesService.getHeroes()
      .subscribe( data => {
        this.heroes = data
      
    })
  }

  eliminar( key:string ){

    this._heroesService.eliminarHeroe( key )
        .subscribe( resp => {

          // no es necesario volver a llamar al servicio que carga heroes. se elimina el objeto con la KEY
          // y se le dice al PIPE que no se puro para que escuche los cambios
          if( resp ){
            console.error( resp );
          }else {
            delete this.heroes[ key ]
          }
        })
  }

}
