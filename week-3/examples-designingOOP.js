class Animal {
    // constructor: color, energy
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    // isActive()
        // if energy > 0, energy -=20, console log energy
        // else if energy <= 0, sleep()
    isActive() {
        if(this.energy > 0) {
            this.energy -= 20;
            console.log("energy level:", this.energy)
        } 
        else if (this.energy == 0) {
            this.sleep();
        }
    }

    // sleep()
        // energy += 20
        // console.log energy
    sleep() {
        this.energy += 20;
        console.log('energy level:', this.energy);
    }
    getColor() {
        console.log("color:", this.color);
    }
}

class Cat extends Animal {
    // constructor: sound, canJumpHigh, canClimbTrees, color, energy
    constructor(sound = 'purr', canJumpHigh = true, canClumbTrees = true, color, energy) {
        super(color,energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClumbTrees = canClumbTrees;
    }
    // makeSound()
        // console.log sound
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    // constructor: sound, canFly, color, energy
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    // makeSound()
        // console.log sound
    makeSound() {
        console.log(this.sound);
    }
}
class HouseCat extends Cat {
    // constructor: houseCatSound, sound, canJumpHigh, canClimbTrees, color, energy
    constructor(houseCatSound = 'meow', sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound,canJumpHigh, canClimbTrees, color, energy);
        this.houseCatSound = houseCatSound;
    }
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // console.log(houseCatSound)
    makeSound(bool) {
        if (bool) {
            super.makeSound();   
        }
        console.log(this.houseCatSound);
        

    }
}
class Tiger extends Cat {
    // constructor: tigerSound, sound, canJumpHigh, canClimbTrees, color, energy
    constructor(tigerSound = 'roar', sound, canJumpHigh, canClimbTrees, color, energy) {
        super (sound, canJumpHigh, canClimbTrees, color, energy);
        this.tigerSound = tigerSound;
    }
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // console.log(tigerSound)
    makeSound(bool) {
        if (bool) {
            super.makeSound();
        }
        console.log(this.tigerSound);
        
    }
}   
class Parrot extends Bird {
    // constructor: canTalk, sound, canJumpHigh, canClimbTrees, color, energy
    constructor(canTalk = false, sound, canFly, color, energy) {
        super(sound, canFly, color, energy);
        this.canTalk = canTalk;
    }
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // if (canTalk)
            // console.log("talking!")
    makeSound(bool) {
        if (bool) {
            super.makeSound();
        }
       
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }

    }
}   

var polly = new Parrot(true);
var fiji = new Parrot(false);


fiji.makeSound();
fiji.makeSound(true);

polly.makeSound();
polly.makeSound(true);

polly.color;
polly.energy;

polly.isActive();

var penguin = new Bird("Shriek",false,"black and white", 200);
penguin;

penguin.sound;
penguin.canFly;
penguin.color;
penguin.energy;
penguin.isActive();

var leo = new HouseCat();

leo.makeSound(false);

leo.makeSound(true);

var cuddles = new Tiger();
cuddles.makeSound(false);
cuddles.makeSound(true);

