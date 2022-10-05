function solve() {

   let buttons = Array.from(document.getElementsByTagName('button'));
   let prices = Array.from(document.getElementsByClassName('product-line-price'));
   let productsNames = Array.from(document.getElementsByClassName('product-title'));
   let breadButton = buttons[0];
   let milkButton = buttons[1];
   let tomatoesButton = buttons[2];
   let checkoutButton = buttons[3];
   let totalSum = 0;
   let productsList = [];
   let textArea = document.getElementsByTagName('textarea')[0];
   let areProductBoughts = [false,false,false];
   debugger;

   breadButton.addEventListener('click',()=>{

      let breadPrice = Number(prices[0].textContent);
      let productName = productsNames[0].textContent;

      if (areProductBoughts[0]) {
         textArea.textContent += `Added ${productName} for ${breadPrice.toFixed(2)} to the cart.\n`
         
      }else {
         areProductBoughts[0] = true;
      
      productsList.push(productName);
      totalSum += breadPrice;
      textArea.textContent += `Added ${productName} for ${breadPrice.toFixed(2)} to the cart.\n`
      }

   })

   milkButton.addEventListener('click',()=>{

      let milkPrice = Number(prices[1].textContent);
      let productName = productsNames[1].textContent;

      if (areProductBoughts[1]) {
         textArea.textContent += `Added ${productName} for ${milkPrice.toFixed(2)} to the cart.\n`
      }else {
         areProductBoughts[1] = true;
         productsList.push(productName);
         totalSum += milkPrice;
         textArea.textContent += `Added ${productName} for ${milkPrice.toFixed(2)} to the cart.\n`
      }
      
   })

   tomatoesButton.addEventListener('click',()=>{
      let tomatoePrice = Number(prices[2].textContent);
      let productName = productsNames[2].textContent;

      if (areProductBoughts[2]) {
         textArea.textContent += `Added ${productName} for ${tomatoePrice.toFixed(2)} to the cart.\n`
      }else {
         areProductBoughts[2] = true;
         productsList.push(productName);
         totalSum += tomatoePrice;
         textArea.textContent += `Added ${productName} for ${tomatoePrice.toFixed(2)} to the cart.\n`
      }
      
   })

   checkoutButton.addEventListener('click',()=>{
      
      textArea.textContent += `You bought ${productsList.join(", ")} for ${totalSum.toFixed(2)}.`;
      buttons.forEach(x => x.disabled = true);
   })

}