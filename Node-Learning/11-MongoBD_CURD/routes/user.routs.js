const express = require("express");

const {
  handleGetAllUser,
  getUserByID,
  handleUpdateById,
  handleDeleteById,
  handleCreateUser,
  handleGetallUserInDB,
} = require("../controllers/user.controller");

const router = express.Router();

router
.route("/html")
.get(handleGetallUserInDB);
router
  .route("/")
  .get(handleGetAllUser)
  .post(handleCreateUser);

router
  .route("/:id")
  .get(getUserByID)
  .patch(handleUpdateById)
  .delete(handleDeleteById);

module.exports = router;
