import {loggedInUser} from './logged-in-user.js';

export const posts = JSON.parse(localStorage.getItem('posts')) ||
[{
  id: 1,
  userID : '0',
  userProfilePicture: './Images/Content/Human and a kitty.jpg',
  userName: 'GeeGne',
  at: 'Geegne At Home',
  postDate: 'Sep 25, 2023',
  description: `It's raining here, what about you guys? :o`,
  media: 'Images/Posts/Rainy Day.jpg',
  reply: 2234,
  repost: 855,
  like: 12229,
  view: 12311423
},{
  id: 2,
  userID : '0',
  userProfilePicture: './Images/Content/Human and a kitty.jpg',
  userName: 'GeeGne' ,
  at: 'Geegne At Home',
  postDate: 'Nov 13, 2023',
  description: `look at this cute kitty`,
  media: 'Images/Posts/Cute Kitty.jpg',
  reply: 2534,
  repost: 23,
  like: 632,
  view: 4236
},{
  id: 3,
  userID : '1',
  userProfilePicture: 'Images/Content/Girl holding a Rabbit.jpg',
  userName: 'Mino',
  at: 'Heyooo',
  postDate: 'Sep 20, 2022',
  description: `Just bought a new hamm AND IT'S SOO CUTEEE`,
  media: 'Images/Posts/Hamster.jpg',
  reply: 3134,
  repost: 394,
  like: 32434,
  view: 711829
},{
  id: 4,
  userID : '1',
  userName: 'Mino' ,
  userProfilePicture: 'Images/Content/Girl holding a Rabbit.jpg',
  at: 'Heyooo',
  postDate: 'Dec 02, 2014',
  description: `Today I was bored so I drew a T-REX RAWRRR`,
  media: 'Images/Posts/T-REX.jpg',
  reply: 1120,
  repost: 545,
  like: 3940,
  view: 432976
},{
  id: 5,
  userID : '1',
  userName: 'Mino' ,
  userProfilePicture: 'Images/Content/Girl holding a Rabbit.jpg',
  at: 'Heyooo',
  postDate: 'Dec 02, 2014',
  description: `Just a Banana passing by..`,
  media: 'Images/Posts/Banana.jpg',
  reply: 5473,
  repost: 2235,
  like: 340,
  view: 346976
}];

export let userPostsUpdated = [];
export let userPosts = [];
export let newPosts = 0;
let totalPosts = 0;

updateUserPosts ()
export function updateUserPosts () {
  userPosts = [];
  posts.forEach(post => {
    loggedInUser.following.forEach
    (
      userID => post.userID === userID && userPosts.push(post)
    );
  });

  updateTotalPosts()
}

export function updateTotalPosts() {
  const oldTotalPosts = totalPosts;
  totalPosts = 0;
  userPosts.forEach(() => totalPosts ++);
  newPosts = totalPosts - oldTotalPosts;
}

