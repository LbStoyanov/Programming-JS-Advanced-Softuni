class SmartHike{
    constructor(username){
        this.username = username;
        this.goals = [];
        this.listOfHikes = [];
        this.resources = 100;

    }

    addGoal(peak,altitude){

        if(this.goals.includes(x => x.peak === peak)){
            return `${peak} has already been added to your goals`;
        }


        let currentGoal = {
            peak: peak,
            altitude: altitude
        }

        this.goals.push(currentGoal);
        
        return `You have successfully added a new goal - ${peak}`;
    }

    hike (peak, time, difficultyLevel){

        if(!this.goals.find(x => x.peak === peak)){
            throw new Error(`${peak} is not in your current goals`);
        }

        if (this.resources === 0) {
            throw new Error("You don't have enough resources to start the hike");
        }

        let difference = (this.resources - (time * 10));

        if (difference < 0) {
            return "You don't have enough resources to complete the hike";
        }

        this.resources -= difference;

        let hike = {
            peak,
            time,
            difficultyLevel
        }

        this.listOfHikes.push(hike);

        return `You hiked ${peak} peak for ${time} hours and you have ${difference}% resources left`;

    }


    rest(time){
        

        if (this.resources >= 100) {
            this.resources = 100;

            return `Your resources are fully recharged. Time for hiking!`;
        }

        this.resources += Number(time) * 10;


        return `You have rested for ${time} hours and gained ${time*10}% resources`
    }

    showRecord (criteria){
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }

        let bestHike = this.listOfHikes.filter(x => x.difficultyLevel === criteria).sort((a,b) => a.time - b.time);

        if (bestHike) {
            return `${this.username} has not done any ${criteria} hiking yet`;
        }

        if (criteria === 'all') {
            let result = 'All hiking records:';

            for(let hike of this.listOfHikes){
                result += 
            }
        }

        //console.log(bestHike);

        return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`


    }
}


/* const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.addGoal('Rui', 1706));
console.log(user.addGoal('Musala', 2925)); */

/* const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.addGoal('Rui', 1706));
console.log(user.hike('Musala', 8, 'hard'));
console.log(user.hike('Rui', 3, 'easy'));
console.log(user.hike('Everest', 12, 'hard')); */


/* const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.hike('Musala', 8, 'hard'));
console.log(user.rest(4));
console.log(user.rest(5)); */

/* const user = new SmartHike('Vili');
console.log(user.showRecord('all'));
 */


const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));

