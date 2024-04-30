//import class///
import { address } from "./Address/address";
import { airline } from "./Airline/airline";
import { airplane } from "./Airplane/airplane";
import { Airport } from "./Airport/airport";
import { employees } from "./Employee/employee";
import { date } from "./date/date";
import { flight } from "./flight/flight";
import { flightTrip } from "./flight/flightTrip";
import { luggage } from "./passenger/luggage";
import { passenger } from "./passenger/passenger";
import { trip } from "./tirp/trip";
import { gender } from "./Person/gender";
import { jobCategories } from "./Employee/jobCategories";
import { seat } from "./Airplane/seat";
import { tickettype } from "./Booking/tickettype";
import { booking } from "./Booking/booking";
import { time } from "./date/time";
import { gate } from "./Airport/gate";

///create object//

//create passengers object
let Samorn = new passenger(1, "Samorn", "Mia", gender.female, 21, false);
let Ny = new passenger(2, "Ny", "Ma", gender.female, 30, false);

//luggage
let bag = new luggage("A34", 200);

//create pilot object
let pilot1 = new employees("A1", jobCategories.pilot, "Roth", "Samrith", 50, gender.male, 2000);
let pilot2 = new employees("A2", jobCategories.pilot, "Hak", "Seng", 20, gender.male, 2000);
let pilot3 = new employees("A3", jobCategories.pilot, "Roth", "Samrith", 50, gender.male, 200);

//create co-pilot
let Chanda = new employees("A23", jobCategories.crew, "Chanda", "nia", 20, gender.female, 1000);
let Nika = new employees("A5", jobCategories.crew, "Nika", "Mo", 20, gender.female, 1000);

//create employees
let Chanthou = new employees("A14",  jobCategories.manager, "Chanthou", "Voeun", 18, gender.male, 5000);
let Vanny = new employees("A22", jobCategories.chef, "Vanny", "Chan", 21, gender.female, 1000);

//create trip
let trip1 = new trip(new address("Cambodia", "Phnom Penh", "371"), new address("England", "London", "293"));



//create booking
let booking1 = new booking(new date("Monday", "10", 2024), tickettype.economic_flex);
booking1.payForTicket(1000);
// booking1.cancelBooking();

//create gates object
let gate1 = new gate("UCL");
let gate2 = new gate("PL");
let gate3 = new gate("MP40");

//create airline
let airline1 = new airline("PNC airline");
airline1.setManager(Chanthou);
airline1.addEmployee(Chanda);
airline1.addEmployee(pilot1);
airline1.addEmployee(pilot2);
airline1.addEmployee(pilot3);
airline1.addEmployee(Nika);

let airline2 = new airline("KPT airline");
airline2.setManager(Chanthou);

//get total salary for all employees in the company
// console.log(airline1.totalSalaryForpayment());

//get employee by position
// console.log(airline1.employeeDetails(jobCategories.pilot));

//create airport
let airport1 = new Airport("AFC", "PNC AIRPORT", new address("Cambodia", "Kompong Thom", "number 6"));
airport1.addAirline(airline1);
airport1.addAirline(airline2);
airport1.addGate(gate1);
airport1.addGate(gate2);
airport1.addGate(gate3);

//get airline in airport by searching
// console.log(airport1.getAirlines("P"));




