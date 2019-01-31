import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

import { Heroe } from '../interfaces/heroe.interface';
import { ɵKeyEventsPlugin } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesUrl: string = "https://heroesapp-udemy-941bc.firebaseio.com/heroes.json";
  heroeUrl:string = "https://heroesapp-udemy-941bc.firebaseio.com/heroes";

  constructor( private http:Http ) { }

  nuevoHeroe( heroe: Heroe){

    let body = JSON.stringify( heroe );

    let headers = new Headers ({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.heroesUrl, body, { headers } )
    .pipe( map( resp => {
      return resp.json()
    }));     
  }

  actualizarHeroe( heroe:Heroe, key:string ){
     let body = JSON.stringify( heroe );

     let url = `${ this.heroeUrl }/${ key }.json`

     return this.http.put( url, body )
                .pipe( map( resp => {
                    return resp.json()
                  }));
  }

}
