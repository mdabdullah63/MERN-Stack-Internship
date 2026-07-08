const User = require("../model/user");
const mongoose = require("mongoose");

async function handleGetAllUser(req, res) {
  try {
    const allDBUser = await User.find({});
    // console.log("Database se aaya hua data:", allDBUser);
    return res.json(allDBUser);
  } catch (error) {
    console.error("Error details:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
async function getUserByID(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid User ID format" });
  }

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User Not Found" });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function handleUpdateById(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid User ID format" });
  }

  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });

    if (!user) {
      return res.status(404).json({ error: "User Not Found" });
    }

    return res.json({
      status: "Success",
      updatedUser: user,
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Delete User By ID
async function handleDeleteById(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid User ID format" });
  }

  try {
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ error: "User Not Found" });
    }

    return res.status(200).json({
      status: "Success",
      message: "User Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Create User
async function handleCreateUser(req, res) {
  const body = req.body;

  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({
      error: "All fields (firstName, lastName, email, gender, job_title) are required",
    });
  }

  try {
    const user = await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      gender: body.gender,
      job_title: body.job_title,
    });

    return res.status(201).json({
      status: "Success",
      user,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: "Details are already exists" });
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
}


// Show HTML respose in Mongodb
async function handleGetallUserInDB(req, res) {
  try {
    const allDBUser = await User.find({});
    const html = `
      <ol>
        ${allDBUser
          .map(
            (user) =>
              `<li>${user.firstName} ${user.lastName} - ${user.email}</li> \n`
          )
          .join("")}
      </ol>
    `;
    return res.send(html);
  } catch (error) {
    return res.status(500).send("<h1>Internal Server Error</h1>");
  }
}

module.exports = {
  handleGetAllUser,
  getUserByID,
  handleUpdateById,
  handleDeleteById,
  handleCreateUser,
  handleGetallUserInDB,
};
