function create(words) {
   let mainContainer = document.getElementById('content');
   let input = words;

   for (let i = 0; i < input.length; i++) {
      
      let div = document.createElement('div');
      let paragrah = document.createElement('p');
      let text = document.createTextNode(input[i]);

      paragrah.appendChild(text);
      paragrah.style.display = 'none';
      div.appendChild(paragrah);

      div.addEventListener('click',showParagraphs);
      mainContainer.appendChild(div);

   }

   function showParagraphs(event){
      event.target.children[0].style.display = 'inline';
   }

}