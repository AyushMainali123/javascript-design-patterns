const basicMathematicalOperationsMixin = (obj) => {
    return {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
        ...obj
    }
}


const trigonometricalOperationsMixin = (obj) => {
    return {
        sin: (a) => Math.sin(a),
        cos: (a) => Math.cos(a),
        tan: (a) => Math.tan(a),
        ...obj
    }
}


const counterMixin = (initialCount) => (obj) => {
    const count = Symbol('count');
    return {
        [count]: initialCount,
        increment: function () {
            this[count]++;
            return this;
        },
        decrement: function () {
            this[count]--;
            return this;
        },
        reset: function () {
            this[count] = initialCount;
            return this;
        },
        getCount: function () {
            return this[count];
        },
        ...obj,
    }
}


const mathematicalOperations = trigonometricalOperationsMixin(basicMathematicalOperationsMixin({}));
const counter = counterMixin(0)({});


export { counter, mathematicalOperations }


