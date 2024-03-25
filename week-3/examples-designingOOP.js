class Animal {
    // constructor: color, energy
    constructor(color, energy) {
        this.color = color;
        this.energy = energy;
    }
    // isActive()
        // if energy > 0, energy -=20, console log energy
        // else if energy <= 0, sleep()
    isActive() {
        while(this.energy > 0) {
            this.energy -= 20;
            console.log("energy level:", this.energy)
        } 
        this.sleep();
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
    constructor(sound, canJumpHigh, canClumbTrees, color, energy) {
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
    constructor(sound, canFly, color, energy) {
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
    constructor(houseCatSound, sound, canJumpHigh, canClimbTrees, color, energy) {
        this.houseCatSound = houseCatSound;
        super(sound,canJumpHigh, canClimbTrees, color, energy);
    }
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // console.log(houseCatSound)
    makeSound(bool) {
        if(bool == true) {
            super.makeSound();   
        }
        else {
            console.log(this.houseCatSound);
        }

    }
}
class Tiger extends Cat {
    // constructor: tigerSound, sound, canJumpHigh, canClimbTrees, color, energy
    constructor(tigerSound, sound, canJumpHigh, canClimbTrees, color, energy) {
        super (sound, canJumpHigh, canClimbTrees, color, energy);
        this.tigerSound = tigerSound;
    }
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // console.log(tigerSound)
    makeSound(bool) {
        if (bool == true) {
            super.makeSound();
        }
        else {
            console.log(this.tigerSound);
        }
    }
}   
class Parrot extends Bird {
    // constructor: canTalk, sound, canJumpHigh, canClimbTrees, color, energy
    constructor(canTalk, sound, canJumpHigh, canClumbTrees, color, energy) {
        super(sound, canJumpHigh, canClumbTrees, color, energy);
        this.canTalk = canTalk;
    }
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // if (canTalk)
            // console.log("talking!")
    makeSound(bool) {
        if (bool == true) {
            super.makeSound();
        }
        else {
            console.log(this.sound);
        }
        if (this.canTalk == true) {
            console.log("Talking!");
        }

    }
}   