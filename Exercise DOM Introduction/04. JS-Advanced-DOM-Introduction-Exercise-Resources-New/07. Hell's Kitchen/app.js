function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {

      let inputData = JSON.parse(document.getElementById("inputs").children[1].value);

    
      let allRestaurants = [];
      

      for (let restInfo of inputData) {
            //Mikes - Steve 1000, Ivan 200, Paul 800
            
            let currRest = restInfo.split(' - ');

            

            let currRestName = currRest[0];
            //Mikes
            let currentWorkers = currRest[1].split(', ');

            let workersArr = [];
            let totalSalary = 0;
            
            //Steve 1000, Ivan 200, Paul 800
            

         for (let i = 0; i < currentWorkers.length; i++) {
            
            let currentWorkerInfo = currentWorkers[i].split(' ');

            let currentWorkerName = currentWorkerInfo[0];
            let currentWorkerSalary = Number(currentWorkerInfo[1]);
            totalSalary += currentWorkerSalary;

            let worker = {
               workerName: currentWorkerName,
               workerSalary: currentWorkerSalary,
            }

            workersArr.push(worker);
         }

         let restaurant = {
            restName: currRestName,
            workersArr,
            averageSalary: totalSalary / workersArr.length,
            workersCount: workersArr.length
         }

         if (!allRestaurants.includes(restaurant)) {
            allRestaurants.push(restaurant);
         }else {
            allRestaurants.find(restaurant)
         }
         

      }



      let bestRestaurant = document.querySelector('#bestRestaurant p');
      bestRestaurant.textContent =
       `Name: ${0} Average Salary: ${0} Best Salary: ${0}`;



      let workers = document.querySelector('#workers p');
      workers.textContent = `Name: ${0} With Salary: ${0}`;

     //["Mikes - Steve 1000, Ivan 200, Paul 800","Fleet - Maria 850, Janet 650"]
   
   }
}

