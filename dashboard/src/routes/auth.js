const router = require("express").Router();
const passport = require("passport");

router.get("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.redirect("/");
  } else {
    res.redirect("/");
  }
});

router.get("/", passport.authenticate("discord"));
router.get(
  "/redirect",
  passport.authenticate("discord", {
    failureRedirect: "/forbidden",
    successRedirect: "/dashboard",
  })
);
module.exports = router;
