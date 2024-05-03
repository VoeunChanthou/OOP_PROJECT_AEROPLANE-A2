
import { address } from "../Address/address";
import { ticket } from "../Ticket/ticket";
 
export class trip {
    public departureAddress: address;
    public arrivalAddress: address;
    public tickets: ticket[]=[];

    constructor(departureAddress: address, arrivalAddress: address){
        this.departureAddress = departureAddress;
        this.arrivalAddress = arrivalAddress;
    }

    addTicket(ticket: ticket){
        this.tickets.push(ticket);
    }

    public getGate(){
        for(let ticket of this.tickets){
            return ticket.getGate();
        }
    }

    public getFlight(){
        for(let ticket of this.tickets){
            return ticket.getFlightNumber();
        }
    }

    public getDate(){
        for(let ticket of this.tickets){
            return ticket.getDate();
        }
    }

    returnTicket(){
        if(this.tickets.length != 0){
            return true;
        }else{
            return false; 
        }
    }

}