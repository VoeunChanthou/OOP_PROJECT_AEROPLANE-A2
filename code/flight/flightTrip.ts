

import { meal } from "./meal";
import { airline } from "../Company/airline";


export class flightTrip {
    
    private Airline: airline;
    private meals: meal[]=[];

    constructor(airline: airline){
        this.Airline = airline;
    }

    addMeals(meal: meal){
        this.meals.push(meal);
    }
    
}