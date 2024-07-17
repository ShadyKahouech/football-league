const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "league",
});

connection.connect((err) => {
  if (err) {
    throw err;
  } else console.log("Database Connected");
});
module.exports = { connection };
