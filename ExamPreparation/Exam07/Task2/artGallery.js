class ArtGallery{
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = {"picture":200,"photo":50,"item":250};
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle( articleModel, articleName, quantity ){
        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error("This article model is not included in this gallery!");
        }

        if (this.listOfArticles.some(a=>a.articleName === articleName)) {
            let searchedArticle = this.listOfArticles.find(a=>a.articleName === articleName);
            if (searchedArticle.articleModel === articleModel) {
                searchedArticle.quantity += quantity;
            }
        }else{
            this.listOfArticles.push({
                articleModel: articleModel.toLowerCase(),
                articleName,
                quantity
            })
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;   
    }

    inviteGuest ( guestName, personality){
        if (this.guests.some(g=>g.guestName === guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }
        let points = 0;

        if (personality === 'Vip') {
            points = 500;
        }else if (personality === 'Middle') {
            points = 250;
        }else {
            points = 50;
        }

        this.guests.push({
            guestName,
            points,
            purchaseArticle: 0,
        })

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle ( articleModel, articleName, guestName){
        if (!this.listOfArticles.some(a=>a.articleName === articleName)) {
            throw new Error("This article is not found.");
        }

        let currentArticle = this.listOfArticles.find(a=>a.articleName === articleName);

        if (currentArticle.articleModel !== articleModel) {
            throw new Error("This article is not found.");
        }

        if (currentArticle.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        if (!this.guests.some(g=>g.guestName === guestName)) {
            return "This guest is not invited.";
        }

        let currentGuest = this.guests.find(g=>g.guestName === guestName);
        let necessaryPoints = this.possibleArticles[articleModel];

        if (necessaryPoints > currentGuest.points) {
            return "You need to more points to purchase the article.";
        }else {
            currentGuest.points -= necessaryPoints;
            currentGuest.purchaseArticle++;
            currentArticle.quantity--;
        }

        return `${guestName} successfully purchased the article worth ${necessaryPoints} points.`;

    }

    showGalleryInfo (criteria){
        let result = [];
        if (criteria === 'article') {
            result.push('Articles information:\n');

            for(let art of this.listOfArticles){
                result.push(`${art.articleModel} - ${art.articleName} - ${art.quantity}\n`);
            }
        }else if (criteria === 'guest') {
            result.push('Guest information:\n');

            for(let guest of this.guests){
                result.push(`${guest.guestName} - ${guest.purchaseArticle}\n`);
            }
        }

        return result.join('');
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

/* const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));
 */
/* John successfully purchased the article worth 200 points.
 Peter successfully purchased the article worth 250 points. 
 This article is not found. */



/* const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.inviteGuest('John', 'Vip'));
console.log(artGallery.inviteGuest('Peter', 'Middle'));
console.log(artGallery.inviteGuest('John', 'Middle'));
 */

/* const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
 */