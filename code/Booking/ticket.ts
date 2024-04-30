import { flight } from "../Airport/flight";
export class ticket{
    private flight: flight[]=[];
    
    addFight(flight: flight){
        this.flight.push(flight);
    }

}