const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { userName } = require('./database-mongo/dbmongo');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE


const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));



app.get('/', function (req, res) {
  items.selectAll(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
      console.log(data)
    }
  });
});



app.get("/", (req, res) => {
  res.send(" This is working !")
})

app.post('/signinUser', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log("ok")
  res.send("Done")


});
// rawan-azzam  
app.post('/signUp', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.password;
  const passowrdHash = bcrypt.hashSync(password, 8);
  userName.create({ username: { firstName: firstName, lastName: lastName }, password: passowrdHash }).then(function () {
    return res.status(HTTP_Created).send("Sign up successful");
  }).catch(function (err) {
    if (err.code === 11000) {
      return res.status(HTTP_BAD_REQUEST).send("You can't use this username")
    }
    return res.status(HTTP_SERVER_ERROR).send('Server Error');
  });
  console.log("ok")
  res.send("Done")
});

app.post('/signinClient', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  userName.findOne({ firstName: firstName }).then(function (user) {
    if (!userName) {
      return res.status(HTTP_UNAUTHORIZED).send({ error: "You Can Sign Up Here" });
    }
    const existPass = userName.password;
    bcrypt.compare(password, existPass).then(function (Matching) {
      if (Matching) {
        const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: 5000 });
        return res.send({ token: token });
      } else {
        return res.status(HTTP_UNAUTHORIZED).send({ error: 'Incorrect password' });
      }
    });
  });
  
});
    

app.listen(port, function () {
      console.log(`listening on port ${port}`);
    });

