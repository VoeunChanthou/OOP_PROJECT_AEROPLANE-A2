import { flight } from "./flight";

export class date {
    private day: string;
    private month: string;
    private year: number;

    constructor(day: string, month: string, year: number){
        this.day = day;
        this.month = month;
        this.year = year;
    }

    getDay(): string{
        return this.day;
    }

    getMonth(): string{
        return this.month;
    }

    getYear(): number{
        return this.year;
    }

}