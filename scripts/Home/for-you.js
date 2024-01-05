import {users} from '../../data/users.js';
import {posts, userPosts, updateUserPosts, newPosts, newFollowPosts} from '../../data/posts.js';
import {loggedInUser} from '../../data/logged-in-user.js';
import {editNumber} from '../edit.js';
import {postButtonElement, inputElement, postsContainer, 
  followButtonElement, showPostsElement, showPostsText} from './general.js';


export function updateForYouSummary () {

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
      userPosts.push(newPost);
      updatePostDOM();
    }
  });

  let newUsers = [];
  // adding a user as 'follow' to loggedInUser
  followButtonElement.forEach(user => {
    user.addEventListener('click', () => {
      const newFollow = user.dataset.userId;
      if (user.innerText === "Follow") {
        user.innerText = "Following";
        user.classList.add('clicked');
        newUsers.push(newFollow);
        newFollowPosts(newUsers);
        updateShowPosts();
      }else {
        user.innerText = "Follow"
        user.classList.remove('clicked');

        newUsers = newUsers.filter(
          userID => userID === newFollow? false : true
        );

        loggedInUser.following = 
        loggedInUser.following.filter(
          userID => userID === newFollow? false : true
        );
        updateUserPosts();
        newFollowPosts(newUsers);
        updateShowPosts();
        updatePostDOM();
      }
    });
  })

  // adds the added posts when we click on 'show posts'
  showPostsElement.addEventListener('click', () =>{
    showPostsElement.classList.add('show-hide');
    console.log(newUsers);
    newUsers.forEach(
      userID => loggedInUser.following.push(userID)
    );
    updateUserPosts();
    updatePostDOM();
  });

  function updateShowPosts () {
    if(newPosts > 0) {
      showPostsElement.classList.remove('show-hide');
      showPostsText.innerText = `Show ${newPosts} posts`;
    }else{
      showPostsElement.classList.add('show-hide');
    }
  };
};