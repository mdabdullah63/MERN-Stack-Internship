const users = require("../data/users.json");
// data come from users json

//Foreach loop
const forEachMethod = (req, res) => {
  const result = [];
  users.forEach((user) => {
    result.push(`${user.id} -> ${user.first_name}`);
  });
  // ek empty array hai jisme hum user ka id and aur first_name array me push kar rahe hai
  res.json(result);
};

const mapMethod = (req, res) => {
  const result = users.map((user) => ({
    id: user.id,
    name: `${user.first_name} ${user.last_name}`,
    // Isme hum user se id le rahe hai aur id ko map kar ke name print kar rahe hai
  }));

  res.json(result);
};

const filterMethod = (req, res) => {
  const result = users.filter((user) => user.gender === "Male");
  // Condition true hone wale users ko return karta hai.
  res.json(result);
};

const findMethod = (req, res) => {
  const id = Number(req.params.id);
  // First matching element return karta hai.
  const result = users.find((user) => user.id === id);

  res.json(result);
};

const findIndexMethod = (req, res) => {
  const id = Number(req.params.id);
  const result = users.findIndex((user) => user.id === id);
  res.json({
    index: result,
    // Matching element ka index return karta hai.

  });

};

const someMethod = (req, res) => {
  const result = users.some(
    (user) => user.job_title === "Office Assistant I"
  );
  // Agar ek bhi element condition satisfy kare to true.

  res.json({
    result,
  });
};

const everyMethod = (req, res) => {
  const result = users.every((user) => user.email.includes("@"));
  // Sabhi elements condition satisfy kare to true.
  res.json({ result });
};

const reduceMethod = (req, res) => {
  const result = users.reduce((count, user) => {
    if (user.gender === "Male") {
      count++;
    }
    // Sabhi Male users ki counting karna.
    return count;
  }, 0);

  /*
  0 initntal value ser karta hai
  array.reduce((accumulator, currentValue) => {
    // logic
    return accumulator;
}, initialValue);

Accumulator = Ek variable jo previous result ko store karta hai aur next iteration me usi ko use karta hai.
*/
  res.json({
    totalMale: result,
  });
};

module.exports = {
  forEachMethod,
  mapMethod,
  filterMethod,
  findMethod,
  findIndexMethod,
  someMethod,
  everyMethod,
  reduceMethod,
};
