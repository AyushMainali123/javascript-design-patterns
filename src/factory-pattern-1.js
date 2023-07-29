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
    static dishes = [];
    static create(type, spiceLevel) {
        switch (type) {
            case "chicken curry":
                DishFactory.dishes.push(new ChickenCurry(spiceLevel));
                return DishFactory;
            case "butter chicken":
                DishFactory.dishes.push(new ButterChicken(spiceLevel));
                return DishFactory;
        }
    }

    static getDishes() {
        return DishFactory.dishes;
    }
}


export default Object.seal(DishFactory);