const express = require("express");
const router = express.Router();

const {
  variableMethod,
  functionMethod,
  scopeMethod,
} = require("../controllers/basic.controller")

router.get("/variable",variableMethod);
router.get("/function",functionMethod);
router.get("/scope",functionMethod);

module.exports = router;
