

export enum Color {
  rojo, negro, azul, verde
  // al usar una enumeracion(enum) en este ejemplo el rojo tendria valor 0, el negro 1, azul 2 y verde 3
}

export interface Heroe {
  nombre: string;
  vuela: boolean;
  color: Color;
}
