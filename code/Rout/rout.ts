
import { airplane } from "../Airplane/airplane";

export class rout {
    private airplane: airplane;

    constructor(airplane: airplane){
        this.airplane = airplane;
    }

    getPlane(){
        return this.airplane.getAirplenName();
    }
}