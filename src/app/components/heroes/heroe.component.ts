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

  // Heroe Local
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
  // Obtengo parametros por URL 
  this.activatedRoute.params.subscribe( params => {
    console.log(params)
    if (params.id == "nuevo" ){
      this.nuevo = true;
      
    }else {
      this.nuevo = false;
      this.id = params.id

      // Obtengo el heroe con el ID del parametro de URL y se lo asigno al heroe local
      this._heroesService.getHeroe( this.id )
          .subscribe( heroe => this.heroe = heroe) 
    }
  })

  }

  ngOnInit() {
  }

  guardar(){

    // Si el parametro de URL es=nuevo entonces esta agregando un heroe nuevo.
    if(this.nuevo){
      this._heroesService.nuevoHeroe( this.heroe )
          .subscribe( data => {
            this.router.navigate(['/heroe', data.name ])
  
          }, error => console.log(error));

    // Si el parametro es diferente, es porq esta actualizando un heroe existente
    }else {
      this._heroesService.actualizarHeroe( this.heroe, this.id )
            .subscribe( heroe => {
              this.heroe = heroe.json()
            })
    }

  }

}
