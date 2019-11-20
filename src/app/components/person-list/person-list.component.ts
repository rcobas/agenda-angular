import { Component, OnInit } from "@angular/core";
import { Person } from "./../../shared/person";
import { HomeServiceService } from "src/app/services/home-service.service";

@Component({
  selector: "app-person-list",
  templateUrl: "./person-list.component.html",
  styleUrls: ["./person-list.component.css"]
})
export class PersonListComponent implements OnInit {
  constructor(private homeService: HomeServiceService) {}

  public getPerson() {
    return this.homeService.getPersonInfo();
  }

  ngOnInit() {}
}
