import { Injectable } from "@angular/core";
import { Person } from "../shared/person";
import { AddPersonComponent } from "../components/add-person/add-person.component";

@Injectable({
  providedIn: "root"
})
export class HomeServiceService {
  private agenda: Person[];

  constructor() {
    this.agenda = [];
    let persona1 = new Person(
      "Rosa",
      "Cobas",
      35,
      "47653896N",
      "26/11/1984",
      "Turquesa",
      "Mujer",
      ""
    );
    this.agenda.push(persona1);
    let persona2 = new Person(
      "David",
      "Ferrero",
      34,
      "54678678D",
      "12/03/1985",
      "Amarillo",
      "Hombre",
      ""
    );
    this.agenda.push(persona2);
  }

  public getPersonInfo(): Person[] {
    return this.agenda;
  }

  public addPerson(persona: Person) {
    this.agenda.push(persona);
  }

  public deletePerson(index: number) {
    this.agenda.splice(index, 1);
  }
}
