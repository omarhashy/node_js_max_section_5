const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nood-complete",
  password: "omar",
});

module.exports = pool.promise();
