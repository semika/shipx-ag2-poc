import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    console.log("api employee");
    
    let employees = [
      { id: 1, name: 'Mr. Nice', empType : '2', address : 'Chuck Overstreet11'},
      { id: 2, name: 'Narco', empType : '1', address : 'Chuck Overstreet12'},
      { id: 3, name: 'Bombasto', empType : '1', address : 'Chuck Overstreet13' },
      { id: 4, name: 'Celeritas' , empType : '1', address : 'Chuck Overstreet14'},
      { id: 5, name: 'Magneta' , empType : '1', address : 'Chuck Overstreet15'},
      { id: 6, name: 'RubberMan' , empType : '1', address : 'Chuck Overstreet16'},
      { id: 7, name: 'Dynama' , empType : '1', address : 'Chuck Overstreet17'},
      { id: 8, name: 'Dr IQ' , empType : '1', address : 'Chuck Overstreet18'},
      { id: 9, name: 'Magma' , empType : '1', address : 'Chuck Overstreet19'},
      { id: 10, name: 'Tornado1' , empType : '1', address : 'Chuck Overstreet20'}
    ];

    let empTypes = [
      {key: 'MG', value : 'Manager'},
      {key: 'EG', value : 'Engineer'}
    ]

    let studentList = [
        {id: 1, name : "Jake", gender : 'M'},
        {id: 2, name : "Brent", gender : 'M'},
        {id: 3, name : "Jim",  gender : 'M'},
        {id: 4, name : "Seth", gender : 'M'},
        {id: 5, name : "Kelly", gender : 'F'},
        {id: 6, name : "Viki", gender : 'F'}
    ];

    return {employees, empTypes, studentList};
  }
}
