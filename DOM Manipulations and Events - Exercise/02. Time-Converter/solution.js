function attachEventsListeners() {
  let days = document.getElementById("days");
  let daysButton = document.getElementById("daysBtn");
  let hours = document.getElementById("hours");
  let hoursButton = document.getElementById("hoursBtn");
  let minutes = document.getElementById("minutes");
  let minutesButton = document.getElementById("minutesBtn");
  let seconds = document.getElementById("seconds");
  let secondsButton = document.getElementById("secondsBtn");

  let currentDays = 0;
  let currentHours = 0;
  let currentMinutes = 0;
  let currentSeconds = 0;

  daysButton.addEventListener("click", function (e) {
    currentDays = days.value;
    currentHours = currentDays * 24;
    currentMinutes = currentHours * 60;
    currentSeconds = currentMinutes * 60;
    hours.value = currentHours;
    minutes.value = currentMinutes;
    seconds.value = currentSeconds;
  });

  hoursButton.addEventListener("click", function (e) {
    currentHours = hours.value;
    currentDays = currentHours / 24;
    currentMinutes = currentHours * 60;
    currentSeconds = currentMinutes * 60;
    days.value = currentDays;
    minutes.value = currentMinutes;
    seconds.value = currentSeconds;
  });

  minutesButton.addEventListener("click", function (e) {
    currentMinutes = minutes.value;
    currentHours = currentMinutes / 60;
    currentDays = currentHours / 24;
    currentSeconds = currentMinutes * 60;
    days.value = currentDays;
    hours.value = currentHours;
    seconds.value = currentSeconds;
  });

  secondsButton.addEventListener("click", function (e) {
    currentSeconds = seconds.value;
    currentMinutes = currentSeconds / 60;
    
    minutes.value = currentMinutes;
    currentHours = currentMinutes / 60;
    hours.value = currentHours;

    currentDays = currentHours / 24;
    days.value = currentDays;
    
  });
}
