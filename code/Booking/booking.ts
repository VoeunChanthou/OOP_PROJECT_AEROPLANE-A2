import { tickettype } from "./tickettype";

export class booking{
    private date: string;
    private seatType: tickettype;
    private price: number;
    private isPay?: boolean;
    
    constructor(date:string, seatType: tickettype){
        this.date = date;
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

