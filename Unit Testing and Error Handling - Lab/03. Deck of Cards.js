

function printDeckOfCards(cards) {
    function createCard (face,suit){
        const faces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        const suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        }
        
    
        if (!faces.includes(face) || !suits[suit]) {
            throw new Error('Invalid face or suit');
        }
    
        let card = {
            face,
            suit,
            toString(){
                console.log(this.face + suits[this.suit]);
            }
        }
    
        return card;
    }
    
        let face ='';
        let suit = '';

    for(let i = 0; i < cards.length;i++){
        
       
    }
  }
  
  printDeckOfCards(['AS', '10D', 'KH', '2C']);
