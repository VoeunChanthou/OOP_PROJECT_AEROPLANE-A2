import { employees } from "./employee";

export class Department {
    private departmentName: string;
    private employees: employees[]=[];
    private manager: employees;

    constructor(departmentName: string, manager: employees){
        this.departmentName = departmentName;
        this.manager = manager;
    }

    addEmployee(employee: employees){
        this.employees.push(employee);
    }

    removeEmployee(employee: employees){
        this.employees.splice(this.employees.indexOf(employee), 1);
    }

    getEmployeeById(employeeId: string){
        //todo//
    }

    getSalary(employee: employees){
        //todo//
    }

    getEmployees(){
        return this.employees;
    }

    changeSalary(employee: employees, salary: number){
        //todo//
    }
}