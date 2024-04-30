import { flight } from "../flight/flight";

export class time {
    private hours: number;
    private minutes: number;

    constructor(hours: number, minutes: number) {
        this.hours = hours;
        this.minutes = minutes;
    }

    getHours(): number {
        return this.hours;
    }

    getMinutes(): number {
        return this.minutes;
    }
}