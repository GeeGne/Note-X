import {users} from '../data/users.js';
import {posts, userPosts, userPostsUpdated, updateUserPosts, newPosts} from '../data/posts.js';
import {loggedInUser} from '../data/logged-in-user.js';
import {editNumber} from '../sort/edit.js';


// Elements
const mainContainer = document.querySelector('.js-main');
const postButtonElement = document.querySelector('.js-post-button');
const inputElement = document.querySelector('.js-text-post-input');
const contentContainer = document.querySelector('.js-content');
const postsContainer = document.querySelector('.js-posts-section');
const searchInputElement = document.querySelector('.js-input-right');
const followButtonElement = document.querySelector('.js-follow-button');
const showPostsElement = document.querySelector('.js-show-container');
const showPostsText = document.querySelector('.js-show');

// User-feed elements
const forYouTextElement = document.querySelector('.js-for-you-text');
const forYouBarElement = document.querySelector('.js-for-you-bar');
const followingTextElement = document.querySelector('.js-following-text');
const followingBarElement = document.querySelector('.js-following-bar');

// search-bar input turn blue when pressed 
let input;
searchInputElement.addEventListener('click', () => {
  searchInputElement.classList.add('input-right-clicked');
  setTimeout( () => input = true, 100);
});

mainContainer.addEventListener('click', () => {
  input && searchInputElement.classList.
  remove('input-right-clicked'), input = !input;
});

// Change the post-button appearance when text or media is added
let inputEmptyCheck = true;
setInterval( () => {
  String(inputElement.value) === '' ?
    inputEmptyCheck= true : 
    inputEmptyCheck = false;

  inputEmptyCheck? postButtonElement.classList.add('no-data') :
    postButtonElement.classList.remove('no-data');
},50);

//add post
postButtonElement.addEventListener('click', () => {
  if (!inputEmptyCheck) {
    const newPost = {
      userID: loggedInUser.userID,
      userName: loggedInUser.userName,
      at: loggedInUser.at,
      userProfilePicture: loggedInUser.userProfilePicture,
      id: posts[posts.length - 1].id + 1,
      description: inputElement.value
    }
    
    posts.push(newPost);
    updateUserPosts()
    updatePostDOM();
  }
});

const updatePostDOM = () => {
  let inputHTML = '';
  postsContainer.innerHTML = '';
  
  userPosts.slice().reverse().forEach(post => {

    const html =
    `
    <div class="post-container">
      <div class="left">
        <img src= "${post.userProfilePicture}">
      </div>
      <div class="right">
        <div class="right-top">
          <div>
            ${post.userName} <span>@${post.at} . 2h</span>
          </div>
          <div class="comment">
          ${post.description}
          </div>
        <div class="three-dot">
            <img src="Images/Content/three-dot.svg">
          </div>
        </div>
        <div class="right-middle">
        ${post.media? `<img src="${post.media}"></img>` : ''}
        </div>
        <div class="right-bottom">
          <div>
            <img src="Images/Content/reply.svg">
            <div class="amount">
              ${editNumber(post.reply) || '0'}
            </div>
          </div>
          <div>
            <img src="Images/Content/repost.svg">
            <div class="amount">
              ${editNumber(post.repost) || '0'}
            </div>
          </div>
          <div>
            <img src="Images/Content/heart.svg">
            <div class="amount">
              ${editNumber(post.like) || '0'}
            </div>
          </div>
          <div>
            <img src="Images/Content/view.svg">
            <div class="amount">
              ${editNumber(post.view) || '0'}
            </div>
          </div>
          <div>
            <img src="Images/Content/bookmark.svg">
            <img src="Images/Content/download.svg">
          </div>
        </div>
      </div>
    </div>
    `;
    inputHTML += html;
  });

  postsContainer.innerHTML += inputHTML;
  inputElement.value = '';
};
  
updatePostDOM();

// adding a user as 'follow' to loggedInUser
followButtonElement.addEventListener('click', () => {
  followButtonElement.classList 
  const newFollow = followButtonElement.dataset.userId

  if (followButtonElement.innerText === "Follow") {
    followButtonElement.innerText = "Following";
    followButtonElement.classList.add('clicked');
    loggedInUser.following.push(newFollow);
    updateUserPosts();
    updateShowPosts();
  }else {
    followButtonElement.innerText = "Follow"
    followButtonElement.classList.remove('clicked');
    loggedInUser.following = 
    loggedInUser.following.filter(
      userID => userID === newFollow? false : true
    );
    updateUserPosts();
    updateShowPosts();
    updatePostDOM();
  }

});

// adds the added posts when we click on 'show posts'
function updateShowPosts () {
  if(newPosts > 0) {
    showPostsElement.classList.remove('show-hide');
    showPostsText.innerText = `Show ${newPosts} posts`;

    showPostsElement.addEventListener('click', () =>{
      showPostsElement.classList.add('show-hide');
      updatePostDOM();
    });
  }else{
    showPostsElement.classList.add('show-hide');
  }
};



// User-feed toggles
toggleSwitch("for you");

forYouTextElement.addEventListener('click', () => {
  toggleSwitch("for you");
});

followingTextElement.addEventListener('click', () => {
  toggleSwitch("following");
});

function toggleSwitch (type) {
  if (type === "for you") {
    forYouTextElement.classList.remove('un-active-text');
    forYouBarElement.classList.remove('un-active-bar');
    followingTextElement.classList.add('un-active-text');
    followingBarElement.classList.add('un-active-bar');
  }else {
    followingTextElement.classList.remove('un-active-text');
    followingBarElement.classList.remove('un-active-bar');
    forYouTextElement.classList.add('un-active-text');
    forYouBarElement.classList.add('un-active-bar');
  }
}
