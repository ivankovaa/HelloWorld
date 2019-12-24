function Car(carName) {
this.carName = carName || "Unknown name";
}

Car.prototype.logName = function() {
console.log("Car name is: ", this.carName);
};

//function callConsole() {
//console.log(arguments);}

//module.exports.CarClass = Car;
global.Car = Car;
