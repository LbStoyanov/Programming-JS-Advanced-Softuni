window.addEventListener("load", solve);

function solve() {
  document.getElementById("publish-btn").addEventListener("click", createPost);
  document.getElementById('clear-btn').addEventListener('click',clearPost)
  let postTitle = document.getElementById("post-title");
  let postCategory = document.getElementById("post-category");
  let postContent = document.getElementById("post-content");
  let reviewSection = document.getElementById('review-list');
  let approveSection = document.getElementById('published-list');

  function createPost(e) {
    let titleValue = postTitle.value;
    let categoryValue = postCategory.value;
    let contentValue = postContent.value;

    if (!titleValue || !categoryValue || !contentValue) {
      return;
    }

    createDOMElements(titleValue,categoryValue,contentValue);
    clearInputFields();
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
    editButton.addEventListener('click',editPost);


    
    let approveButton = document.createElement('button');
    //editButton.setAttribute('class','action-btn');
    approveButton.classList.add('action-btn');
    approveButton.classList.add('approve');
    approveButton.textContent = 'Approve';
    approveButton.addEventListener('click',approvePost);


    li.appendChild(article);
    li.appendChild(editButton);
    li.appendChild(approveButton);

    reviewSection.appendChild(li);
  }

  function createArticle(titleValue,categoryValue,contentValue){
    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = titleValue;

    let p1 = document.createElement('p');
    p1.textContent = `Category: ${categoryValue}`;

    let p2 = document.createElement('p');
    p2.textContent = `Content: ${contentValue}`;

    

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);

    return article;
  }

  function editPost(e){
    let currentPost = e.target.parentElement;
    let articleContent = currentPost.getElementsByTagName('article')[0].children;

    let titleValue = articleContent[0].textContent;
    let categoryValue =articleContent[1].textContent;
    let contentValue = articleContent[2].textContent;

    postTitle.value = titleValue;
    postCategory.value = categoryValue.split(': ')[1];
    postContent.value = contentValue.split(': ')[1];

    currentPost.remove();
  }

  function approvePost(e){
 
    let currentPost = e.target.parentElement;
    approveSection.appendChild(currentPost);
    Array.from(currentPost.querySelectorAll('button')).forEach(x => x.remove());

  }

  function clearPost(e){
    Array.from(approveSection.children).forEach(x=>x.remove());
  }

  function clearInputFields(){
    postTitle.value = '';
    postCategory.value = '';
    postContent.value = '';
  }
}

