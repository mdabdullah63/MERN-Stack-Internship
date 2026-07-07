const express = require("express");
const router = express.Router();

const {
    destructuring,
    objectKeysMethod,
    objectValuesMethod,
    nestedObjectMethod,
    spreadOperatorMethod,
    optionalChainingMethod
} = require("../controllers/object.controller");

router.get("/destructuring", destructuring);
router.get("/keys", objectKeysMethod);
router.get("/values", objectValuesMethod);
router.get("/nested", nestedObjectMethod);
router.get("/spread", spreadOperatorMethod);
router.get("/optional", optionalChainingMethod);

module.exports = router;
