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

}


