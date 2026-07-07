const fs = require("fs");

const users = require("../data/user.data.json");

// GET
const getUser = (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  return res.status(200).json(user);
};

// POST
const createUser = (req, res) => {
  const body = req.body;

  const newUser = {
    id: users.length + 1,
    ...body,
  };

  users.push(newUser);

  fs.writeFile(
    "../data/user.data.json",
    JSON.stringify(users, null, 2),
    (err) => {
      if (err) {
        return res.status(500).json({
          message: "Error writing file",
        });
      }

      return res.status(201).json({
        message: "User created successfully",
        user: newUser,
      });
    }
  );
};

// PUT
const replaceUser = (req, res) => {
  const id = Number(req.params.id);

  const body = req.body;

  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  users[index] = {
    id,
    ...body,
  };

  fs.writeFile(
    "../data/user.data.json",
    JSON.stringify(users, null, 2),
    (err) => {
      if (err) {
        return res.status(500).json({
          message: "Error writing file",
        });
      }

      return res.status(200).json({
        message: "User replaced successfully",
        user: users[index],
      });
    }
  );
};

// PATCH
const updateUser = (req, res) => {
  const id = Number(req.params.id);

  const body = req.body;

  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  users[index] = {
    ...users[index],
    ...body,
    id,
  };

  fs.writeFile(
    "../data/user.data.json",
    JSON.stringify(users, null, 2),
    (err) => {
      if (err) {
        return res.status(500).json({
          message: "Error writing file",
        });
      }

      return res.status(200).json({
        message: "User updated successfully",
        user: users[index],
      });
    }
  );
};

// DELETE
const deleteUser = (req, res) => {
  const id = Number(req.params.id);

  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  users.splice(index, 1);

  fs.writeFile(
    "../data/user.data.json",
    JSON.stringify(users, null, 2),
    (err) => {
      if (err) {
        return res.status(500).json({
          message: "Error writing file",
        });
      }

      return res.status(200).json({
        message: "User deleted successfully",
      });
    }
  );
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  replaceUser,
  deleteUser,
};
