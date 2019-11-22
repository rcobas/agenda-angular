export class Person {
  nombre: string;
  apellidos: string;
  edad: number;
  dni: string;
  cumpleanios: Date;
  colorFavorito: string;
  sexo: string;
  notas: string;

  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    dni: string,
    cumpleanios: Date,
    colorFavorito: string,
    sexo: string,
    notas: string
  ) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.dni = dni;
    this.cumpleanios = cumpleanios;
    this.colorFavorito = colorFavorito;
    this.sexo = sexo;
    this.notas = notas;
  }
}
