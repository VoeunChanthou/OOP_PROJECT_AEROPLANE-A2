import { seat } from "./seat";
export class airplan {
    private airplanId:number;
    private airplanName:string;
    private gate: number;
    private seats: seat[];
    
    constructor(airplanId:number, airplanName:string, gate:number) {
        this.airplanId = airplanId;
        this.airplanName = airplanName;
        this.gate = gate;
        

    }
    getPilot(){
        return this.airplanName;
    }
    getChef(){
        return this.gate;
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