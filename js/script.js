// get input elements

let postTitleInput = document.getElementById('post-title');
let postTimeInput = document.getElementById('post-time');
let postContentInput = document.getElementById('post-area');
let submit = document.getElementById('submitBtn');

let postsContainer = document.querySelector('.posts-container');


submit.addEventListener('click', SaveInput);

function SaveInput() {

    if (postTitleInput.value && postTimeInput.value && postContentInput.value !== "") {

        // create elements, inject input

        let injectPostTitle = document.createElement('h2');
        injectPostTitle.innerHTML = postTitleInput.value;

        let injectPostTime = document.createElement('h4');
        injectPostTime.innerHTML = postTimeInput.value;

        let injectPostContent = document.createElement('p');
        injectPostContent.innerHTML = postContentInput.value;

        // update button

        let updateBtn = document.createElement('button');
        updateBtn.classList.add('updateBtn');
        updateBtn.innerHTML = "Update Post";

        updateBtn.addEventListener('click', UpdatePost);

        // delete button

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.innerHTML = "Delete Post";

        deleteBtn.addEventListener('click', RemovePost);

        // create container, append injected into container

        let postContainer = document.createElement('div');

        postContainer.appendChild(injectPostTitle);
        postContainer.appendChild(injectPostTime);
        postContainer.appendChild(injectPostContent);
        postContainer.appendChild(updateBtn);
        postContainer.appendChild(deleteBtn);

        postsContainer.appendChild(postContainer);

        // clean input

        postTitleInput.value = '';
        postTimeInput.value = '';
        postContentInput.value = '';

    } else {

        postTitleInput.classList.add('error');
        postTimeInput.classList.add('error');
        postContentInput.classList.add('error');



        postTitleInput.value = '';
        postTimeInput.value = '';
        postContentInput.value = '';

        setTimeout(RemoveErrorClasses, 3000);
    }
}

// remove error classes

function RemoveErrorClasses() {
    postTitleInput.classList.remove('error');
    postTimeInput.classList.remove('error');
    postContentInput.classList.remove('error');
}


// update post 

function UpdatePost(e) {
    let clickedUpdateBtn = e.target;
    console.log('clicked');

    postTitleInput.value = clickedUpdateBtn.parentElement.childNodes[0].innerHTML;
    postTimeInput.value = clickedUpdateBtn.parentElement.childNodes[1].innerHTML;
    postContentInput.value = clickedUpdateBtn.parentElement.childNodes[2].innerHTML;

    submit.addEventListener('click', function () {
        clickedUpdateBtn.parentElement.childNodes[0].innerHTML = postTitleInput.value;
        clickedUpdateBtn.parentElement.childNodes[1].innerHTML = postTimeInput.value;
        clickedUpdateBtn.parentElement.childNodes[2].innerHTML = postContentInput.value;
        clickedUpdateBtn.parentElement.remove();
    })
}



// delete post

function RemovePost(e) {
    let clickedDeleteBtn = e.target;

    clickedDeleteBtn.parentElement.remove();
}

