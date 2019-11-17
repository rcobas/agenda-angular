import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'



@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
     
    nombre:string;
    apellidos:string;
    edad:number;
    dni:string;
    cumpleanios:string;
    colorFavorito:string;
    sexo:string;
    notas:string;

  constructor() { 
    
  }
  onSubmit(){
    alert('enviado')
    
    console.log('Formulario', this.nombre, this.apellidos, this.cumpleanios)
  }
  ngOnInit() {
  }

}
