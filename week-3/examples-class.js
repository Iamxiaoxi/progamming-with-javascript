//  the concept of extending classes using basic inheritance 
// to alter behaviors within child classes.

// //step 1: define the class
// class Train {
//     constructor(color, lightsOn) {
//         this.color = color; // "this" refers to the future object instance of the Train class
//         this.lightsOn = lightsOn;
//     }
// }

// //step 2: building the object instance
// var myFirstTrain = new Train('red', false);
// console.log(myFirstTrain);

// var mySecondTrain = new Train('blue', false);
// var myThirdTrain = new Train('blue', false);

//step 3: adding methods to classes
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?:', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this); // not working yet
        console.log(proto);
    }
}

var myTrain1 = new Train('black', true);
myTrain1.toggleLights();
myTrain1.getSelf();

console.log(myTrain1.lightsStatus());
myTrain1.getPrototype();

/**
 *  in conclusion, 
 * the class syntax in JavaScript allows us to clearly separate individual object's data 
 * - which exists on the object instance itself - 
 * from the shared object's functionality (methods), 
 * which exist on the prototype and are shared by all object instances.
 */

//step 4: creating a new class "HighSpeedTrain" to inherit from the Train class
class HighSpeedTrain extends Train {
    constructor (passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn); //specify what property gets inherited from the super-class
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn)
    }
    toggleLights() {
        super.toggleLights(); // the super keyword inherits the entire super-class' method.
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myTrain2 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
myTrain2.getPrototype();
highSpeed1.toggleLights();