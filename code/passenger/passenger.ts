import { booking } from "../Booking/booking";

export class passenger{
    private passengerNumber: number;
    private seatNumber: number;
    private passport: boolean;
    private booking?: booking;

    constructor(passengerNumber: number, seatNumber: number, passport: boolean){
        this.passengerNumber = passengerNumber;
        this.seatNumber = seatNumber;
        this.passport  = passport;
    }
    getName(): string{
        return this.passengerNumber.toString();
    }
    
    customerBooking(booking: booking){
        this.booking = booking;
    }
}