import { address } from './address';
import { time } from './time';

export class flight {
    private destination: address;
    private arrivalAddress: address;
    private checkIn : boolean ;
    private date: Date
    private startingTime: time;
    private arrivedTime: time;

    constructor(destination: address, arrivalAddress: address, checkIn: boolean, date: Date, startingTime: time, arrivedTime: time) {
        this.destination = destination;
        this.arrivalAddress = arrivalAddress;
        this.checkIn = checkIn;
        this.date = date;
        this.startingTime = startingTime;
        this.arrivedTime = arrivedTime;
    }

    isCheckIn(){
        return this.checkIn;
    }

    getDestination(){
        return this.destination;
    }

    getArrivalAddress(){
        return this.arrivalAddress;
    }
}