import {counter, mathematicalOperations} from "./src/prototype-pattern-fn";

console.log(mathematicalOperations.add(2, 3)); //Prints 5
console.log(mathematicalOperations.sin(1.5708)); // Prints 0.999999999999 ~ 1
console.log(counter.increment().increment().increment().increment().decrement().getCount()); // Prints 3
console.log(counter.reset().getCount()); // Prints 0
