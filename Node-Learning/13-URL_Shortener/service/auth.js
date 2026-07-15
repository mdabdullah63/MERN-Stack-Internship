const sessionIdToMap = new Map();

function SetUser(id, user) {
  sessionIdToMap.set(id, user);
}

function getUser(id) {
  return sessionIdToMap.get(id);
}

module.exports = {
  SetUser,
  getUser,
};
