import { jobCategories } from "./jobCategories";
import { Person } from "../Booking/person";
import { gender } from "../Booking/gender";

export class employees extends Person {
    static changeSalary(employee: employees, salary: number) {
        throw new Error("Method not implemented.");
    }
    getEmployeeId() {
        throw new Error("Method not implemented.");
    }
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


let Chanthou = new employees('001',jobCategories.manager, "chanthou", "voeun", 18, gender.male, 2000);
console.log(Chanthou);