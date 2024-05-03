import { meal } from "./meal";
import { airline } from "../Airline/airline";
import { employees } from "../Employee/employee";


export class flightTrip {
    private Airline: airline;
    private meals: meal[]=[];
    private pilots?: employees[]=[];

    constructor(airline: airline){
        this.Airline = airline;
    }
 
    addMeals(meal: meal){
        this.meals.push(meal);
    }

    addPilot(pilot: employees){
        this.pilots?.push(pilot);
    }

    getNumberOfmeal(meal: meal){
        let numberOfMeals: number=0;
        for(let value of this.meals){
            if(value === meal){
                numberOfMeals ++;
            }
        }
        return numberOfMeals;
    }
    
}