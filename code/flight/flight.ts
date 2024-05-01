import { airline } from '../Airline/airline';
import { airplane } from '../Airplane/airplane';
import { Airport } from '../Airport/airport';
import { date } from '../date/date';
import { time } from '../date/time';
import { ticket } from '../Ticket/ticket';


export class flight {
    private flightNumber: string;
    private departureAddress: Airport;
    private arrivalAddress: Airport;
    private checkIn : boolean;
    private date: date;
    private startingTime: time;
    private arrivedTime: time;
    private airplane: airplane;
    private airline: airline;
    private tickets: ticket[]=[];


    constructor(departureAddress: Airport, date: date, startingTime: time) {
        this.departureAddress = departureAddress;
        this.date = date;
        this.startingTime = startingTime;
    }

    isCheckIn(): boolean{
        return true;
    }

    ticketOrder(ticket: ticket){
        this.tickets.push(ticket);
    }

    getDepartureAddress(){
        return this.departureAddress;
    }

    getArrivalAddress(){
        return this.arrivalAddress;
    }


}