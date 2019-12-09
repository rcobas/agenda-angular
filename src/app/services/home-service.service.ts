import { Injectable } from "@angular/core";
import { Person } from "../shared/person";
import { AddPersonComponent } from "../components/add-person/add-person.component";
import { catchError } from "rxjs/operators";

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HomeServiceService {
  path: string = "http://localhost:3000/personas";

  constructor(private http: HttpClient) {}

  public getPersonInfo() {
    console.log(this.http.get(this.path));
    return this.http.get(this.path);
  }

  public addPerson(persona: Person) {
    return this.http.post(this.path, persona).pipe(catchError(this.errorMgmt));
  }

  public deletePerson(id: string) {
    return this.http
      .delete(this.path + "/" + id)
      .pipe(catchError(this.errorMgmt));
  }

  public updatePerson(id: string, persona: Person) {
    return this.http
      .put(this.path + "/" + id, persona)
      .pipe(catchError(this.errorMgmt));
  }

  //public getPersonByPosition(index: number): Person {}
  public getPersonByPosition(id: string) {
    return this.http.get(this.path + "/" + id).pipe(catchError(this.errorMgmt));
  }

  private errorMgmt(error: HttpErrorResponse) {
    return throwError("Error");
  }
}
