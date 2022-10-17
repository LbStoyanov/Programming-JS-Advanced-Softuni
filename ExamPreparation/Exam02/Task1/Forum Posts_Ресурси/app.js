window.addEventListener("load", solve);


function solve(){
    document.getElementById('publish-btn').addEventListener('click',createPost);

    function createPost(){
      
    }
}

/* function solve() {
  let originalTitle = '';
  let originalCategory = '';
  let originalContent = '';

  let postTitle = document.getElementById('post-title');
  let postCategory = document.getElementById('post-category');
  let postContent = document.getElementById('post-content');
  
  let ulElement = document.getElementById('review-list');

  let editBtn = document.createElement('button');
  let approveBtn = document.createElement('button');

  let publishButton = document.getElementById('publish-btn').addEventListener('click',(e) =>{

    if(postTitle.value !==''){
    
      let li = document.createElement('li');
      let article = document.createElement('article');
      let h4 = document.createElement('h4');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      h4.textContent = postTitle.value;
      originalTitle = postTitle.value;
      originalCategory = postCategory.value;
      originalContent = postContent.value;
      p1.textContent = `Category: ${postCategory.value}`;
      p2.textContent = `Content: ${postContent.value}`;
    
      article.appendChild(h4);
      article.appendChild(p1);
      article.appendChild(p2);

      li.setAttribute('class','rpost');
      li.appendChild(article);
      
      
      editBtn.innerText = 'Edit';
      editBtn.setAttribute('class','action-btn');
      
      approveBtn.innerText = 'Approve';
      approveBtn.setAttribute('class','action-btn');

      
      li.appendChild(approveBtn);
      li.appendChild(editBtn);

      ulElement.appendChild(li);

      clearInputFields();
     
    }
  });

  editBtn.addEventListener('click' ,(e) =>{


    postTitle.value = originalTitle;
    postCategory.value = originalCategory;
    postContent.value = originalContent;

    let elementForRemove = document.getElementById('review-list').children[0];
    ulElement.removeChild(elementForRemove);
  })


  approveBtn.addEventListener('click', (e) =>{
    let li = document.getElementsByClassName('rpost')[0];
    let article = li.children[0];
    let editBtn = li.children[1];
    let approveBtn = li.children[2];
    li.removeChild(editBtn);
    li.removeChild(approveBtn);

    let publishedList = document.getElementById('published-list');
    publishedList.appendChild(li);

  })

  function clearInputFields(){
    postTitle.value = '';
    postCategory.value = '';
    postContent.value ='';
  }

} */


