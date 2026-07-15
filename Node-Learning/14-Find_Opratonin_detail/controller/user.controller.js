const User = require("../model/userSchema");

async function getAllUsers(req, res) {
    const users = await User.findsort();
    res.json(users);
}
async function getOneUser(req, res) {
    const user = await User.findOne({ name: "Abdullah" });

    res.json(user);
}
async function ageGreaterThan(req, res) {
    const users = await User.find({
        age: { $gt: 25 }
    });

    res.json(users);
}
async function ageLessThan(req, res) {
    const users = await User.find({ age: { $lt: 25 } });

    res.json(users);
}
async function ageGreaterThanEqual(req, res) {
    const users = await User.find({
        age: { $gte: 21 }
    });

    res.json(users);
}
async function equalAge(req, res) {
    const users = await User.find({
        age: { $eq: 22 }
    });

    res.json(users);
}
async function notEqualCity(req, res) {
    const users = await User.find({
        city: { $ne: "Delhi" }
    });

    res.json(users);
}
async function andOperator(req, res) {
    const users = await User.find({
        $and: [
            { city: "Jaipur" },
            { age: { $gt: 20 } }
        ]
    });

    res.json(users);
}
async function orOperator(req, res) {
    const users = await User.find({
        $or: [
            { city: "Jaipur" },
            { city: "Delhi" }
        ]
    });

    res.json(users);
}
async function projection(req, res) {
    const users = await User.find(
        {},
        {
            name: 1,
            city: 1,
            _id: 0
        }
    );

    res.json(users);
}
async function sortBySalary(req, res) {
    const users = await User.find().sort({
        salary: -1
    });

    res.json(users);
}
async function limitUsers(req, res) {
    const users = await User.find().limit(10);

    res.json(users);
}
async function skipUsers(req, res) {
    const users = await User.find().skip(20);

    res.json(users);
}
async function pagination(req, res) {
    const page = 2;
    const limit = 10;

    const users = await User.find()
        .skip((page - 1) * limit)
        .limit(limit);

    res.json(users);
}
//countDocuments ye total count bata deta hai
async function totalUsers(req, res) {
    const total = await User.countDocuments();

    res.json({ total });
}

//hum regex ke throgh search kar sakte hai user & i  means case-insensitive
async function regexSearch(req, res) {
    const users = await User.find({
        name: /^A/i
    });

    res.json(users);
}

//Agar kill me node and mongoDb hai wah show Kar dega
async function allSkills(req, res) {
    const users = await User.find({
        skills: {
            $all: ["Node", "MongoDB"]
        }
    });

    res.json(users);
}

//Size opreator ka use hum is liye karte hain ki humko skill total kitna diksana ye first 2 ko dekhayega
async function skillSize(req, res) {
    const users = await User.find({
        skills: {
            $size: 2
        }
    });

    res.json(users);
}
//elemMatch by this opreator we access only matching element
async function elementMatch(req, res) {
    const users = await User.find({
        marks: {
            $elemMatch: {
                subject: "DBMS",
                marks: { $gt: 80 }
            }
        }
    });

    res.json(users);
}
async function test(req, res) {
    const users = await User.find({
        $max:{
            salary
        }

           });
    res.json(users);
}
async function nestedObject(req, res) {
    const users = await User.find({
        "address.city": "Jaipur"
    });

    res.json(users);
}
async function distinctCity(req, res) {
    const city = await User.distinct("city");

    res.json(city);
}
async function explainQuery(req, res) {
    const result = await User.find({
        email: "user10@gmail.com"
    }).explain("executionStats");

    res.json(result);
}
async function hintQuery(req, res) {
    const users = await User.find({
        email: "abdullah1@gmail.com"
    }).hint({ email: 1 });

    res.json(users);
}
async function QuerySimple(req, res) {
    const users = await User.aggregate([{
        $group:{
            _id:null,
            total:{$avg:"$salary"}
        }
    }])

    res.json(users);
}
module.exports = {
    getAllUsers,
    getOneUser,
    ageGreaterThan,
    ageLessThan,
    ageGreaterThanEqual,
    equalAge,
    notEqualCity,
    andOperator,
    orOperator,
    projection,
    sortBySalary,
    limitUsers,
    skipUsers,
    pagination,
    totalUsers,
    regexSearch,
    allSkills,
    skillSize,
    elementMatch,
    nestedObject,
    distinctCity,
    explainQuery,
    hintQuery,
};
