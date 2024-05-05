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
import { trip } from "./trip/trip";
import { gender } from "./Person/gender";
import { jobCategories } from "./Employee/jobCategories";
import { seat } from "./Airplane/seat";
import { tickettype } from "./Booking/tickettype";
import { booking } from "./Booking/booking";
import { time } from "./date/time";
import { gate } from "./Airport/gate";
import { ticket } from "./Ticket/ticket"; 
import { meal } from "./flight/meal";
import { rout } from "./Rout/rout";

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
let trip2 = new trip(new address("Spain", "Barcelona", "371"), new address("England", "London", "293"));



//create booking
let booking1 = new booking("AK2",new date("Monday", "10", 2024), tickettype.economic_flex, Ny);
let booking2 = new booking("JP23" ,new date("Monday", "10", 2024), tickettype.economic_flex, Samorn);
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
airline1.addEmployee(Vanny);
airline1.Booking(booking1);
airline1.Booking(booking2);

let airline2 = new airline("KPT airline");
airline2.setManager(Chanthou);

//get total salary for all employees in the company
// console.log(airline1.totalSalaryForpayment());

//get employee by position
// console.log(airline1.employeeDetails(jobCategories.pilot));

//create airport
let airport1 = new Airport("AFC", "PNC AIRPORT", new address("Cambodia", "PP", "number 6"));
airport1.addAirline(airline1);
airport1.addAirline(airline2);
airport1.addGate(gate1);
airport1.addGate(gate2);
airport1.addGate(gate3);

let airport2 =  new Airport("AFC1", "KTP AIRPORT", new address("Cambodia", "KPT", "Number 6"))

//get airline in airport by searching
// console.log(airport1.getAirlines("P"));


// console.log(airline1);

//create trip 
Ny.customerBooking(booking1);

//get detail information of passenger
airline1.getDetailOfPassenger("AK2");


//create flight
let flight1 = new flight("KO168" ,airport1, airport2, new date("MON", "10", 2024), new time(11, 50), new gate("A22"));
// flight1.getGate();


//create ticket
let ticket1 = new ticket(flight1, gate1);
trip1.addTicket(ticket1);

booking1.addTrip(trip1);
booking2.addTrip(trip2);

//passenger get gateNumber
// Ny.getGateNumber("KO168", new date("MON", "10", 2024));

//create flightTrip
let flightTrip1 = new flightTrip(airline1);
flightTrip1.addMeals(meal.vegetarian)
flightTrip1.addMeals(meal.vegetarian)
flightTrip1.addMeals(meal.vegetarian)
flightTrip1.addMeals(meal.vegetarian)
flightTrip1.addMeals(meal.vegetarian)
flightTrip1.addMeals(meal.vegetarian)
flightTrip1.addMeals(meal.vegan)
flightTrip1.addMeals(meal.vegan)
flightTrip1.addMeals(meal.vegan)
flightTrip1.addMeals(meal.dairy_free)
flightTrip1.addMeals(meal.dairy_free)
flightTrip1.addMeals(meal.Halal)
flightTrip1.addMeals(meal.Halal)
flightTrip1.addMeals(meal.Halal)
flightTrip1.addMeals(meal.Kosher)
flightTrip1.addMeals(meal.so_forth)

flightTrip1.addPilot(pilot1)
flightTrip1.addPilot(pilot2)

//add get flight from pilot
pilot1.addFlight(flightTrip1);
pilot1.addFlight(flightTrip1);
pilot2.addFlight(flightTrip1);
// console.log(pilot1.getFlights(pilot1));
// console.log(pilot2.getFlights(pilot2));


//get number of each meal
// console.log(flightTrip1.getNumberOfmeal(meal.Halal));
// console.log(flightTrip1.getNumberOfmeal(meal.Kosher));


//get passenger have return the ticket
// console.log(airline1.getTicketReturn());


//create airplane
let airplane1 = new airplane("168K", "PC03", 100);

//create rout
let rout1 = new rout(airplane1);

//add rout to flight
flight1.addRout(rout1);
// console.log(flight1.getAirplane());

// console.log(airline1.getChef());
console.log(flight1);