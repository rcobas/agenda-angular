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
      new Date("11/26/1984"),
      "Turquesa",
      "mujer",
      ""
    );
    this.agenda.push(persona1);
    let persona2 = new Person(
      "David",
      "Ferrero",
      34,
      "54678678D",
      new Date("03/12/1985"),
      "Amarillo",
      "hombre",
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

  public updatePerson(index: number, persona: Person) {
    this.agenda[index] = persona;
  }

  public getPersonByPosition(index: number): Person {
    return Object.assign({}, this.agenda[index]);
  }
}
