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
  id: string;

  persona: Person;

  constructor(
    private homeService: HomeServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("i");
    this.homeService.getPersonByPosition(this.id).subscribe(data => {
      this.persona = data;
    });
  }

  onSubmit() {
    this.homeService.updatePerson(this.id, this.persona).subscribe(data => {
      this.router.navigateByUrl("/person-list");
    });
  }
}
