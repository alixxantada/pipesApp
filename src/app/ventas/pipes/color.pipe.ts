import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform (valor:number):string {
    return ( valor )
                ? 'Vuela!!'
                : 'No vuela ni un poco';
  }
}
