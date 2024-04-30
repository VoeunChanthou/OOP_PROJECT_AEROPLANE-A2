import { booking } from "../Booking/booking";
import { gender } from "../Person/gender";
import { Person } from "../Person/person";

export class passenger extends Person{
    private passengerNumber: number;
    private passport: boolean;
    private booking?: booking[]=[];

    constructor(passengerNumber: number, firstName: string, lastName: string, gender: gender, age: number, passport: boolean){
        super(firstName, lastName, gender, age);
        this.passengerNumber = passengerNumber;
        this.passport  = passport;
    }
    getName(): string{
        return this.passengerNumber.toString();
    }
    
    customerBooking(booking: booking){
        this.booking?.push(booking);
    }
}