import counter from "./src/singleton-pattern";

console.log(
  counter.increment(),
  counter.increment(),
  (counter.apple = "apple")
);
