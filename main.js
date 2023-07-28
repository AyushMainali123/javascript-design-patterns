import Dog from "./src/mixin-pattern";

const cuteDog = new Dog();

console.log(cuteDog.isSleeping); // false
cuteDog.bark();  // Bark Bark!
cuteDog.play(); // Wagging tail
cuteDog.sleep();  // Set isSleeping to true
console.log(cuteDog.isSleeping); // true
cuteDog.wakeUp();  // Set isSleeping to false
console.log(cuteDog.isSleeping); // false