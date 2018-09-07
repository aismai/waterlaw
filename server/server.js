const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.DATABASE,
  { useNewUrlParser: true }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// MODELS
const { User } = require("./models/user");

// USER ROUTES
app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ success: true, userdata: doc });
  });
});

app.post("/api/users/login", (req, res) => {
  // find the email
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({ loginSuccess: false, message: "Email not found" });
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "Wrong password" });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({
            loginSuccess: true
          });
      });
    });
  });

  // check password

  // generate token
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
