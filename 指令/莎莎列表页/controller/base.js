var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var multer = require('multer');
var mysql = require('mysql');
var connection;

function createConnection() {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'shashaguanwang'
	});
}
app.use(bodyParser.urlencoded({
	extended:false
}))
app.get('/gain',function(req,res){
	createConnection();
	connection.connect();
	console.log(66)
res.append("Access-Control-Allow-Origin", "*")
})
app.listen(7777)