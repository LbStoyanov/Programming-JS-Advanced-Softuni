// function solve(year,month,day){
//     let nextDay = new Date(year, month - 1, day - 1);
//     let newYear = nextDay.getFullYear();
//     let newMonth = nextDay.getMonth() + 1;
//     let newDate = nextDay.getDate();
//     console.log(`${newYear}-${newMonth}-${newDate}`);
// }

// solve(2016, 5, 5); 

//Another Solution

function solve(year,month,day){
    let dateInput = `${year}-${month}-${day}`;
    let date = new Date(dateInput);
    date.setDate(date.getDate() - 1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

solve(2016, 5, 5);