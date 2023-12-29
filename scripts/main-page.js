import {users} from '../data/users.js';
import {posts} from '../data/posts.js';

let input;
document.querySelector('.js-input-right')
  .addEventListener('click', () => {
  document.querySelector('.js-input-right')
    .classList.add('input-right-clicked');
  setTimeout( () => {input = 'clicked'}, 100);
});

document.querySelector('.js-main')
  .addEventListener('click', () => {
    console.log(input);
    input === 'clicked' && document.querySelector('.js-input-right')
    .classList.remove('input-right-clicked'), input = false;

  });



