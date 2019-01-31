import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesUrl: string = "https://heroesapp-udemy-941bc.firebaseio.com/heroes.json";
  heroeUrl:string = "https://heroesapp-udemy-941bc.firebaseio.com/heroes";

  constructor( private http:Http ) { }


  // Agrego un unevo heroe a la base de datos, pasandole el Heroe en el body
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

  // Se actualiza la info del heroe especifico, con el mismo key$, ID
  actualizarHeroe( heroe:Heroe, key:string ){
     let body = JSON.stringify( heroe );

     let url = `${ this.heroeUrl }/${ key }.json`

     return this.http.put( url, body )
                .pipe( map( resp => {
                    return resp.json()
                  }));
  }

  // Obtengo solo un dato, deacuerdo al ID, Key$ asignado por firebase
  getHeroe( id:string ){
    let url = `${ this.heroeUrl }/${ id }.json`

    return this.http.get( url )
          .pipe( map( resp => {
              console.log(resp.json())
              return resp.json()
          }));
  }

  // Obtengo todos los datos de la base de datos
  getHeroes(){

    return this.http.get( this.heroesUrl )
            .pipe( map( resp => {
                return resp.json()
            }));
  }

}
