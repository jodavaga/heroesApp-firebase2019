import { Component, OnInit } from '@angular/core';

import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];

  constructor( private _heroesService: HeroesService ) { }

  ngOnInit() {

    this._heroesService.getHeroes()
      .subscribe( data => {
        this.heroes = data
        

    })
  }

}
