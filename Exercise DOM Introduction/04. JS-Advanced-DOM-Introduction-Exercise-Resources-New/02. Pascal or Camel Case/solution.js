function solve() {
  let originalText = document.getElementById("text").value;
  let requestedFormat = document.getElementById("naming-convention").value;
  let transformation = '';

  if (requestedFormat === "Camel Case") {

    for (var i = 0; i < originalText.length; i++) {
        if (originalText[i] === ' ') {
            transformation += originalText[i + 1].toUpperCase();
            i++;
        }else{
            transformation += originalText[i].toLowerCase();
        }
    }
  } else if (requestedFormat === "Pascal Case") {
    for (var i = 0; i < originalText.length; i++) {
        if (originalText[i] === ' ') {
            transformation += originalText[i + 1].toUpperCase();
            i++;
        }else{
            if (i === 0) {
                transformation += originalText[i].toUpperCase();
                continue;
            }
            transformation += originalText[i].toLowerCase();
        }
    }
    
  } else {
    transformation = "Error!";
  }

  let result = document.getElementById("result");
  result.textContent = transformation;
}
