function solve(car) {
  let finalCar = {
    model: "",
    engine: {},
    carriage: {},
    wheels: [],
  };

  let engine = {};
  let carriages = [];
  let wheelsArr = [];
  let convertedWheelSize = car.wheelsize;

  if (car.wheelsize % 2 == 0) {
    convertedWheelSize -= 1;
  }

  wheelsArr.push(
    convertedWheelSize,
    convertedWheelSize,
    convertedWheelSize,
    convertedWheelSize
  );

  if (car.power <= 90) {
    engine.power = 90;
    engine.volume = 1800;
  }else if (car.power <= 120) {
    engine.power = 120;
    engine.volume = 2400;
  }else if (car.power <= 200) {
    engine.power = 200;
    engine.volume = 3500;
  }

  let hatchBack = {
    type: "hatchback",
    color: "",
  };

  let coupe = {
    type: "coupe",
    color: "",
  };

  carriages.push(hatchBack, coupe);

  finalCar.model = car.model;
  finalCar.engine = engine;
  finalCar.carriage = carriages.find((x) => x.type == car.carriage);
  finalCar.carriage.color = car.color;
  finalCar.wheels = wheelsArr;
  //console.log(finalCar);
  return finalCar;
}

solve({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
