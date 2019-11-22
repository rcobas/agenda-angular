import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./modules/angular-material/angular-material.module";
import { AddPersonComponent } from "./components/add-person/add-person.component";
import { PersonListComponent } from "./components/person-list/person-list.component";
import { HomeServiceService } from "./services/home-service.service";
import { EditPersonComponent } from './components/edit-person/edit-person.component';

@NgModule({
  declarations: [AppComponent, AddPersonComponent, PersonListComponent, EditPersonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  providers: [HomeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
