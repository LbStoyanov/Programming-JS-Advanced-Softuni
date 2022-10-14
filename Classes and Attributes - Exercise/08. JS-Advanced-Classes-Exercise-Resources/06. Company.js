class Company {
    constructor(){
        this.departments = [];
    }


    addEmployee(name, salary, position, department){
    class Company {
    constructor(){
        this.departments = [];
    }


    addEmployee(name, salary, position, department){

        if ([...arguments].some(a => a === null || a === undefined || a === '') || salary < 0) {
            throw new Error('Invalid input!');
        }

        let currentWorker = {
            name,
            position,
            salary
       }

        let currentDepartment = {};

        if (!this.departments.find(d => d.name === department)) {
            currentDepartment = {
                workers: [],
                name: department,
                totalSalaries: 0,
           }

           currentDepartment.workers.push(currentWorker);
           currentDepartment.totalSalaries += Number(currentWorker.salary);
           this.departments.push(currentDepartment);
        
        }else {
            currentDepartment = this.departments.find(d => d.name === department);
            currentDepartment.workers.push(currentWorker);
            currentDepartment.totalSalaries += Number(currentWorker.salary);
           
        }
       
        console.log(`New employee is hired. Name: ${name}. Position: ${position}`);
       return;

    }


    bestDepartment(){
        let bestAverageSalary = 0;

        let bestDepartment = {
           
        }

        for(let dep of this.departments){

            let currentAverageSalary = dep.totalSalaries / dep.workers.length;

            if (currentAverageSalary > bestAverageSalary) {
                bestAverageSalary = currentAverageSalary;
                bestDepartment = dep;
            }
        }

        let result = '';
        result += `Best Department is: ${bestDepartment.name}\nAverage salary: ${bestAverageSalary.toFixed(2)}\n`;
        let orderedByFirstCriteria = bestDepartment.workers.sort((a,b) => b.salary - a.salary || a.name.localeCompare(b.name));
        
        
        

        for(let worker of orderedByFirstCriteria){
            result += `${worker.name} ${worker.salary} ${worker.position}\n`;
        }

        return result;
                
    }
}
        let currentWorker = {
            name,
            position,
            salary
       }

        let currentDepartment = {};

        if (!this.departments.find(d => d.name === department)) {
            currentDepartment = {
                workers: [],
                name: department,
                totalSalaries: 0,
           }

           currentDepartment.workers.push(currentWorker);
           currentDepartment.totalSalaries += Number(currentWorker.salary);
           this.departments.push(currentDepartment);
        
        }else {
            currentDepartment = this.departments.find(d => d.name === department);
            currentDepartment.workers.push(currentWorker);
            currentDepartment.totalSalaries += Number(currentWorker.salary);
           
        }
       
        console.log(`New employee is hired. Name: ${name}. Position: ${position}`);
       return;

    }


    bestDepartment(){
        let bestAverageSalary = 0;

        let bestDepartment = {
           
        }

        for(let dep of this.departments){

            let currentAverageSalary = dep.totalSalaries / dep.workers.length;

            if (currentAverageSalary > bestAverageSalary) {
                bestAverageSalary = currentAverageSalary;
                bestDepartment = dep;
            }
        }

        let result = '';
        result += `Best Department is: ${bestDepartment.name}\nAverage salary: ${bestAverageSalary.toFixed(2)}\n`;
        let orderedByFirstCriteria = bestDepartment.workers.sort((a,b) => b.salary - a.salary || a.name.localeCompare(b.name));
        
        
        

        for(let worker of orderedByFirstCriteria){
            result += `${worker.name} ${worker.salary} ${worker.position}\n`;
        }

        return result;
                
    }


}





let c = new Company();


/* c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment()); */


c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());