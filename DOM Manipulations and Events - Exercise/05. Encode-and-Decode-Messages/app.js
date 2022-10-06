function encodeAndDecodeMessages() {

  let buttons = document.querySelectorAll("button");
  let textAreas = document.getElementsByTagName("textarea");
  let senderTextArea = textAreas[0];
  let receiverTextArea = textAreas[1];
  
  let encodeButton = buttons[0];
  let decodeButton = buttons[1];

  encodeButton.addEventListener("click",encode);
  decodeButton.addEventListener("click",decode);

  function encode(e) {
    let message = e.target.parentElement.children[1].value;
    let result = [];
    
    for(let i =0;i < message.length;i++){
        let currentAschiValue = Number(message.charCodeAt(i));
        let newAschiValue = currentAschiValue + 1;
        let newChar = String.fromCharCode(newAschiValue);
        result.push(newChar);
    }
    
    senderTextArea.value = '';
    receiverTextArea.value = result.join("");

  }

  function decode(e) {
    let message = e.target.parentElement.children[1].value;
    let result = [];
    
    for(let i =0;i < message.length;i++){
        let currentAschiValue = Number(message.charCodeAt(i));
        let newAschiValue = currentAschiValue - 1;
        let newChar = String.fromCharCode(newAschiValue);
        result.push(newChar);
    }
    
    //senderTextArea.value = '';
    receiverTextArea.value = result.join("");
  }

}

//The password for my bank account is 123pass321
