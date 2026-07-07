const express = require("express");
const router = express.Router();

const {
  forEachMethod,
  mapMethod,
  filterMethod,
  findMethod,
  findIndexMethod,
  someMethod,
  everyMethod,
  reduceMethod,
} = require("../controllers/array.controller");

router.get("/foreach", forEachMethod);
router.get("/map", mapMethod);
router.get("/filter", filterMethod);
router.get("/find/:id", findMethod);
router.get("/findindex/:id", findIndexMethod);
router.get("/some", someMethod);
router.get("/every", everyMethod);
router.get("/reduce", reduceMethod);

module.exports = router;
