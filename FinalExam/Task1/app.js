window.addEventListener("load", solve);

function solve() {
  document.getElementById("form-btn").addEventListener("click", publish);
  let firstName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let age = document.getElementById("age");
  let storyTitle = document.getElementById("story-title");
  let genre = document.getElementById("genre");
  let story = document.getElementById("story");
  let originalInputValues = [];

  function publish(e) {
    
    if (firstName.value === '' || lastName.value === '' || age.valee === '' || storyTitle.value === '' || story.value === '') {
      //clearFields();
      return;
    }
    originalInputValues[0] = firstName.value;
    originalInputValues[1] = lastName.value;
    originalInputValues[2] = age.value;
    originalInputValues[3] = storyTitle.value;
    originalInputValues[4] = genre.value;
    originalInputValues[5] = story.value;

    let ul = document.getElementById('preview-list');
    let li = document.createElement('li');
    li.classList.add('story-info');
    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.innerText = `Name: ${firstName.value} ${lastName.value}`;

    let p1 = document.createElement('p');
    p1.innerText = `Age: ${age.value}`;

    let p2 = document.createElement('p');
    p2.innerText = `Title: ${storyTitle.value}`;

    let p3 = document.createElement('p');
    p3.innerText = `Genre: ${genre.value}`;

    let p4 = document.createElement('p');
    p4.innerText = `${story.value}`;

    let saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');
    saveBtn.innerText = 'Save Story'
    saveBtn.disabled = false;
    saveBtn.addEventListener('click',saveStory);

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.innerText = 'Edit Story';
    editBtn.disabled = false;
    editBtn.addEventListener('click',editStory);


    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = 'Delete Story';
    deleteBtn.disabled = false;
    deleteBtn.addEventListener('click',deleteStory);

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);
    li.appendChild(article);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
   
    clearFields();
    document.getElementById("form-btn").disabled = true;
  }

  function editStory(){
 
    let li = document.getElementsByClassName('story-info')[0].children;


    let saveBtn = li[1];
    let editBtn = li[2];
    let deleteBtn = li[3];
  
    firstName.value = originalInputValues[0];
    lastName.value = originalInputValues[1];
    age.value = originalInputValues[2];
    storyTitle.value = originalInputValues[3]; 
    genre.value = originalInputValues[4]; 
    story.value = originalInputValues[5];

    saveBtn.disabled = true;
    editBtn.disabled = true;
    deleteBtn.disabled = true;
    document.getElementById("form-btn").disabled = false;
    document.getElementsByClassName('story-info')[0].remove();
    
  }

  function saveStory(){

    let mainDiv = document.getElementById('main');
    mainDiv.children[0].remove();
    mainDiv.children[0].remove();

    document.getElementsByClassName('body')[0].children[1].remove();
    let script = document.createElement('script');
    script.src = 'app.js';
    document.getElementsByClassName('body')[0].prepend(script);

   
    let h1 = document.createElement('h1');
    h1.innerText = 'Your scary story is saved!';
    mainDiv.appendChild(h1)
    
  }

  function deleteStory(){
    document.getElementsByClassName('story-info')[0].remove();
    document.getElementById("form-btn").disabled = false;
  }

  function clearFields(){
    firstName.value='';
    lastName.value='';
    age.value='';
    storyTitle.value='';
    genre.value = originalInputValues[4];
    story.value='';
  }
}
