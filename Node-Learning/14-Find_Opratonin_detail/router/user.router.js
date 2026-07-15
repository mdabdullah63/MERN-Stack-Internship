const express = require("express");
const router = express.Router();

const {
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
} = require("../controller/user.controller");

router.get("/users", getAllUsers);
router.get("/user", getOneUser);

router.get("/age/gt", ageGreaterThan);
router.get("/age/lt", ageLessThan);
router.get("/age/gte", ageGreaterThanEqual);
router.get("/age/eq", equalAge);

router.get("/not", notEqualCity);
router.get("/and", andOperator);
router.get("/or", orOperator);

router.get("/projection", projection);
router.get("/sort/salary", sortBySalary);

router.get("/limit", limitUsers);
router.get("/skip", skipUsers);

router.get("/pagination", pagination);
router.get("/count", totalUsers);

router.get("/regex", regexSearch);

router.get("/skills/all", allSkills);
router.get("/skills/size", skillSize);
router.get("/marks/elem-match", elementMatch);

router.get("/address/city", nestedObject);
router.get("/distinct/city", distinctCity);

router.get("/explain", explainQuery);
router.get("/hint", hintQuery);

module.exports = router;
