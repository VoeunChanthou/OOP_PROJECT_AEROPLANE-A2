
import { address } from "../Address/address";
import { ticket } from "../Ticket/ticket";
 
export class trip {
    public departureAddress: address;
    public arrivalAddress: address;
    private tickets: ticket[]=[];

    constructor(departureAddress: address, arrivalAddress: address){
        this.departureAddress = departureAddress;
        this.arrivalAddress = arrivalAddress;
    }

    addTicket(ticket: ticket){
        this.tickets.push(ticket);
    }

}