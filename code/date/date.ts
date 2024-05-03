
export class date {
    public day: string;
    public month: string;
    public year: number;

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

    compareDate(date: date){
        if(date.day === this.day && date.month === this.month && date.year === this.year){
            return true;
        }else{
            return false;
        }
    }
}