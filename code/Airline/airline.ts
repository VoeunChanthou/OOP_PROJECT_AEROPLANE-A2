import { address } from "../Address/address";
import { booking } from "../Booking/booking";
import { employees } from "../Employee/employee";
import { jobCategories } from "../Employee/jobCategories";
import { meal } from "../flight/meal";


export class airline {
    private airlineName: string;
    private bookings: booking[]=[];
    private employees: employees[]=[];
    private airlineManager?: employees;

    constructor(airlineName: string){
        this.airlineName = airlineName;
    }

    getAirlineName(){
        return this.airlineName;
    }
    setManager(manager: employees){
        this.airlineManager = manager;
    }

    addEmployee(employee: employees){
        this.employees.push(employee);
    }

    getChef(){
        let chefs: employees[]=[];
        for(let chef of this.employees){
            if(chef.getPosition() == jobCategories.chef){
                chefs.push(chef);
            }
        }
        return chefs;

    }

    Booking(booking: booking){
        this.bookings.push(booking);
    }

    totalSalaryForpayment(): string{
        let totalSalary:number = 0;
        for(let employee of this.employees){
            totalSalary += employee.getSalary();
        }
        return "The total salary that need to pay for the employees: " + totalSalary;
    }

    employeeDetails(position: jobCategories){
        let list: employees[] = [];
        for(let employee of this.employees){
            if (employee.getPosition() === position){
                list.push(employee);
            }
        }
        return list;
    }

    getDetailOfPassenger(bookingReference: string){
        for(let booking of this.bookings){
            if(booking.bookReference == bookingReference){
                return booking.getPassenger();
            }
        }
    }

    getTicketReturn(){
        let returnTicket: number=0;
        for(let booking of this.bookings){
            if(booking.getReturnTicket()){
                returnTicket ++;
            }
        }
        return returnTicket;
    }

}