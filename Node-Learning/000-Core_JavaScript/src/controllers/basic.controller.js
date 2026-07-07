const users = require("../data/users.json");

/*
/*
Variable Keywords in JavaScript
var
-> Re-declare       Yes
-> Re-assign        Yes
-> Function Scope   Yes
let
-> Re-declare       No
-> Re-assign        Yes
-> Block Scope      Yes
const
-> Re-declare       No
-> Re-assign        No
-> Block Scope      Yes

*/

const variableMethod = (req, res) => {
  // First user
  const user = users[0];
  // Variable declaration
  var firstName = user.first_name;
  let email = user.email;
  const gender = user.gender;

  return res.json({
    message: "Variables Example",
    firstName,
    email,
    gender,
  });
};
/*
how function is declere
function fullName(first, last) {
return `${first} ${last}`;
}
*/


//Arrow function example
// const upperCaseEmail = (email) => {
//   return email.toUpperCase();
// };

// Get data from user and first Name and job_title
// const userInfo = function (user) {
//   return `${user.first_name} (${user.job_title})`;
// };

const functionMethod = (req, res) => {
  const user = users[0];
  return res.json({
    message: "Functions Example",
    fullName: fullName(user.first_name, user.last_name),
    email: upperCaseEmail(user.email),
    info: userInfo(user),
  });
};

/*
There are three types of scope in JavaScript.

1. Global Scope
   -> Accessible from anywhere in the program.

2. Function Scope
   -> Accessible only inside the function where it is declared.

3. Block Scope
   -> Accessible only inside a block {} such as if, for, while, etc.
*/

const projectName = "Learning Node"; //type 1
const scopeMethod = (req, res) => {
  let user = users[0];
  if (true) {
    let fullName = `${user.first_name} ${user.last_name}`;//type 2
    return res.json({
      message: "Scope Example",//type 3
      projectName,
      email: user.email,
      fullName,
    });
  }
};

module.exports = {
  variableMethod,
  functionMethod,
  scopeMethod,
};
