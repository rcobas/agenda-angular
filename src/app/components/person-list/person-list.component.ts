import { Component, OnInit } from "@angular/core";
import { Person } from "./../../shared/person";
import { HomeServiceService } from "src/app/services/home-service.service";

@Component({
  selector: "app-person-list",
  templateUrl: "./person-list.component.html",
  styleUrls: ["./person-list.component.css"]
})
export class PersonListComponent implements OnInit {
  agenda: Person[] = [];
  dataSource: Person[];

  displayedColumns: string[] = ["nombre", "apellidos", "dni", "acciones"];

  constructor(private homeService: HomeServiceService) {}

  public getPerson() {
    this.homeService.getPersonInfo().subscribe(data => {
      this.agenda = data;
      this.dataSource = [...this.agenda];
    });
  }

  ngOnInit() {
    this.getPerson();
  }

  public deletePerson(i: string) {
    this.homeService.deletePerson(i).subscribe(data => {
      this.getPerson();
    });
  }
  public editPerson(id: string) {}
}
