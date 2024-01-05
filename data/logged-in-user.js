export let loggedInUser = 
{
  userID: '0',
  userName: "GeeGne",
  at: "GeegneAtHome",
  userProfilePicture: 'Images/Content/Human and a Kitty.jpg',
  following: ['0']
};


export function updateLoggedInUserInfo (userName,at) {
  loggedInUser.userName = userName;
  loggedInUser.at = at;
  loggedInUser.userProfilePicture = 'Images/Users pp/Default User Profile Picture.jpg';
  loggedInUser.following = ['-1'];
  console.log(loggedInUser);
}