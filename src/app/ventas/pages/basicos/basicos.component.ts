import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

nombreLower: string = 'alejAndro';
nombreUpper: string = 'ALEJaNDRO';
nombreCompleto: string = 'alEjanDro CaLVo';

fecha: Date = new Date();
}
