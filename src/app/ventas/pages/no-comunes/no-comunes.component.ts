import { Component } from '@angular/core';
import { interval } from 'rxjs';


interface Persona {
  nombre: string;
  edad: number;
  direccion: string;
}

// Ojo al decorador
@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  // i18nSelect
nombre:string = 'Susana';
genero:string = 'femenino';

invitacionObj = {
  'masculino': 'invitarlo',
  'femenino': 'invitarla',
}

//i18nPlural
clientes: string[] = ['Maria','Pedro','Jose','Luis','Bruno'];

clientesObj = {
  '=0': 'no tenemos ningún cliente esperando.',
  '=1': 'tenemos 1 cliente esperando.',
  // con el # nos cogeria el valor de clientes.length
  'other': 'tenemos # clientes esperando.'
}

cambiarCliente(){
this.nombre = 'Alejandro';
this.genero = 'masculino';
}


borrarCliente(){
  // el .pop borra el ultimo elemento del array
  this.clientes.pop();
}

// KeyValuePipe
persona: Persona = {
  nombre: 'alejandro',
  edad: 30,
  direccion: 'Chantada, Lugo'
}


heroes = [
  {
    nombre: 'Spiderman',
    vuela: true
  },
  {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Aquaman',
    vuela: false
  }
]


// Async pipe
// el 5000 es el delay
miObservable = interval(5000);

valorPromesa = new Promise ( (resolve, reject) => {

  setTimeout(()=>{
    resolve( 'tenemos data de la promesa ' )
    // el 3500 es el delay
  }, 3500);

});

}
