import { rout } from "../Rout/rout";
import { Airport } from '../Airport/airport';
import { date } from '../date/date';
import { time } from '../date/time';
import { ticket } from '../Ticket/ticket';
import { gate } from "../Airport/gate";
import { flightTrip } from "./flightTrip";


export class flight {
    private flightNumber: string;
    private departureAddress: Airport;
    private arrivalAddress?: Airport;
    private checkIn?: boolean;
    public date: date;
    private startingTime: time;
    private arrivedTime?: time;
    private rout?: rout;
    private tickets: ticket[]=[];
    private gateNumber: gate;
    private flightTrip?: flightTrip;


    constructor(flightNumber: string ,departureAddress: Airport, arrivalAddress: Airport, date: date, startingTime: time, gate: gate) {
        this.flightNumber = flightNumber;
        this.departureAddress = departureAddress;
        this.arrivalAddress = arrivalAddress;
        this.date = date;
        this.startingTime = startingTime;
        this.gateNumber = gate;
    }

    isCheckIn(): boolean{
        return true;
    }

    addFlightTrip(flightTrip: flightTrip){
        this.flightTrip = flightTrip;
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

    getGate(){
        return this.gateNumber.getGateNumber();
    }

    getflightNumber(){
        return this.flightNumber;
    }

    getDate(){
        return this.date;
    }

    addRout(rout: rout){
        this.rout = rout;
    }

    getAirplane(){
        return this.rout?.getPlane();
    }
}