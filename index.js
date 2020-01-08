let store = {passengers: [], trips: [], drivers: []}

let driverId = 0
let passengerId = 0
let tripId = 0

class Driver{
constructor(name){
  this.id = ++driverId
  this.name = name
  store.drivers.push(this)
}
}

class Passenger{
  constructor(name){
  this.name = name
  this.id = ++passengerId
  store.passengers.push(this)
}
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    this.driver.id = driverId
    this.passenger = passenger
    store.trips.push(this)
  }
}
