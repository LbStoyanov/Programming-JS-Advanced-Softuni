function solve(worker) {
    if (worker.dizziness) {
        let water = 0.1;
        let neededWaterQuantity = water * worker.weight * worker.experience;
        worker.levelOfHydrated += neededWaterQuantity;
        worker.dizziness = false;
    }

    return worker;
}

console.log(solve({
    weight: 80,
  
    experience: 1,
  
    levelOfHydrated: 0,
  
    dizziness: true,
  }));
