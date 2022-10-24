const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Starting our app.
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const connection = mysql.createConnection({
    host     : 'localhost', // Your connection adress (localhost).
    user     : 'root',     // Your database's username.
    password : '',        // Your database's password.
    database : 'delicious'   // Your database's name.
  });

  const server = app.listen(4545, function(){
    var host = server.address().address
    var port = server.address().port
  });

  connection.connect(function(error){
    if(error) console.log(error);
    else console.log("connected")
  });
