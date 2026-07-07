const express = require("express");
const router = express.Router();

const {
  getUser,
  createUser,
  updateUser,
  replaceUser,
  deleteUser,
} = require("../controllers/user.controller");

router.post("/", createUser);

router
  .route("/:id")
  .get(getUser)
  .put(replaceUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;

