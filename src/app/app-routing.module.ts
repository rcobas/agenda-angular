import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddPersonComponent} from './components/add-person/add-person.component';
import {PersonListComponent} from './components/person-list/person-list.component';


const routes: Routes = [
  {path:'add-person', component:AddPersonComponent},
  {path: 'person-list', component:PersonListComponent, data: ['aa','bb']}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
