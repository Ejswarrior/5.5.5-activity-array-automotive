//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
class Car extends VehicleModule{
    constructor(maximumPassengers, passenger, numberOfWheels,maximumSpeed, fuel, scheduleService){
        super()
        this.maximumPassengers = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 160
        this.fuel = 10
        this.scheduleService = false


        
    }
    start(){
        if(this.fuel > 0){
           return this.start = true
        }
            
    }

   serviceTime(){
        if(this.mileage<30000){
           return this.scheduleService == true
        }
    }

    space(){
        if(this.passenger<this.maximumPassengers){
          console.log(`you have ${this.passenger} passengers`)
            return this.passenger

        }
    }
}

let carZ = new Car("Mecury", "Sedan", "1965", "yellow", "50000")

console.log(carZ)
carZ.start()
carZ.serviceTime()
carZ.space()