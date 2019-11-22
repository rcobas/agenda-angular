import { Component, OnInit } from "@angular/core";

import { HomeServiceService } from "src/app/services/home-service.service";
import { Person } from "./../../shared/person";
import { Router } from "@angular/router";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-edit-person",
  templateUrl: "./edit-person.component.html",
  styleUrls: ["./edit-person.component.css"]
})
export class EditPersonComponent implements OnInit {
  index: number;

  persona: Person;

  constructor(
    private homeService: HomeServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.index = parseInt(this.route.snapshot.paramMap.get("i"));
    this.persona = this.homeService.getPersonByPosition(this.index);
  }

  onSubmit() {
    this.homeService.updatePerson(this.index, this.persona);
    this.router.navigateByUrl("/person-list");
  }
}
