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
            let bestSalary = 0; 
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

            if (currentWorkerSalary > bestSalary) {
               bestSalary = currentWorkerSalary;
            }

            workersArr.push(worker);
         }

         let restaurant = {
            restName: currRestName,
            workersArr,
            bestSalary,
            averageSalary: totalSalary / workersArr.length,
            workersCount: workersArr.length
         }

         if (!allRestaurants.includes(restaurant)) {
            allRestaurants.push(restaurant);
         }else{
            allRestaurants.find(restaurant).workersArr.push(workersArr);
          }
        
         
      }

      let avSal = allRestaurants[0];

      for (let i = 1; i < allRestaurants.length; i++) {
        if (allRestaurants[i].averageSalary > avSal.averageSalary) {
         avSal = allRestaurants[i];
        }
      }

      let bestRestaurant = document.querySelector('#bestRestaurant p');

      bestRestaurant.textContent =
       `Name: ${avSal.restName} Average Salary: ${avSal.averageSalary.toFixed(2)} Best Salary: ${avSal.bestSalary.toFixed(2)}`;

      let workers = document.querySelector('#workers p');

      let result = [];

      let sortedWorkers = avSal.workersArr.sort((a,b) => b.averageSalary - a.averageSalary);

      for (let worker of sortedWorkers) {
         result.push(`Name: ${worker.workerName} With Salary: ${worker.workerSalary.toFixed(2)}`);
      }

      workers.textContent = result.join(' ');
      

     //["Mikes - Steve 1000, Ivan 200, Paul 800","Fleet - Maria 850, Janet 650"],"Mikes - Bako 1000"]
   
   }
}

