import { gender } from "./gender";

export abstract class Person{
    protected firstName: string;
    protected lastName: string;
    protected gender: gender;
    protected age: number;

    constructor(firstName: string, lastName: string, age: number, gender: gender){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }
    getFullName(){
        return this.firstName + " " + this.lastName;
    }
    getYear(){
        return this.age;
    }
    getGender(){
        return this.gender;
    }
}