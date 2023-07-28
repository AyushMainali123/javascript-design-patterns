import counterProxy from "./src/proxy-pattern";

console.log(counterProxy.getCount());
console.log(counterProxy.increment());
console.log(counterProxy.increment());
console.log(counterProxy.getCount());