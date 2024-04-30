import { date } from "../date/date";
import { tickettype } from "./tickettype";

export class booking{
    public Bookintdate: date;
    private seatType: tickettype;
    private price?: number;
    private isPay?: boolean;
    
    constructor(date:date, seatType: tickettype){
        this.Bookintdate = date;
        this.seatType = seatType;
    }
    cancelBooking(){
        if(this.isPay){
            this.price = 0;
            this.isPay = false;
        }
    }

    payForTicket(price: number){
        this.price = price;
        this.isPay = true;
    }
}

