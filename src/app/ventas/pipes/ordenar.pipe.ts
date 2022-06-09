import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {
  transform( heroes: Heroe[], ordenarPor: string = 'sin valor' ): Heroe[] {

      switch( ordenarPor ){
        case 'nombre':
          // a heroes le damos el valor de heroes ordenados, comparando cada uno de ellos y los reordena
          return heroes.sort( ( a,b ) => ( a.nombre > b.nombre )
          ? 1     // Avanza 1 posicion
          : -1)   // Retrocede 1 posicion

        case 'vuela' :
          return heroes.sort( ( a,b ) => ( a.vuela > b.vuela )
          ? -1     // Avanza 1 posicion
          : 1)   // Retrocede 1 posicion

        case 'color' :
          return heroes.sort( ( a,b ) => ( a.color > b.color )
          ? 1     // Avanza 1 posicion
          : -1)   // Retrocede 1 posicion

        default:
          return heroes;
      }
  }
}
