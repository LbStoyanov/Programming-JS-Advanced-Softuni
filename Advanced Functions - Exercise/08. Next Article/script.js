function getArticleGenerator(input) {
    
    let articles = input;

    return () =>{
       
            if (articles.length > 0) {
                let contentElement = document.getElementById('content');
            let article = document.createElement('article');
            let currentText = articles.shift();
            article.innerText = currentText;
            contentElement.appendChild(article);
            }
        
    }
}
