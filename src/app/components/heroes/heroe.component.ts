import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Heroe } from '../../interfaces/heroe.interface';

import { HeroesService } from "../../services/heroes.service";


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  }

  nuevo: boolean = false;
  id:string = "";

  constructor( private _heroesService:HeroesService,
               private router:Router,
               private activatedRoute:ActivatedRoute
              ) { 
  
  this.activatedRoute.params.subscribe( params => {
    console.log(params)
    if (params.id == "nuevo" ){
      this.nuevo = true;
      
    }else {
      this.nuevo = false;
      this.id = params.id
    }
  })

  }

  ngOnInit() {
  }

  guardar(){

    if(this.nuevo){
      this._heroesService.nuevoHeroe( this.heroe )
          .subscribe( data => {
            console.log( data )
            this.router.navigate(['/heroe', data.name ])
  
          }, error => console.log(error));

    }else {
      this._heroesService.actualizarHeroe( this.heroe, this.id )
            .subscribe( heroe => {
              console.log(heroe)
            })
    }

  }

}
