import { Person } from './person'
export class ApiService {

 agenda: Person[] = [];  
 constructor() {
    //this.persons = [{nombre:}]      
  }
 
  // Add Person
  addPerson(data: Person): any[] {
    //this.persons.push()
    return this.agenda
  }

  getPersons()  {
    return this.agenda
  }

    
}