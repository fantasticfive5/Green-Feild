const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
<<<<<<< HEAD
//const jwt = require('jsonwebtoken');
=======
const bcrypt = require("bcrypt");
>>>>>>> 454bfd7a7683ddb4380ebad212ac6fc4ca9d504b
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE


//const items = require('../database-mongo');



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

app.post ('/signinUser', (req,res)=> {
  const email = req.body.email;
  const password = req.body.password;
  console.log("ok")
  res.send("Done")


});

app.post('/signUp', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.password;
  console.log("ok")
  res.send("Done")
});

app.post('/signinClient',(req, res) => {
   const email = req.body.email;
   const password = req.body.password
})

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

