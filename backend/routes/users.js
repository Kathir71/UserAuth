var express = require("express");
var router = express.Router();
const User = require("../models/userModel");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.post("/signup", (req, res) => {
  const { userName, userEmail, userPassword } = req.body;
  console.log("In signup router");
  User.find({ userEmail: { $eq: userEmail } }).then((response) => {
    if (response.length != 0) {
      res.status(401).send("Email taken");
      return;
    } else {
      let newUser = new User({
        userName,
        userEmail,
        userPassword,
      });
      newUser.save();
      res.status(200).json({userName:userName , userEmail:userEmail});
    }
  });
});
router.post("/login", (req, res) => {
  const { userEmail, userPassword } = req.body;
  User.find({userEmail:{$eq: userEmail} , userPassword:{$eq:userPassword}}).then((response) => {
    if ( response.length === 0) {
      res.status(401).send("Wrong email or password")
    }
    else {
      console.log(response);
      res.status(200).json(response);
    }
  })
});
module.exports = router;
