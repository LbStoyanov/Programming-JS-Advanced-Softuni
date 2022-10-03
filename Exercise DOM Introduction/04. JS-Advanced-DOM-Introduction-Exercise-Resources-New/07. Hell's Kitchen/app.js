function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {

      let inputData = document.querySelector('#inputs textarea').value.replaceAll("[", "_");
      console.log(inputData);
     

   //   for (let el of arr) {
   //     console.log(el);
   //     break;
   //   }
      // console.log(inputData[0]);
      // console.log(inputData[1]);
      // console.log(inputData[2]);

      let bestRestaurant = document.querySelector('#bestRestaurant p');
      let workers = document.querySelector('#workers p');

     
      
     for (let restaurant of inputData) {
         //["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300,Joe 780, Jane 660"];
         let restInfo = restaurant.split('-');
         //console.log(typeof(restInfo));
        
        for (let i = 0; i < restInfo.length; i++) {
            //console.log(restInfo[i]);
            break;
        }
     }
      
      
   }
}

