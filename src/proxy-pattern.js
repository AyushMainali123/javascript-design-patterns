const count = Symbol('count');
const counter = {
  [count]: 1,
  increment: function () {
    this[count]++;
  },
  decrement: function () {
    this[count]--;
  },
  getCount: function () {
    return this[count];
  },
};


const counterProxy = new Proxy(counter, {
  get: function (object, property) {

    if (Reflect.has(object, property) === false) {
      throw new Error("The property does not exist!");
    }

    return Reflect.get(object, property);

  },
  set: function (object, property, value) {

    if(Reflect.has(object, property) === false) {
      throw new Error("This property is not a valid property");
    }

    return Reflect.set(object, property, value);
  }
})

export default counterProxy;