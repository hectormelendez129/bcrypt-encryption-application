const express = require("express");
const router = express.Router(); //use router method
const User = require("./User");
const bcrypt = require("bcryptjs");

// ROUTE 1:
router.post("/signup", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.password, salt); // creates the salt
  let user = await User.create({  //created by the user in user.js
    email: req.body.email,
    password: secPass,
  });
  res.json({ user });
});
module.exports = router;