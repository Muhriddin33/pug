const express = require("express");
const { path } = require("express/lib/application");
const { send } = require("express/lib/response");
const router = express.Router();
const Backend = require("../model/function");

router.get("/", (req, res) => {
  res.render("home", {
    title: "Home page",
    isUZ:true
  });
});


router.get("/data/users", async (req, res) => {
  res.send(await Backend.getAllUsers())
});

module.exports = router;
