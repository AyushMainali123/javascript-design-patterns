class Dog {
    constructor() {
        this.isSleeping = false;
        this.isEating = false;
    }
}

class Whale {
    constructor() {
        this.isSleeping = false;
        this.isEating = false;
    }
}


// Mixin of Animal.
const animalCommonMixin = {
    sleep: function() {
        this.isSleeping = true;
    },
    eat: function() {
        this.isEating = true;
    },
    wakeUp: function() {
        this.isSleeping = false;
    },
    finishEating: function() {
        this.isEating = false;
    }
}


// Mixin for Dog.
const dogMixin = {
    bark: function() {
        console.log("Bark Bark!");
    },
    play: function() {
        console.log("Wagging tail");
    }
}



// Assigning animalCommonMixin to dogMixin prototype. This will allow Dog to use all the methods of animalCommonMixin
Object.assign(dogMixin.__proto__, animalCommonMixin);

// Assigning animalCommonMixin to Whale prototype. This will allow Whale to use all the methods of animalCommonMixin
Object.assign(Whale.prototype, animalCommonMixin);

// Assigning dogMixin to the prototype of Dog
Object.assign(Dog.prototype, dogMixin);


export default Dog;