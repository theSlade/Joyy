const router = require("express").Router();

router.get("/commands", function (req, res) {
  res.render("commands");
});

module.exports = router;
