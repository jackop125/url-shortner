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
      createdBy:req.user.id
    });
    const urls = await shortURL.find({createdBy:req.user.id});
    return res.status(201).render("home",{genURL:result.shortnerID,urls:urls});
  } catch (err) {
    console.log("ERROR:\n", err);
    res.status(500).json({ msg: "SERVER ERROR" });
  }
}

async function handleGetReq(req, res) {
  try {
    const urls = await shortURL.find({createdBy:req.user.id});
    if (!urls) {
      return res.end("Server Error");
    }
    return res.json(urls)
  } catch (err) {
    return res.end(err)
  }
}

async function handleRedirectReq(req,res){
  const id = req.params.shortId;

  try {
    const result = await shortURL.findOne({ shortnerID: id });

    if (!result) {
      // Handle the case where no matching short ID is found
      return res.status(404).json({ msg: "Short URL not found" });
    }
    const Redirecturl = result.redirectURL;
    res.redirect(Redirecturl);
  } catch (error) {
    // Handle server errors
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
}
module.exports = { handleGenerateNewURL,handleGetReq,handleRedirectReq };
