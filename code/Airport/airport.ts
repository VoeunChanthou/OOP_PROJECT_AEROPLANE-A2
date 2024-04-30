import { gate } from "./gate";
import { address } from "../Address/address";
import { airline } from "../Airline/airline";


export class Airport {
    private AirportCode: string;
    private AirportName: string;
    private gates: gate[]=[];
    public address: address;
    public airlines: airline[]=[];

    constructor(AirportCode: string, AirportName: string, address: address) {
        this.AirportCode = AirportCode;
        this.AirportName = AirportName;
        this.address = address;
    }

    addGate(gate: gate) {
        this.gates.push(gate);
    }

    addAirline(airline: airline){
        this.airlines.push(airline);
    }

    getAirlines(name: string){
        let airline: airline[]=[];
        for(let value of this.airlines){
            if(value.getAirlineName().toLocaleLowerCase().includes(name.toLocaleLowerCase())){
                airline.push(value);
            }
        }
        return airline;
    }

}

