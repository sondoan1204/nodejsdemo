var mysql = require('mysql');

var con = mysql.createConnection({
  host: "us-cdbr-iron-east-03.cleardb.net",
  user: "b636dd1f900291",
  password: "289a6ce7",
  database: "heroku_dd5a7d323e58e9a"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
//   exports.getCategories = function(callback) {
//   var sql = "SELECT * FROM category";
//   // get a connection from the pool
  
//   con.getConnection(function(err, connection) {
//     if(err) { console.log(err); callback(true); return; }
//     // make the query
//     connection.query(sql, function(err, results) {
//       connection.release();
//       console.log(result);
//       if(err) { console.log(err); callback(true); return; }
//       callback(false, results);
//     });
//   });
// };
con.query('SELECT * FROM category', function(err, rows, fields) {
  if (!err)
    console.log('Dữ liệu là: ', rows);
  else
    console.log('Lỗi!!!');
    
});
});