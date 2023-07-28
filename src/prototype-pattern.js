class Counter {
    #count;
    constructor(initialCount) {
        this.#count = initialCount || 0;
    }    
    get count() {
        return this.#count;
    }

    set count(value) {
        this.#count = value;
    }

    increment() {
        this.#count++;
        return this;
    }

    decrement() {
        this.#count--;
        return this;
    }

    reset() {
        this.#count = 0;
        return this;
    }
}


// SuperCounter prorotype points to Counter.
class SuperCounter extends Counter {
    
    constructor(initialCount) {
        super(initialCount);
    }

    incrementByX(x) {
        this.count += x;
        return this;
    }

    decrementByX(x) {
        this.count -= x;
        return x;
    }
}

export default SuperCounter;