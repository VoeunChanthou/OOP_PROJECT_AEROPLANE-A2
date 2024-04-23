import { gender } from "./gender";

export class Person{
    private firstName: string;
    private lastName: string;
    private gender: gender;
    private age: number;

    constructor(firstName: string, lastName: string, gender: gender, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }
}