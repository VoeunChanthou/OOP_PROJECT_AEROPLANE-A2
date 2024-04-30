import { jobCategories } from "./jobCategories";
import { Person } from "../Person/person";
import { gender } from "../Person/gender";

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
}
