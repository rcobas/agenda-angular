import { Component, OnInit } from '@angular/core';
import { Person} from './../../shared/person';
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: any[] = []
  constructor() { }

  ngOnInit() {
    
  }

}
