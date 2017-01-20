var express = require("express");
var app = express();
var PORT = process.env.PORT || 9000;
var mysql      = require('mysql');
var password = require("./ignore.js");
// var table = require("./server/controllers/tableController.js")
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  port: 3306,
  password:password.password,
  database : 'motorheadDB'
});
connection.query("SHOW TABLES LIKE 'user';", function(err, rows, fields) {
  	if (err) throw err;
  	if (rows.length > 0) {
  		console.log("db exists")
  	}
  	else{
  		console.log("db doesn't exist")
  		// table.createTable(connection);
  	}
});
var logger = require("morgan");
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
require('./routes')(app, connection);


app.listen(PORT, function(){
	console.log("listening on " + PORT)
})