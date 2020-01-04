var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "gathos2019"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;