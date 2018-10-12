let store = {drivers: [], passengers: [], trips: []};
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(t => t.driverId === this.id)
  }

  passengers() {
    return this.trips().map(t => t.passenger())
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(t => t.passengerId === this.id)
  }

  drivers() {
    return this.trips().map(t => t.driver())
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    if (driver) {
    this.driverId = driver.id
    }
    if (passenger) {
    this.passengerId = passenger.id
    }
    store.trips.push(this)
  }

  passenger() {
    return store.passengers.find(p => p.id === this.passengerId)
  }

  driver() {
    return store.drivers.find(d => d.id === this.driverId)
  }
}
