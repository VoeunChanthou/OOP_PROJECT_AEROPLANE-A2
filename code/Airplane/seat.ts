import { passenger } from "../Passengers/passenger";
export class seat{
    private seatId:number;
    constructor(seatId:number){
        this.seatId = seatId;
    }
    getPassenger(seatId: number):passenger{
        return this.getPassenger(this.seatId);
    }
}