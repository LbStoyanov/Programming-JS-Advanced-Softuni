const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis',

    hasClima(car){
        car = {
            temp: 21,
            tempSettings: 21,
            adjustTemp: function(){
                if (this.temp < this.tempSettings) {
                    this.temp += 1;
                }else if (this.temp > this.tempSettings) {
                    this.temp -=1;
                }
            }

        };
    },

    
    hasAudio(car){
        car = {
            currentTrack: {trackName: null, artist: null},
            nowPlaying: function(){
                if (this.currentTrack !== null) {
                    console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`);
                } 
            }    
        }        
    },

    hasParktronic(car){
        car = {
            checkDistance: function(distance){
                
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                }else if (distance >= 0.1 && distance < 0.25) {
                    console.log('Beep! Beep!');
                }else if (distance >= 0.25 && distance < 0.5) {
                    console.log('Beep!');
                }else {
                    console.log('');
                }
            }
        }
    }
};


assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
