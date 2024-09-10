const { generateRandomId } = require("../utlils");
const shortURL = require("../model/shortnerModel");
async function handleGenerateNewURL(req, res) {
  if (!req.body.url) {
    return res.status(400).json({ msg: "URL is required" });
  }
  const ids = generateRandomId(8);
  try {
    const result = await shortURL.create({
      shortnerID: ids,
      redirectURL: req.body.url,
    });
    return res.status(201).json(result);
  } catch (err) {
    console.log("ERROR:\n", err);
    res.status(500).json({ msg: "SERVER ERROR" });
  }
}

module.exports = { handleGenerateNewURL };
