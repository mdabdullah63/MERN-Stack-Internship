const users = require("../data/users.json");

//Object ke properties ko alag variables me store karna
const destructuring = (req, res) => {
  //Destructuring se code chhota aur readable ho jata hai
  const user = users[0];
  // destructuring
  const {
    id,
    first_name,
    last_name,
    email,
    gender,
    job_title
  } = user;

  return res.json({
    message: "Object Destructuring",
    id,
    first_name,
    last_name,
    email,
    gender,
    job_title
  });
};

//Object ki sabhi keys return karta hai
const objectKeysMethod = (req, res) => {
  const user = users[0];
  const keys = Object.keys(user);
  return res.json({
    message: "Object Keys", keys
  });
};

//Object ki sabhi values return karta hai
const objectValuesMethod = (req, res) => {
  const user = users[0];
  const values = Object.values(user);
  return res.json({
    message: "Object Values",
    values
  });
};

//Object ke andar Object
const nestedObjectMethod = (req, res) => {
  const user = users[0];
  const {
    city,
    state,
    pinCode } = user.address.pinCode;

  return res.json({
    city,
    state,
    pinCode
  });
};

//spreadOperator ka matlab purane object ki copy bana kar naye data add/update karna
const spreadOperatorMethod = (req, res) => {
  const user = users[0];
  const updatedUser = {
    ...user,
    first_name: "Md Abdullah",
    job_title: "software dev"
  };
  return res.json(updatedUser);

};


//optionalChaining ka use hum isliye karte hai Agar koi object ya property exist na kare, to program crash na ho undefine show kare
const optionalChainingMethod = (req, res) => {
  const user = users[0];
  return res.json({
    firstName: user?.first_name,
    lastName: user?.last_name,
    email: user?.email,
    gender: user?.gender,
    jobTitle: user?.job_title,
    father :user?.father_name// error nhi dega
  });
};
module.exports = {
  destructuring,
  objectKeysMethod,
  objectValuesMethod,
  nestedObjectMethod,
  spreadOperatorMethod,
  optionalChainingMethod

};
