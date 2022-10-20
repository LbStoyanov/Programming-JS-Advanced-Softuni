window.addEventListener('load', solve);

function solve() {

    document.getElementById('add-btn').addEventListener('click',addSong);
    let divAllHits = document.getElementsByClassName('all-hits-container')[0];
    let genre = document.getElementById('genre');
    let name = document.getElementById('name');
    let author = document.getElementById('author');
    let date = document.getElementById('date');
    let likesSum = 0;
    

    function addSong(e){
        e.preventDefault();
        
        if (!genre.value || !name.value || !author.value || !date.value) {
            //clearInputFields();
            return;
        }

        let div = document.createElement('div');
        div.classList.add('hits-info');

        let img = document.createElement('img');
        img.src = './static/img/img.png';

        let h1 = document.createElement('h2');
        h1.innerText = `Genre: ${genre.value}`;
        let h2 = document.createElement('h2');
        h2.innerText = `Name: ${name.value}`;
        let h3 = document.createElement('h2');
        h3.innerText = `Author: ${author.value}`;
        let h4 = document.createElement('h3');
        h4.innerText = `Date: ${date.value}`;

        let saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.innerText = 'Save song';
        saveBtn.addEventListener('click',save);

        
        let likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.innerText = 'Like song';
        likeBtn.addEventListener('click',like);

        
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click',deleteSong);
        
       

        div.appendChild(img);
        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(saveBtn);
        div.appendChild(likeBtn);
        div.appendChild(deleteBtn);


        divAllHits.appendChild(div);
        clearInputFields();
    }

    function deleteSong(){
        document.getElementsByClassName('hits-info')[0].remove();
    }

    function save(){
        let savedSongs = document.getElementsByClassName('saved-container')[0];

        let hitsDiv = document.getElementsByClassName('hits-info')[0];
        hitsDiv.children[5].remove();
        hitsDiv.children[5].remove();
        savedSongs.appendChild(hitsDiv);
    }

    function like(){
        likesSum++;
        let totalLikes = document.getElementsByClassName('likes')[0].children[0];
        totalLikes.innerText = `Total Likes: ${likesSum}`;
        document.getElementsByClassName('like-btn')[0].disabled = true;

    }

    function clearInputFields(){
        genre.value = '';
        name.value = '';
        author.value = '';
        date.value = '';
    }
}

