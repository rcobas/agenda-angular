import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HomeServiceService } from "src/app/services/home-service.service";
import { Person } from "./../../shared/person";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-person",
  templateUrl: "./add-person.component.html",
  styleUrls: ["./add-person.component.css"]
})
export class AddPersonComponent implements OnInit {
  nombre: string;
  apellidos: string;
  edad: number;
  dni: string;
  cumpleanios: string;
  colorFavorito: string;
  sexo: string;
  notas: string;

  constructor(
    private homeService: HomeServiceService,
    private router: Router
  ) {}
  onSubmit() {
    const person = new Person(
      this.nombre,
      this.apellidos,
      this.edad,
      this.dni,
      this.cumpleanios,
      this.colorFavorito,
      this.sexo,
      this.notas
    );

    this.homeService.addPerson(person);
    this.router.navigateByUrl("/person-list");
  }

  ngOnInit() {}
}
