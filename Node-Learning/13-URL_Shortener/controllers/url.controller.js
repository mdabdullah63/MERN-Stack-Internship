const { nanoid } = require("nanoid")
const URL = require("../model/url")
// const home= require("../view")
async function handleGenerateURL(req, res) {
    // console.log("BODY:", req.body);

    const { originalUrl } = req.body;

    if (!originalUrl) {
        return res.status(400).send("URL Required");
    }

    const shortId = nanoid(5);

    await URL.create({
        shortId,
        redirectUrl: originalUrl,
        visiteHistory: [],
    });

    return res.render("home", {
        id: shortId,
    });
}
async function shortId (req, res){
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {        visiteHistory: {
          timestamp: Date.now(),
        },
      },
    },
    { new: true }
  );

  if (!entry) {
    return res.status(404).json({ message: "Short URL not found" });
  }

  return res.redirect(entry.redirectUrl);
};
   async function serverSideRander (req, res) {
  const allUrls = await URL.find({});
  return res.send(`
    <html>
      <head>
        <title>All URLs</title>
      </head>
      <body>
        <h2>Short URLs</h2>

        <ol>
          ${allUrls
            .map(
              (url) => `
                <li>
                  <strong>${url.shortId}</strong> -
                  <a href="${url.redirectUrl}">
                    ${url.redirectUrl}
                  </a>
                </li>
              `
            )
            .join("")}
        </ol>

      </body>
    </html>
  `);
};
  async function Htmlsending (req, res) {
  // const allUrls = await URL.find({});
  return res.render("home")
  }
module.exports = {
  handleGenerateURL,shortId,serverSideRander,Htmlsending,
}
