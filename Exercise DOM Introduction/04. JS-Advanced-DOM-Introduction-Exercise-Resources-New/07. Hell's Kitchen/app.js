function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {

      let inputData = JSON.parse(document.getElementById("inputs").children[1].value);

      
      for (let restInfo of inputData) {
            //Mikes - Steve 1000, Ivan 200, Paul 800
            
            let currRest = restInfo.split(' - ');

            let currRestName = currRest[0];
            //Mikes
            let currentWorkers = currRest[1].split(', ');
            
            //Steve 1000, Ivan 200, Paul 800
            let workers = [];

         for (let i = 0; i < currentWorkers.length; i+=2) {
            
            let currentWorkerInfo = currentWorkers[i].split(' ');

            let currentWorkerName = currentWorkerInfo[0];
            let currentWorkerSalary = Number(currentWorkerInfo[i + 1]);

            let worker = {
               workerName: currentWorkerName,
               workerSalary: currentWorkerSalary
            }

            workers.push(worker);
          
         }

         let restaurant = {
            restName: currRestName,
            workers
         }
      }
   
      let bestRestaurant = document.querySelector('#bestRestaurant p');
      let workers = document.querySelector('#workers p');

     //["Mikes - Steve 1000, Ivan 200, Paul 800","Fleet - Maria 850, Janet 650"]
   
   }
}

