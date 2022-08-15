function solve() {
    //1.Take the input from the browser.
    let input = document.getElementById('input');
    //2.Convert the taken input into splitted by . array.
    let textArray = input.value.split('.').filter(s => s !== '');
    let resultDiv = document.getElementById('output');

    while (textArray.length > 0) {
      let text = textArray.splice(0,3).join('. ') + '.';
      let p = document.createElement('p');
      p.textContent = text;
      resultDiv.appendChild(p);
    }
    
}