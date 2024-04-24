import { employees } from "./employee";

export class Department{
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
      return this.employees[employeeId];
    }

    getSalary(employee: employees){
        return employee.getSalary();
    }

    getEmployees(){
        return this.employees;
    }

    changeSalary(employee: employees, salary: number){
        return employees.changeSalary(employee, salary);
    }
}