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
        currentTrack: {trackName: null, artist: null}            
    }
};


assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
