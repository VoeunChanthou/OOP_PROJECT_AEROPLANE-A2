import { date } from "../date/date";
import { tickettype } from "./tickettype";
import { passenger } from "../passenger/passenger";
import { trip } from "../trip/trip";
import { ticket } from "../Ticket/ticket";

export class booking{
    public bookReference: string;
    public Bookintdate: date;
    private seatType: tickettype;
    private price?: number;
    private isPay?: boolean;
    private passenger: passenger;
    public Trip?: trip;
    
    constructor(bookingReference: string ,date:date, seatType: tickettype, passenger: passenger){
        this.bookReference = bookingReference;
        this.Bookintdate = date;
        this.seatType = seatType;
        this.passenger = passenger;
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

    addTrip(trip: trip){
        this.Trip = trip;
    }

    getPassenger(){
        return this.passenger;
    }

    getTrip(){
        return this.Trip?.getFlight();
    }

    getDate(){
        return this.Trip?.getDate();
    }

    getGate(){
        return this.Trip?.getGate();
    }

    getReturnTicket(){
        return this.Trip?.returnTicket();
    }

}

