import SuperCounter from "./src/prototype-pattern";

const superCounter = new SuperCounter();

console.log(superCounter.count);
superCounter.incrementByX(10).increment().increment().decrement().decrementByX(3);
console.log(superCounter.count);
console.log(superCounter);
