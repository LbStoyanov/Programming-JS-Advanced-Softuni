class CarDealership {
    constructor(name){
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar (model, horsepower, price, mileage){
        if(model === '' || horsepower < 0 || !Number.isInteger(horsepower) || price< 0 || mileage < 0){
            throw new Error('Invalid input!');
        }

        let currentCar = {
            model,
            horsepower,
            price,
            mileage
        }

        this.availableCars.push(currentCar);

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }


    sellCar (model, desiredMileage) {
        if (!this.availableCars.find(x=>x.model === model)) {
            throw new Error(`${model} was not found!`)
        }

        let searchedCar = this.availableCars.find(x=>x.model === model);
        let horsePower = searchedCar.horsepower;
        let soldPrice = 0;

        

        if (searchedCar.mileage > desiredMileage) {
            let difference = searchedCar.mileage - desiredMileage;
            if(difference <= 40000){
                searchedCar.price -= searchedCar.price * 0.05;
            }else  {
                searchedCar.price -= searchedCar.price * 0.10;
            }
        }

        soldPrice = searchedCar.price;
        this.totalIncome += soldPrice;

        this.availableCars = this.availableCars.filter(x => x.model !== model);

        this.soldCars.push({
            model,
            horsePower,
            soldPrice
        });
        
        return`${model} was sold for ${soldPrice.toFixed(2)}$`
    }

    currentCar () {
        if (this.availableCars.length === 0) {
            return "There are no available cars";
        }
        let result = '-Available cars:\n';

        for(let car of this.availableCars){
            
            result += `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$\n`;
        }

        return result.substring(0,result.length - 1);
    }


    salesReport (criteria) {
        if (criteria === 'horsepower') {
            this.soldCars = this.soldCars.sort((a,b) => b.horsePower - a.horsePower);
        }else if(criteria === 'model') {
            this.soldCars = this.soldCars.sort((a,b) => a.model.localeCompare(b.model));
        }else {
            throw new Error('Invalid criteria!');
        }

        let result = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`;
        result+=`-${this.soldCars.length} cars sold:\n`;

        for(let car of this.soldCars){
            result += `---${car.model} - ${car.horsePower} HP - ${car.soldPrice.toFixed(2)}$\n`;
        }

        return result.substring(0,result.length - 1);

    }
}

let dealership = new CarDealership('SoftAuto');

dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));


/* let dealership = new CarDealership('SoftAuto');
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.sellCar('Toyota Corolla',1000)); */


/* let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.sellCar('Toyota Corolla', 230000));
console.log(dealership.sellCar('Mercedes C63', 110000)); */

/* let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.currentCar());
 */
/* let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower')); */


