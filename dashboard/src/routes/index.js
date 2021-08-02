const router = require("express").Router();
const express = require("express");
const app = express();
const ejs = require("ejs");

router.get("/", function (req, res) {
  res.render("home");
});

router.get("/invite", function (req, res) {
  res.redirect(
    "https://discord.com/oauth2/authorize?client_id=871680404116094976&permissions=8&scope=bot"
  );
});

router.get("/premium", function (req, res) {
  res.render("premium");
});

module.exports = router;
