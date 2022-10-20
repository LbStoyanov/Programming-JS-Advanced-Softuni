class SummerCamp{
    constructor(organizer,location){
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {'child':150,'student': 300,'collegian': 500};
        this.listOfParticipants = [];
    }

    registerParticipant (name, condition, money){
        if (condition !== 'child' && condition !== 'student' && condition !== 'collegian') {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (this.listOfParticipants.some(p => p.name === name)) {
            return `The ${name} is already registered at the camp.`;
        }

        let searchedPrice = this.priceForTheCamp[condition];

        if (money < searchedPrice) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        })

        return `The ${name} was successfully registered.`;

    }


    unregisterParticipant (name){
        if (!this.listOfParticipants.some(p => p.name === name)) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }

        this.listOfParticipants = this.listOfParticipants.filter(x => x.name !== name);

        return `The ${name} removed successfully.`

    }

    timeToPlay (typeOfGame, participant1, participant2){
        if (typeOfGame === 'WaterBalloonFights') {

            let firstPlayer = this.listOfParticipants.find(p=>p.name === participant1);
            let secondPlayer = this.listOfParticipants.find(p=>p.name === participant2);

            if (firstPlayer === undefined || secondPlayer === undefined) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (firstPlayer.condition !== secondPlayer.condition ) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (firstPlayer.power > secondPlayer.power) {
                firstPlayer.wins++;
                return `The ${firstPlayer.name} is winner in the game ${typeOfGame}.`;
            }else if (secondPlayer.power > firstPlayer.power) {
                secondPlayer.wins++;
                return `The ${secondPlayer.name} is winner in the game ${typeOfGame}.`;
            }else {
                return `There is no winner.`;
            }


        }else {
            let curretnPlayer = this.listOfParticipants.find(p=>p.name === participant1);

            if (curretnPlayer === undefined) {
                return `Invalid entered name/s.`;
            }
            curretnPlayer.power += 20;
            return `The ${curretnPlayer.name} successfully completed the game ${typeOfGame}.`;
        }
        
    }

    toString () {
        let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;
        let orderedParticipants = this.listOfParticipants.sort((a,b)=> b.wins - a.wins);

        for(let player of orderedParticipants){
            result += `${player.name} - ${player.condition} - ${player.power} - ${player.wins}\n`;
        }

        return result.slice(0,result.length - 1);
    }

}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

/* const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.unregisterParticipant("Petar"));
console.log(summerCamp.unregisterParticipant("Petar Petarson"));
 */


/* const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200)); */


