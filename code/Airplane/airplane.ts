import { seat } from "./seat";


export class airplane {
    private airplanId:string;
    private airplanName:string;
    public numberOfseat: number;
    private seats?: seat[];
    
    constructor(airplanId:string, airplanName:string, numberOfseat:number) {
        this.airplanId = airplanId;
        this.airplanName = airplanName;
        this.numberOfseat = numberOfseat;
    }
    getairPlaneId(){
        return this.airplanId;
    }
    getAirplenName(){
        return this.airplanName;
    }
    
}