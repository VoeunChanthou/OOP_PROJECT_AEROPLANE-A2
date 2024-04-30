
import { address } from "../Address/address";
 
export class trip {
    public departureAddress: address;
    public arrivalAddress: address;

    constructor(departureAddress: address, arrivalAddress: address){
        this.departureAddress = departureAddress;
        this.arrivalAddress = arrivalAddress;
    }

}