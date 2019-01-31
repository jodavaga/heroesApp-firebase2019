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

  editar( heroe:string ){
    console.log( heroe )
  }

}
