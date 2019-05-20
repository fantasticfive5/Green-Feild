const express = require("express");
const jwt = require('jsonwebtoken');
const { HTTP_UNAUTHORIZED, HTTP_SERVER_ERROR } = require("./error_type.js");
const { SECRET_KEY } = require("./secret.js");
const { userName } = require("database-mongo/dbmongo.js");

const bodyParser = express.json();

const authenticate = function(req, res, next){
    const token = req.headers['x-access-token']; //Username encoded in token
    if(!token){
        return res.status(HTTP_UNAUTHORIZED).send('Please sign in');
    }
    jwt.verify(token, SECRET_KEY, function(err, decodedToken){
        //If err, token invalid
        if(err){
          return res.status(HTTP_UNAUTHORIZED).send('Please sign in');
       }
        //Check if user exists in the database
        const username = decodedToken.username;
        User.findOne({username: username}).then(function(user){
            console.log(user);
            if(!user){
                return res.status(HTTP_UNAUTHORIZED).send('Please sign up');
            }
            req.body.user = user; //Put user in req.body
            return next();
        }).catch(function(err){
            return res.status(HTTP_SERVER_ERROR).send(err);
        })
    });
};


exports.bodyParser = bodyParser;
exports.authenticate = authenticate;