const { Router } = require("express");
const Url = require("../models/index");
const router = Router();

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

router.get("/", (req, res) => {
  res.json({
    message: "Server running",
  });
});
// Redirect to url
router.get("/:name", async (req, res) => {
  try {
    const query = await Url.findOne({ name: req.params.name });
    res.redirect(query.link);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Opps something went wrong" });
  }
});

// Create new shortened url
router.post("/", async (req, res) => {
  try {
    const newEntry = await Url.create({
      name: makeid(5),
      link: req.body.link,
    });
    res.status(201).json({
      message: "Success",
      data: { name: newEntry.name, link: newEntry.link },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Opps something went wrong" });
  }
});

module.exports = router;
