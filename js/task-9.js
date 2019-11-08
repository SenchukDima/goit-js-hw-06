"use strict";

import users from './users.js';

const getNamesSortedByFriendsCount = users => {
  const sortByQuantityFriends = (a, b) => {
    if (a.friends.length > b.friends.length) {
      return 1;
    }
    if (a.friends.length < b.friends.length) {
      return -1;
    }
};
    return users.sort(sortByQuantityFriends)
    .map( user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]