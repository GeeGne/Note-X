export const posts = JSON.parse(localStorage.getItem('posts')) ||
[{
  userName: 'GeeGne',
  id: 1,
  postDate: 'Sep 25, 2023',
  description: `It's raining here, what about you guys? :o`,
  reply: 34,
  repost: 155,
  like: 329,
  view: 423
},{
  userName: 'GeeGne' ,
  id: 2,
  postDate: 'Nov 13, 2023',
  description: `look at this cute kitty`,
  reply: 534,
  repost: 23,
  like: 632,
  view: 4236
},{
  userName: 'Mino',
  id: 1,
  postDate: 'Sep 20, 2022',
  description: `Just bought a new hamm AND IT'S SOO CUTEEE`,
  reply: 134,
  repost: 394,
  like: 434,
  view: 1829
},{
  userName: 'Mino' ,
  id: 2,
  postDate: 'Dec 02, 2014',
  description: `Today I was bored so I drew a T-REX RAWRRR `,
  reply: 120,
  repost: 545,
  like: 940,
  view: 2976
}];