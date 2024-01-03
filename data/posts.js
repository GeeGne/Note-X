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
  reply: 34,
  repost: 155,
  like: 329,
  view: 423
},{
  id: 2,
  userID : '0',
  userProfilePicture: './Images/Content/Human and a kitty.jpg',
  userName: 'GeeGne' ,
  at: 'Geegne At Home',
  postDate: 'Nov 13, 2023',
  description: `look at this cute kitty`,
  media: 'Images/Posts/Cute Kitty.jpg',
  reply: 534,
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
  reply: 134,
  repost: 394,
  like: 434,
  view: 1829
},{
  id: 4,
  userID : '1',
  userName: 'Mino' ,
  userProfilePicture: 'Images/Content/Girl holding a Rabbit.jpg',
  at: 'Heyooo',
  postDate: 'Dec 02, 2014',
  description: `Today I was bored so I drew a T-REX RAWRRR`,
  media: 'Images/Posts/T-REX.jpg',
  reply: 120,
  repost: 545,
  like: 940,
  view: 2976
},{
  id: 5,
  userID : '1',
  userName: 'Mino' ,
  userProfilePicture: 'Images/Content/Girl holding a Rabbit.jpg',
  at: 'Heyooo',
  postDate: 'Dec 02, 2014',
  description: `Just a Banana passing by..`,
  media: 'Images/Posts/Banana.jpg',
  reply: 473,
  repost: 235,
  like: 340,
  view: 6976
}];

export let userPosts = [];

updateUserPosts ()
export function updateUserPosts () {
  userPosts = [];

  posts.forEach(post => {
    post.userID === loggedInUser.following && userPosts.push(post);
  });
  
  console.log(userPosts);
}
