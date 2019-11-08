"use strict";

import users from './users.js';

const getSortedUniqueSkills = users => {
  return users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);

    return allSkills;
  }, [])
  .filter(function(skill, index, skills) {
    return skills.indexOf(skill) === index;
  })
  .sort();
}
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]