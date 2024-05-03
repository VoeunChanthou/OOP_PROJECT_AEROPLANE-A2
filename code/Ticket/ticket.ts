import { flight } from "../flight/flight";
import { gate } from "../Airport/gate";

export class ticket{
    public flight: flight;
    public gate: gate;
    
    constructor(flight: flight, gate: gate){
        this.flight = flight;
        this.gate = gate;
    }

    getGate(){
        return this.flight.getGate();
    }

    getFlightNumber(){
        return this.flight.getflightNumber();
    }

    getDate(){
        return this.flight.getDate();
    }
}