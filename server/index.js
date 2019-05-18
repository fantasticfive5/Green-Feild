var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE


//var items = require('../database-mongo');


var app = express();
const port = 3000;
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));



app.get('/', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
      console.log(data)
    }
  });
});
app.get("/", (req,res) => {
  res.send(" This is working !")
})

app.post ('/signin', (req,res)=> {
  const username = req.body.username;
  const password = req.body.password;
  console.log("ok")

  res.send("Done")
   
  
});


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

