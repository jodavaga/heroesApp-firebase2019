import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {
    
    let keys = [];

    for(let k in value){
      keys.push( value[k] )
    }

    return keys;
  }

}
