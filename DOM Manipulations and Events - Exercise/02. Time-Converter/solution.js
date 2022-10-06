function attachEventsListeners() {
  let buttons = Array.from(document.querySelectorAll("input[type=button]"));
 
  for(let button of buttons){
    button.addEventListener("click",convert);
  }

  function convert(e){
    let value = Number(e.target.parentElement.querySelector("input[type=text]").value);
    let unit = e.target.id;

    if (unit === "daysBtn") {
      calculate(value);
    }else if (unit === "hoursBtn") {
      calculate(value / 24);
    }else if (unit === "minutesBtn") {
      calculate(value / 24 / 60);
    }else if (unit === "secondsBtn") {
      calculate(value / 24 / 60 / 60);
    }
  }

  function calculate(value){
    let inputs = Array.from(document.querySelectorAll("input[type=text]"));
    inputs.shift().value = value;
    let currentValue = value * 24;
    for(let input of inputs){
      input.value = currentValue;
      currentValue *= 60;
    }
  }
}
  // let days = document.getElementById("days");
  // //let daysButton = document.getElementById("daysBtn");
  // let hours = document.getElementById("hours");
  // //let hoursButton = document.getElementById("hoursBtn");
  // let minutes = document.getElementById("minutes");
  // //let minutesButton = document.getElementById("minutesBtn");
  // let seconds = document.getElementById("seconds");
  // //let secondsButton = document.getElementById("secondsBtn");


  // let conversionObject = {
  //       day:1,
  //       hour:24,
  //       minute:1440,
  //       second:86400
  // };
  
  // document.getElementById("daysBtn").addEventListener('click',onConvert);
  // document.getElementById("hoursBtn").addEventListener('click',onConvert);
  // document.getElementById("minutesBtn").addEventListener('click',onConvert);
  // document.getElementById("secondsBtn").addEventListener('click',onConvert);

  // function onConvert(event){
    
  // }

//   let currentDays = 0;
//   let currentHours = 0;
//   let currentMinutes = 0;
//   let currentSeconds = 0;

//   daysButton.addEventListener("click", function (e) {
//     currentDays = days.value;
//     currentHours = currentDays * 24;
//     currentMinutes = currentHours * 60;
//     currentSeconds = currentMinutes * 60;
//     hours.value = currentHours;
//     minutes.value = currentMinutes;
//     seconds.value = currentSeconds;
//   });

//   hoursButton.addEventListener("click", function (e) {
//     currentHours = hours.value;
//     currentDays = currentHours / 24;
//     currentMinutes = currentHours * 60;
//     currentSeconds = currentMinutes * 60;
//     days.value = currentDays;
//     minutes.value = currentMinutes;
//     seconds.value = currentSeconds;
//   });

//   minutesButton.addEventListener("click", function (e) {
//     currentMinutes = minutes.value;
//     currentHours = currentMinutes / 60;
//     currentDays = currentHours / 24;
//     currentSeconds = currentMinutes * 60;
//     days.value = currentDays;
//     hours.value = currentHours;
//     seconds.value = currentSeconds;
//   });

//   secondsButton.addEventListener("click", function (e) {
//     currentSeconds = seconds.value;
//     currentMinutes = currentSeconds / 60;
    
//     minutes.value = currentMinutes;
//     currentHours = currentMinutes / 60;
//     hours.value = currentHours;

//     currentDays = currentHours / 24;
//     days.value = currentDays;
    
//   });

