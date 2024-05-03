import { jobCategories } from "./jobCategories";
import { Person } from "../Person/person";
import { gender } from "../Person/gender";
import { flightTrip } from "../flight/flightTrip";

export class employees extends Person {
    private EmployeeId: string;
    private position: jobCategories;
    private salary: number;
    private flights: flightTrip[]=[];

    constructor(employeeId: string, position: jobCategories, firstName: string, lastName: string, age: number, gender: gender, salary: number){
        super(firstName, lastName, age, gender);
        this.EmployeeId = employeeId;
        this.position = position;
        this.salary = salary;
    }

    changePosition(position: jobCategories){
        this.position = position;
    }


    getAge(){
        return this.age;
       
    }

    getPosition(){
        return this.position;
    }

    fullName(){
        return this.firstName + " " + this.lastName;
    }

    getSalary(){
        return this.salary;
    }

    addFlight(flight: flightTrip){
        this.flights?.push(flight);
    }

    getFlights(pilot: employees){
        if(pilot.position === jobCategories.pilot){
            return this.flights;
        }
    }


}
