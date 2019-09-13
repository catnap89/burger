require("dotenv").config();
var mysql = require("mysql");
var mysqlPass = require("../keys")


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: mysqlPass.mysqlConnect,
  database: "burger_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
