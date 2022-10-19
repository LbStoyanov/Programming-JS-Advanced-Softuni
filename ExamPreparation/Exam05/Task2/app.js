class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
    this.totalPrice = 0;
  }

  loadingVegetables(vegetables) {
    let result = new Set();

    for (let i = 0; i < vegetables.length; i++) {
      let arr = vegetables[i].split(" ");
      let type = arr[0];
      let quantity = Number(arr[1]);
      let price = Number(arr[2]);

      if (this.availableProducts.find((p) => p.type === type)) {
        let searchedProduct = this.availableProducts.find(
          (p) => p.type === type
        );
        searchedProduct.quantity += quantity;

        if (price > searchedProduct.price) {
          searchedProduct.price = price;
        }

      } else {
        this.availableProducts.push({
          type,
          quantity,
          price,
        });
      }

      result.add(type);
    }

    return `Successfully added ` + Array.from(result).join(", ");
  }

  buyingVegetables (selectedProducts){
    let finalPrice = 0;
    let result = [];
    for(let i = 0;i < selectedProducts.length;i++){
        let currProductInfo = selectedProducts[i].split(' ');
        let type = currProductInfo[0];
        let quantity = Number(currProductInfo[1]);

        if (!this.availableProducts.find(p =>p.type === type)) {
            throw new Error(`${type} is not available in the store, your current bill is $${finalPrice.toFixed(2)}.`);
        }

        let searchedProduct = this.availableProducts.find(p =>p.type === type);

        if (quantity > searchedProduct.quantity) {
            throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${finalPrice.toFixed(2)}.`);
        }

        let price = searchedProduct.price * quantity;
        //this.totalPrice -= price;
        finalPrice += price;
        searchedProduct.quantity -= quantity;
        if (i + 1 === selectedProducts.length) {
            result.push(`Great choice! You must pay the following amount $${finalPrice.toFixed(2)}.`);
        }
        
        
    }

    return result.join('\n');
  }

  rottingVegetable (type, quantity){
    if (!this.availableProducts.find(p =>p.type === type)) {
        throw new Error(`${type} is not available in the store.`);
    }

    let searchedProduct = this.availableProducts.find(
        (p) => p.type === type
      );

      if (quantity > searchedProduct.quantity) {
        searchedProduct.quantity = 0;
        return `The entire quantity of the ${type} has been removed.`;
      }

      searchedProduct.quantity -= quantity;
      return `Some quantity of the ${type} has been removed.`;
  }

  revision (){
    let result = [];

    result.push("Available vegetables:");

    for(let product of this.availableProducts.sort((a,b)=> a.price - b.price)){
        result.push(`${product.type}-${product.quantity}-$${product.price}`);
    }

    result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)

    return result.join('\n');
  }

  
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());


/* let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"])); */


/* 
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
 console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
 console.log(vegStore.buyingVegetables(["Okra 1"]));
 console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
 console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"])); */



/* let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));  */
 