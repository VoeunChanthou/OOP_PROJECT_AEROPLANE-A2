import {flight} from "../flight/flight";

export class gate {
    private gateNumber: string;
    private flights: flight[]=[];

    constructor(gate: string) {
        this.gateNumber = gate;
    }

    addFlight(flight: flight){
        this.flights.push(flight);
    }

    getGateNumber(){
        return this.gateNumber;
    }
}