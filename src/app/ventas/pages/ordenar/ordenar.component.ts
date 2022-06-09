import { Component, OnInit } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = true;
  ordenarPorCriterio: string = 'sin valor';

  heroes      : Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Ironman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Aquaman',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  // De esta forma cambiamos el valor del boolean cuando llama a la funcion cambiar
  cambiar() {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden( valor:string ){
      this.ordenarPorCriterio = valor;
  }
}
