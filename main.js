import dishGenerator from "./src/factory-pattern";

dishGenerator.create("butter chicken", 4);
dishGenerator.create("chicken curry", 6);
dishGenerator.create("butter chicken", 3);

console.log(dishGenerator.getDishes());
