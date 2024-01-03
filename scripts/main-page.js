import {users} from '../data/users.js';
import {posts, userPosts, updateUserPosts } from '../data/posts.js';
import {loggedInUser} from '../data/logged-in-user.js'


// Elements
const mainContainer = document.querySelector('.js-main');
const postButtonElement = document.querySelector('.js-post-button');
const inputElement = document.querySelector('.js-text-post-input');
const contentContainer = document.querySelector('.js-content');
const postsContainer = document.querySelector('.js-posts-section');
const searchInputElement = document.querySelector('.js-input-right');

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
    console.log(posts);
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
              ${post.reply || '0'}
            </div>
          </div>
          <div>
            <img src="Images/Content/repost.svg">
            <div class="amount">
              ${post.repost || '0'}
            </div>
          </div>
          <div>
            <img src="Images/Content/heart.svg">
            <div class="amount">
              ${post.like || '0'}
            </div>
          </div>
          <div>
            <img src="Images/Content/view.svg">
            <div class="amount">
              ${post.view || '0'}
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





