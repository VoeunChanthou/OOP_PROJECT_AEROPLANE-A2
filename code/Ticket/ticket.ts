import { flight } from "../flight/flight";

export class ticket{
    private flight: flight;
    
    constructor(flight: flight){
        this.flight = flight;
    }
}