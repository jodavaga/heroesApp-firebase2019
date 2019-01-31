import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesUrl: string = "https://heroesapp-udemy-941bc.firebaseio.com/heroes.json";

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
}
