export const users = JSON.parse(localStorage.getItem('users')) ||
[{
  id: '1',
  name: 'GeeGne',
  at: 'Geegne At Home',
  following: 4,
  followers: 10,
  postId: '1'
},{
  id: '2',
  name: 'Mino',
  at: 'Mino',
  following: 234,
  followers: 439,
  postId: '1'
}];