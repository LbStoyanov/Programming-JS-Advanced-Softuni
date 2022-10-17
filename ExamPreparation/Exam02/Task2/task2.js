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
        
        return  `${quantity} ${plantName} have successfully ripened.`;

    }


    harvestPlant(plantName) {

        let currentPlant = this.plants.find(x => x.plantName === plantName);

        if (!currentPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

       

        if (!currentPlant.ripe) {
            throw new Error("The {plantName} cannot be harvested before it is ripe.");
        }

        this.plants = this.plants.filter(x => x.plantName !== plantName);
        this.storage.push({
            plantName: currentPlant.plantName,
            quantity:currentPlant.quantity
        });


        this.spaceAvailable += currentPlant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`;
        
    }
}

let testPlant = new Garden(10);
console.log(testPlant.addPlant('buchi',2));
console.log(testPlant.ripenPlant('buchi',1));
console.log(testPlant.harvestPlant('koto'));
