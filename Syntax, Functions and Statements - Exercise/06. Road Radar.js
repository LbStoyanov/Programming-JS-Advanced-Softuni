function solve(speed, area){

    const motorway = 130;
    const interstate = 90;
    const city = 50;
    const residential = 20;


    let status = function(difference){
        if (difference <= 20) {
            return 'speeding';
        }else if (difference <= 40) {
            return 'excessive speeding';
        }else{
            return 'reckless driving';
        }
    };

    let difference = 0;

    if (area === 'motorway') {
        if (speed <= motorway) {
            console.log(`Driving ${speed} km/h in a ${motorway} zone`);
        }else{
            difference = speed - motorway;
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorway} - ${status(difference)}`);
        }
    }else if (area == 'interstate') {
        if (speed <= interstate) {
            console.log(`Driving ${speed} km/h in a ${interstate} zone`);
        }else{
            difference = speed - interstate;
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstate} - ${status(difference)}`);
        }
    } else if (area == 'city') {
        if (speed <= city) {
            console.log(`Driving ${speed} km/h in a ${city} zone`);
        }else{
            difference = speed - city;
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${city} - ${status(difference)}`);
        }
    }else{
        if (speed <= residential) {
            console.log(`Driving ${speed} km/h in a ${residential} zone`);
        }else{
            difference = speed - residential;
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residential} - ${status(difference)}`);
        }
    }

}

solve(21, 'residential');