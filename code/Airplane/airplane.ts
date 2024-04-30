import { seat } from "./seat";
export class airplane {
    private airplanId:number;
    private airplanName:string;
    private seats: seat[];
    
    constructor(airplanId:number, airplanName:string, gate:number) {
        this.airplanId = airplanId;
        this.airplanName = airplanName;
    }
    getPilot(){
        return this.airplanName;
    }
    getWeight(){
        return this.airplanId;
    }
    getSeat(){
        return this.airplanId;
    }
    getAllpassenger(){
        return this.airplanId;
    }
    getPassengerbyName(){
        return this.airplanName;
    }
    
    
}