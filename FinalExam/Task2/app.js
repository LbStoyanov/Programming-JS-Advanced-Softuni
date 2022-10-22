class footballTeam {
    constructor(clubName,country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }


    newAdditions(footballPlayers){
       
       for (let i = 0; i < footballPlayers.length; i++) {
        let currentPlayer = footballPlayers[i].split('/');
        let name = currentPlayer[0];
        let age = currentPlayer[1];
        let playerValue = currentPlayer[2];

        if (this.invitedPlayers.some(p=>p.name === name)) {
            let searchedPlayer = this.invitedPlayers.find(p=>p.name === name);
            if (searchedPlayer.playerValue < playerValue) {
                searchedPlayer.playerValue = playerValue;
                continue;
            }
        }else {
            this.invitedPlayers.push({
                name,
                age,
                playerValue
            })
        }      
       }

       let result =[];

       for(let pl of this.invitedPlayers){
            result.push(pl.name);
       }

       
       return `You successfully invite ${result.join(', ')}.`;

    }


    signContract(selectedPlayer){
        
        let playerInfo = selectedPlayer.split('/');
        let name = playerInfo[0];
        let playerOffer = playerInfo[1];
        
        if (!this.invitedPlayers.some(p=>p.name === name)) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        let searchedPlayer = this.invitedPlayers.find(p=>p.name === name);

        if (searchedPlayer.playerValue > playerOffer) {
            let priceDifference = searchedPlayer.playerValue - playerOffer;

            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }

        searchedPlayer.playerValue = 'Bought';
        
        return `Congratulations! You sign a contract with ${searchedPlayer.name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age){
        if (!this.invitedPlayers.some(p=>p.name === name)) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        let searchedPlayer = this.invitedPlayers.find(p=>p.name === name);

        if (searchedPlayer.age < age) {
            let ageDifference = age - searchedPlayer.age;

            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
            }else if (ageDifference > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        }else if (searchedPlayer.age>= age) {
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult(){
        let result = 'Players list:\n';

        let orderedPlayers = this.invitedPlayers.sort((a,b)=>a.name.localeCompare(b.name));

        for(let player of orderedPlayers){
            result += `Player ${player.name}-${player.playerValue}"\n`;
        }

        return result.slice(0,result.length - 1);
    }
}




let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

