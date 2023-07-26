/*************************************************Singleton pattern using Class**************************************************************** */

class Counter {
  static isInstanceCreated = false;

  constructor() {
    // Don't create an instance is an instance is already created
    if (Counter.isInstanceCreated) {
      throw new Error("Counter is already created!!");
    }
    this.counter = 0;
    Counter.isInstanceCreated = true;
  }

  getCount() {
    return this.counter;
  }

  increment() {
    return ++this.counter;
  }

  decrement() {
    return --this.counter;
  }
}

const counter = Object.seal(new Counter());

// export default counter;



/*************************************************Singleton pattern using Object**************************************************************** */

const counterObj = {
  counter: 0,
  increment() {
    return ++this.counter;
  },
  decrement() {
    return --this.counter;
  },
  getCount() {
    return this.counter;
  },
};


const sealedCounterObj = Object.seal(counterObj);


export default sealedCounterObj;
