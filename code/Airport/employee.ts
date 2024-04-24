import { jobCategories } from "./jobCategories";
import { Person } from "../Booking/person";
import { gender } from "../Booking/gender";

export class employees extends Person {
    private EmployeeId: string;
    private position: jobCategories;
    private salary: number;

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
        //todo//
    }

    getPosition(){
        //todo//
    }

    fullName(){
        //todo//
    }
}


let Chanthou = new employees('001',jobCategories.manager, "chanthou", "voeun", 18, gender.male, 2000);
console.log(Chanthou);