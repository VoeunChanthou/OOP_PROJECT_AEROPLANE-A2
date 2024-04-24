import { Department } from "./department";
import { employees } from "./employee";
import { gate } from "./gate";
import { jobCategories } from "./jobCategories";
import { gender } from "../Booking/gender";


export class Airport {
    private AirportCode: string;
    private AirportName: string;
    private gates: gate[]=[];
    private deparments: Department[] = [];

    constructor(AirportCode: string, AirportName: string) {
        this.AirportCode = AirportCode;
        this.AirportName = AirportName;
    }

    addGate(gate: gate) {
        this.gates.push(gate);
    }

    addDepartMent(deparment: Department){
        this.deparments.push(deparment);
    }
}

let A1 = new gate("A1");
let Chanthou = new employees('001',  jobCategories.manager, "chanthou", "voeun", 18, gender.male, 2000);
let airlineDepartment = new Department("Aline", Chanthou)
let PNC = new Airport("pnc-000018", "PNC Airport");
PNC.addDepartMent(airlineDepartment);
PNC.addGate(A1);
console.log(PNC);
