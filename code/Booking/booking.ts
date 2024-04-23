import { tickettype } from "./tickettype"

export class booking{
    private ticketType:tickettype;
    private ticketPrice:number;
    private date: string;
    
    constructor(ticketType:tickettype, ticketPrice:number, date:string){
        this.ticketType = ticketType;
        this.ticketPrice = ticketPrice;
        this.date = date;
    }
}