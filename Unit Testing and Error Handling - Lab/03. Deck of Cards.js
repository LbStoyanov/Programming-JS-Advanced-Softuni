function printDeckOfCards(cards) {
    let errorMessage = '';
    let flag = false;
  function createCard(face, suit) {
    const faces = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    const suits = {
      S: "\u2660",
      H: "\u2665",
      D: "\u2666",
      C: "\u2663",
    };

    if (!faces.includes(face) || !suits[suit]) {
        errorMessage = `Invalid card: ${face}${suit}`;
      flag = true;
      return errorMessage;
    }

    let card = {
      face,
      suit,
      toString() {
        return this.face + suits[this.suit];
      },
    };

    return card;
  }

  let result = [];

  for (let i = 0; i < cards.length; i++) {
    let face = "";
    let suit = "";
    let currentCard = cards[i];

    for (let j = 0; j < currentCard.length; j++) {
      if (j === currentCard.length - 1) {
        suit = currentCard[j];
        break;
      }
      face += currentCard[j];
    }

    let card = createCard(face, suit);
    if (card === undefined) {
        return;
    }
    result.push(card);
  }

  if (flag) {
    return errorMessage;
  }

  let deck = [];

  for (let obj of result) {
    deck.push(obj);
  }

  return deck.join(" ");
}


  console.log(printDeckOfCards(["AS", "10D", "KH", "1C"]));

