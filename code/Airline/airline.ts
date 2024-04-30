import { address } from "../Address/address";
import { booking } from "../Booking/booking";
import { employees } from "../Employee/employee";


export class airline {
    private airlineName: string;
    private bookings: booking[]=[];
    private employees: employees[]=[];

    constructor(airlineName: string){
        this.airlineName = airlineName;
    }

    addBooking(booking: booking){
        this.bookings.push(booking);
    }

    addEmployee(employee: employees){
        this.employees.push(employee);
    }

}