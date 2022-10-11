function notify(message) {
  //let button = document.getElementsByTagName('button')[0];

  let notificationDiv = document.getElementById('notification');

  notificationDiv.textContent = message;

  if (notificationDiv.style.display !== "none") {
    notificationDiv.style.display = "none";
  } else {
    notificationDiv.style.display = "block";
  }

  

  notificationDiv.addEventListener('click',()=>{
    notificationDiv.style.display = "none";
  })
  
}