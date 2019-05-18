var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE

//var items = require('../database-mongo');
var database = {places:{"RBK": [{location: 'Mecca Mall'}], 
                        "RBK2": [{location: 'City Mall'}]}, 
                users: {}};

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
  console.log("rawan");
  res.send("hi")
})

app.post ('/signin', (req,res)=> {
  const username = req.body.username;
  const password = req.body.password;
  
   if(! database.users[username]){
       return res.status(HTTP_UNAUTHORIZED).send('Please sign up');
   }
  
})


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

