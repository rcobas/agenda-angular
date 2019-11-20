import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddPersonComponent } from "./components/add-person/add-person.component";
import { PersonListComponent } from "./components/person-list/person-list.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "person-list" },
  { path: "add-person", component: AddPersonComponent },
  { path: "person-list", component: PersonListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
