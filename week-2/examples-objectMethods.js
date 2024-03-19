//using function as a method for an object
 car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
console.log(car);

// an extended version
var car = {};
car.mileage = 98765;
car.color = "red";
car.turnTheKey = function() {
    console.log ("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn();