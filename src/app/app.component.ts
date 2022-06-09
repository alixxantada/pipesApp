import { Component, OnInit } from '@angular/core';
// Con este import, añadiendolo al constructor e iniciandolo en el init, conseguimos hacerel efecto splash a la hora de intentar ocultar el "pipe no tan comun"
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  nombre: string = 'AleJandro calVo';
  valor: number = 5000;
  obj = {
    nombre : 'Fernando'
  }

  constructor(private primengConfig: PrimeNGConfig){}


  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  mostrarNombre () {
    console.log (this.nombre);
    console.log (this.valor);
    console.log (this.obj);
  }
}
