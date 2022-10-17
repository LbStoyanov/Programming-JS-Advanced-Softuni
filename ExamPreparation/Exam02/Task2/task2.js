class Garden {
	constructor(spaceAvailable){
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant (plantName, spaceRequired){
        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.");
        }


        let currentPlant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        }

        this.plants.push(currentPlant);
        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity){

        let currentPlant = this.plants.find(x => x.plantName === plantName);

        if (!currentPlant) {
            throw new Error(`There is no ${plantName} in the garden.`); 
        }

        if (currentPlant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`)
        }

        if (quantity <= 0 ) {
            throw new Error("The quantity cannot be zero or negative.");
        }

        currentPlant.ripe = true;
        currentPlant.quantity += quantity;

        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        }
        
        return  `${quantity} ${plantName}s have successfully ripened.`;

    }


    harvestPlant(plantName) {

        let currentPlant = this.plants.find(x => x.plantName === plantName);

        if (!currentPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

       

        if (!currentPlant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        this.plants = this.plants.filter(x => x.plantName !== plantName);
        this.storage.push({
            plantName: currentPlant.plantName,
            quantity:currentPlant.quantity 
        });


        this.spaceAvailable += currentPlant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`;
        
    }

    generateReport(){
        let result = `The garden has ${ this.spaceAvailable } free space left.\n`;
        result += 'Plants in the garden: ';

        let orderedPlants = this.plants.sort((a,b) => a.plantName.localeCompare(b.plantName));

        for(let plant of orderedPlants){
            result += `${plant.plantName}, `;
        }
        result = result.slice(0,result.length - 2);
        result += "\n";

        if (this.storage.length === 0){
            result += "Plants in storage: The storage is empty.";
        }else {
            result += "Plants in storage: ";

            for(let plant of this.storage){
                result += `${plant.plantName} (${plant.quantity}), `;
            }
        }

        result = result.slice(0,result.length - 2);

        return result;
    }
}

/* const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('olive', 50)); */

/* const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('orange', 4)); */


/* const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('olive', 30)); */

/* const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('cucumber', -5));
 */

/* const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('apple'));
console.log(myGarden.harvestPlant('olive'));
 */
/* 
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('apple'));
console.log(myGarden.harvestPlant('raspberry'));
 */



const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());



