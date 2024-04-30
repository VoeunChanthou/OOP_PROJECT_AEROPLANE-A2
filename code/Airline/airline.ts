import { address } from "../Address/address";
import { booking } from "../Booking/booking";
import { employees } from "../Employee/employee";
import { jobCategories } from "../Employee/jobCategories";


export class airline {
    private airlineName: string;
    private bookings?: booking[]=[];
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

}