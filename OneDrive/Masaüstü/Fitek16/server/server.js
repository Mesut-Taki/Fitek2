const { connect } = require("formik");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "192.168.1.152",
  user: "sa",
  password: "Ymp@adm123",
});

connection.end();
//api olusturmak gerekiyor
//
