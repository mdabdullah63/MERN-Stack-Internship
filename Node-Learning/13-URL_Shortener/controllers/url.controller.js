const { nanoid } = require("nanoid")
const URL = require("../model/url")
async function handleGenerateURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({
      massage: "bad url",
      error: "url is require"
    })
  }
  const shortId = nanoid(5);

  await URL.create({
    shortId,
    redirectUrl: body.url,
    visiteHistory: [],
  });
  return res.json({ id: shortId });
}
module.exports = {
  handleGenerateURL,
}
