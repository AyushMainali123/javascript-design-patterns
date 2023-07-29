class ChickenCurry {
  constructor(spiceLevel) {
    this.type = "chicken curry";
    this.spiceness = spiceLevel;
  }
}

class ButterChicken {
  constructor(spiceLevel) {
    this.type = "butter chiicken";
    this.spiceness = spiceLevel;
  }
}

class DishFactory {
  create(type, spiceLevel) {
    switch (type) {
      case "chicken curry":
        return new ChickenCurry(spiceLevel);
      case "butter chicken":
        return new ButterChicken(spiceLevel);
    }
  }
}

function factoryGenerator() {
  const dishes = [];
  const dishFactory = new DishFactory();
  return function () {
    this.create = function (dishType, spiceLevel) {
      const returnedValue = dishes.push(
        dishFactory.create(dishType, spiceLevel)
      );
      return this;
    };

    this.getDishes = function () {
      return dishes;
    };
  };
}

const DishGenerator = factoryGenerator();
const generator = new DishGenerator();

export default Object.seal(generator);
