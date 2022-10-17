window.addEventListener("load", solve);

function solve() {
  document.getElementById("publish-btn").addEventListener("click", createPost);
  let postTitle = document.getElementById("post-title");
  let postCategory = document.getElementById("post-category");
  let postContent = document.getElementById("post-content");
  let reviewSection = document.getElementById('review-list');

 



  function createPost(e) {
    let titleValue = postTitle.value;
    let categoryValue = postCategory.value;
    let contentValue = postContent.value;

    if (!titleValue || !categoryValue || !contentValue) {
      return;
    }

    createDOMElements(titleValue,categoryValue,contentValue);


  }

  function createDOMElements(titleValue,categoryValue,contentValue){
    let li = document.createElement('li');
    li.classList.add('rpost');

    let article = createArticle(titleValue,categoryValue,contentValue);

    let editButton = document.createElement('button');
    //editButton.setAttribute('class','action-btn');
    editButton.classList.add('action-btn');
    editButton.classList.add('edit');
    editButton.textContent = 'Edit';


    
    let approveButton = document.createElement('button');
    //editButton.setAttribute('class','action-btn');
    approveButton.classList.add('action-btn');
    approveButton.classList.add('approve');
    approveButton.textContent = 'Approve';


    li.appendChild(article);
    li.appendChild(editButton);
    li.appendChild(approveButton);

    reviewSection.appendChild(li);
  }

  function createArticle(titleValue,categoryValue,contentValue){
    let h4 = document.createElement('h4');
    h4.textContent = titleValue;
    let p1 = document.createElement('p');
    p1.textContent = `Category: ${categoryValue}`;
    let p2 = document.createElement('p');
    p2.textContent = `Content: ${contentValue}`;
    let article = document.createElement('article');
    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);

    return article;
  }
}

