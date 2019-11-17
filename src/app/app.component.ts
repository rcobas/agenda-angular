import { Component } from '@angular/core';
import { Person } from './shared/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-lista';
  lista:Person[] = [{nombre:'Rosa',
    apellidos:'Cobas',
    edad:35,
    dni:'7777A',
    cumpleanios:'26/11/1984',
    colorFavorito:'Turquesa',
    sexo: 'F',
    notas:''}];
  
}
