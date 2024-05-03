import { booking } from "../Booking/booking";
import { gender } from "../Person/gender";
import { Person } from "../Person/person";
import { date } from "../date/date";


export class passenger extends Person{
    private passengerNumber: number;
    private passport: boolean;
    public booking: booking[]=[];

    constructor(passengerNumber: number, firstName: string, lastName: string, gender: gender, age: number, passport: boolean){
        super(firstName, lastName, gender, age);
        this.passengerNumber = passengerNumber;
        this.passport  = passport;
    }
    getName(): string{
        return this.passengerNumber.toString();
    }
    
    customerBooking(booking: booking){
        this.booking.push(booking);
    }

    getGateNumber(flightNumber: string, date: date){
        for(let value of this.booking){
            if(value.getTrip() === flightNumber){
                // console.log(value.getTrip());
                let dateTrip = value.Trip?.tickets[0].flight.date.compareDate(date);
                if(dateTrip){
                    console.log(value.getGate());
                }
            }
        }
    }
}