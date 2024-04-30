import { flight } from "../code/flight/flight";
export class ticket{
    private flight: flight[]=[];
    
    addFight(flight: flight){
        this.flight.push(flight);
    }

}