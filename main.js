import Dishfactory from "./src/factory-pattern-1.js";

console.log(
  Dishfactory.create("chicken curry", 2).create("butter chicken", 8).getDishes()
);