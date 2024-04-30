import { airline } from '../Company/airline';
import { airplane } from '../Airplane/airplane';
import { Airport } from '../Airport/airport';
import { date } from '../date/date';
import { time } from '../date/time';

export class flight {
    private departureAddress: Airport;
    private arrivalAddress: Airport;
    private checkIn : boolean;
    private date: date;
    private startingTime: time;
    private arrivedTime: time;
    private airplane: airplane;
    private airline: airline;


    constructor(departureAddress: Airport, arrivalAddress: Airport, checkIn: boolean, date: date, startingTime: time, arrivedTime: time, airplane: airplane, airline: airline) {
        this.departureAddress = departureAddress;
        this.arrivalAddress = arrivalAddress;
        this.checkIn = checkIn;
        this.date = date;
        this.startingTime = startingTime;
        this.arrivedTime = arrivedTime;
        this.airplane = airplane;
        this.airline = airline;
    }

    isCheckIn(): boolean{
        return true;
    }

    getDepartureAddress(){
        return this.departureAddress;
    }

    getArrivalAddress(){
        return this.arrivalAddress;
    }
}