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
  userProfilePicture: 'Images/Users pp/Mino-pfp.jpg',
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
  userProfilePicture: 'Images/Users pp/Mino-pfp.jpg',
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
  userProfilePicture: 'Images/Users pp/Mino-pfp.jpg',
  at: 'Heyooo',
  postDate: 'Dec 02, 2014',
  description: `Just a Banana passing by..`,
  media: 'Images/Posts/Banana.jpg',
  reply: 5473,
  repost: 2235,
  like: 340,
  view: 346976
},{
  id: 6,
  userID : '3',
  userName: 'Harry Shelton' ,
  userProfilePicture: 'Images/Users pp/pexels-harry-shelton-7239911.jpg',
  at: 'Harryroll',
  postDate: 'Dec 02, 2014',
  description: `My new Album is live!`,
  media: 'Images/Posts/Rock and Roll Album.jpg',
  reply: 32473,
  repost: 2235,
  like: 68340,
  view: 446976
},{
  id: 7,
  userID : '2',
  userName: 'Leo Willson' ,
  userProfilePicture: 'Images/Users pp/Leo Willson.jpg',
  at: 'badboy',
  postDate: 'Dec 02, 2014',
  description: `Get ready boyss cus Tomorrow is the school basketball match IM SO EXCITED!!`,
  media: 'Images/Posts/Basketball Match.jpg',
  reply: 1473,
  repost: 235,
  like: 6340,
  view: 11975
},{
  id: 8,
  userID : '3',
  userName: 'Harry Shelton' ,
  userProfilePicture: 'Images/Users pp/pexels-harry-shelton-7239911.jpg',
  at: 'Harryroll',
  postDate: 'Dec 02, 2014',
  description: `Live performance was great today! It was a blessing to meet you and hope you're having a happy holiday yall!!`,
  media: 'Images/Posts/Live Performance.jpg',
  reply: 5973,
  repost: 3735,
  like: 7340,
  view: 121946
},{
  id: 9,
  userID : '2',
  userName: 'Leo Willson' ,
  userProfilePicture: 'Images/Users pp/Leo Willson.jpg',
  at: 'badboy',
  postDate: 'Dec 02, 2014',
  description: `Today I ordered a big mac.. IT'S SOO GOOD`,
  media: 'Images/Posts/Big Mac.jpg',
  reply: 473,
  repost: 235,
  like: 1340,
  view: 2937
}];

export let userPosts = [];
export let newPosts = 0;

updateUserPosts ()
export function updateUserPosts () {
  userPosts = [];
  
  loggedInUser.following.forEach(userID => {
    posts.forEach(
      post => post.userID === userID && 
      userPosts.push(post)
    );
  })

};

export function newFollowPosts(usersID) {
  newPosts = 0;
  let remainingUsers = []
  loggedInUser.following.forEach(ID => { 
    remainingUsers = usersID.filter(
      userID => ID === userID ? false : true
    );
  });

  remainingUsers.forEach(userID => {
    posts.forEach(post => post.userID === userID && newPosts ++);
  });

};

