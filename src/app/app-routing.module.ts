import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddPersonComponent } from "./components/add-person/add-person.component";
import { PersonListComponent } from "./components/person-list/person-list.component";
import { EditPersonComponent } from "./components/edit-person/edit-person.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "person-list" },
  { path: "edit-person/:i", component: EditPersonComponent },
  { path: "add-person", component: AddPersonComponent },
  { path: "person-list", component: PersonListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
