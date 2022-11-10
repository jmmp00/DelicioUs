const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Starting our app.
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const connection = mysql.createPool({
    host     : 'localhost', // Your connection adress (localhost).
    user     : 'root',     // Your database's username.
    password : '',        // Your database's password.
    database : 'delicious'   // Your database's name.
  });

  app.get('/users', function (req, res){
    connection.getConnection(function (err, connection){
      connection.query('SELECT * FROM users', function (error, results, fields){
        if (error) throw error;

        res.send(results)
      });
    });
  });

  app.listen(3000, () => {
    console.log('Go to http://localhost:3000/users so you can see your data')
  })

