const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Starting our app.
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

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

  // Login button enters this method
  app.all('/user', function (req, res){
    connection.getConnection(function (err, connection){
      connection.query('SELECT * FROM users', function (error, results, fields){
        if (error) throw error;
        res.send({status:200})
        //Request is sent accordingly with hardcoded username and password
        console.log("\n"+JSON.stringify(results)); //retrieves from DB but doesnt send for some reason to frontend
      });
    });
  });

  app.post('/register',urlencodedParser, function(req, res, next) {
    console.log(req.body.username);
    console.log(req.body.email);
    console.log(req.body.password);;
  var sql = "INSERT INTO `users`(`username`,`email`, `password`) VALUES ('"+req.body.username+"','"+req.body.email+"','"+req.body.password+"')";
  connection.query(sql, function(err, result)  {
   if(err) throw err;
   console.log("table created");
  });
});

  app.listen(3000, () => {
    console.log('Go to http://localhost:3000/users so you can see your data')
  })