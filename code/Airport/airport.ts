import { employee } from "./employee";

export class airport{
    private airportCode: string;
    private airportName: string;

    constructor(airportCode: string, airportName: string){
        this.airportCode = airportCode;
        this.airportName = airportName;
    }
}