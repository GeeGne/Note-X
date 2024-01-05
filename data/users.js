export const users = JSON.parse(localStorage.getItem('users')) ||
[{
  id: '0',
  name: 'GeeGne',
  at: 'Geegne At Home',
  following: ['0'],
  followers: 10
},{
  id: '1',
  name: 'Mino',
  at: 'Mino',
  following: 234,
  followers: 439
},{
  userID: '2',
  name: 'Leo Willson',
  at: 'badboy',
  following: 234,
  followers: 439
},{
  userID: '3',
  name: 'Harry Shelton',
  at: 'Harryroll',
  following: 234,
  followers: 439
}];