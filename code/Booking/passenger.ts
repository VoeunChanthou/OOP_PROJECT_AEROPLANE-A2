export class passenger{
    private passengerNumber: number;
    private seatNumber: number;
    constructor(passengerNumber: number, seatNumber: number){
        this.passengerNumber = passengerNumber;
        this.seatNumber = seatNumber;
    }
    getName(): string{
        return this.passengerNumber.toString();
    }
}