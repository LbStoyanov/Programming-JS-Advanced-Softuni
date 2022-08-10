function search() {
   let towns = document.querySelectorAll('ul li');
   let searchedText = document.getElementById('searchText').value;
 
   let townsArr = Array.from(towns);
   let foundMatches = 0;

   for (let town of towns) {
      if (town.textContent.includes(searchedText)) {
         foundMatches++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }
      else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   let result = document.getElementById('result');
   
   result.textContent = `${foundMatches} matches found`;
}
