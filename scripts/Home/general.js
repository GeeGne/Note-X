import {loggedInUser, updateLoggedInUserInfo} from '../../data/logged-in-user.js'
import {updateForYouSummary} from './for-you.js';
import {updateUserPosts} from '../../data/posts.js';

// Elements
export const mainContainer = document.querySelector('.js-main');
export const postButtonElement = document.querySelector('.js-post-button');
export const inputElement = document.querySelector('.js-text-post-input');
export const contentContainer = document.querySelector('.js-content');
export const postsContainer = document.querySelector('.js-posts-section');
export const searchInputElement = document.querySelector('.js-input-right');
export const followButtonElement = document.querySelectorAll('.js-follow-button');
export const showPostsElement = document.querySelector('.js-show-container');
export const showPostsText = document.querySelector('.js-show');
const LoggedInUserPictureElement = document.querySelector('.js-pp-img');
// User-feed elements
export const forYouTextElement = document.querySelector('.js-for-you-text');
export const forYouBarElement = document.querySelector('.js-for-you-bar');
export const followingTextElement = document.querySelector('.js-following-text');
export const followingBarElement = document.querySelector('.js-following-bar');

// Starting page elements
const signElement = document.querySelector('.js-sign');
const introElement = document.querySelector('.js-intro');
const continueButtonElement = document.querySelector('.js-intro-button');
const skipButtonElement = document.querySelector('.js-skip-button');
const signupButtonElement = document.querySelector('.js-sign-button');
const nameInputElement = document.querySelector('.js-name-input');
const atInputElement = document.querySelector('.js-at-input');
const signErrorElement = document.querySelector('.js-sign-error');

export function setGeneralOptions () {
  // intro and sign-up element
  signElement.classList.add('hide-sign');
  signErrorElement.classList.add('hide-sign-error');

  continueButtonElement.addEventListener('click', () => {
    introElement.classList.add('hide-intro');
    signElement.classList.remove('hide-sign');
  });

  skipButtonElement.addEventListener('click', () => {
    signElement.classList.add('hide-sign');
    updateLoggedInUserPicture();
    updateForYouSummary();
  });

  let errorMessageID;
  signupButtonElement.addEventListener('click', () => {
    if ( nameInputElement.value === '' || 
      atInputElement.value === '' ) {
        errorMessageID && clearTimeout(errorMessageID);
        signErrorElement.classList.remove('hide-sign-error');

        errorMessageID = setTimeout(() => {
          signErrorElement.classList.add('hide-sign-error')
        }, 3000);
      }else {
        updateLoggedInUserInfo(
          nameInputElement.value, atInputElement.value
        );
        updateUserPosts ()
        updateLoggedInUserPicture()
        updateForYouSummary()
        signElement.classList.add('hide-sign');
      }
  });

  // User Profile picture update after hitting 'skip' or 'sign-in'
  function updateLoggedInUserPicture () {
    LoggedInUserPictureElement.innerHTML = `<img src="${loggedInUser.userProfilePicture}">`;
    console.log(LoggedInUserPictureElement);
  }

  // search-bar input turn blue when clicked 
  let input;
  searchInputElement.addEventListener('click', () => {
    searchInputElement.classList.add('input-right-clicked');
    setTimeout( () => input = true, 100);
  });

  mainContainer.addEventListener('click', () => {
    input && searchInputElement.classList.
    remove('input-right-clicked'), input = !input;
  });

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
}

