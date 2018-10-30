/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'Juan';
const email = 'juan.delarosa1224@gmail.com';
const languages = ["html", "css", "javascript", "jquery"];

// TODO: rewrite the object literal using object property shorthand
users.push({
    name,
    email,
    languages
});
// console.log(name);
// console.log(email);
// console.log(languages);

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
//old way --------> users.forEach(function(user) {
//     ------------>return emails.push(user.email);
// });
users.forEach((user) => {
  return emails.push(user.email)
});
// another solution would be ------>  users.forEach = ((user) => emails.push(user.email));

// old solution---------> users.forEach(function(user) {
//--------->     return names.push(user.name);
// });
users.forEach((user) => {
  return names.push(user.name);
});
let developers = [];
users.forEach(({name, email, languages}) => {
developers.push(`${name}'s email is ${email} ${name} knows ${languages.join(',')}`);
});
      console.log(developers);
let list = '<ul>';

  for (let developer of developers){
    list += '<li>${developer}</li>';
  }
list += '</ul>';


