const { connection } = require("./index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = "dbVWs9I6EfQ5It0YjnZ5OwLXq2EbrVy8";

module.exports = {
  getAll: function (callback) {
    const sql = `select * from admin`;
    connection.query(sql, function (err, res) {
      callback(err, res);
    });
  },
  
  add: function (values, callback) {
    const sql = `insert into admin set ?`;
    connection.query(sql, values, function (err, res) {
      callback(err, res);
    });
  },
  update: function (values, idadmin, callback) {
    const sql = `update admin set ? where idadmin = ?`;
    connection.query(sql, [values, idadmin], function (err, res) {
      callback(err, res);
    });
  },
  deletee: function (idadmin, callback) {
    const sql = `delete from admin where idadmin = ?`;
    connection.query(sql, idadmin, function (err, res) {
      callback(err, res);
    });
  },
  getOne: function (values, callback) {
    const sql = `select * from admin where idadmin = ?`;
    connection.query(sql, values, function (err, res) {
      callback(err, res);
    });
  },
  // findByName: function (values, callback) {
  //   const sql = `select * from admin where name = ?`;

  //   connection.query(sql, values, function (err, res) {
  //     callback(err, res);
  //   });
  // },
  login: function (name, callback) {
    console.log("login", name);
    const sql = `select * from admin where name = ?`;
    connection.query(sql, name, function (err, res) {
      callback(err, res);
    });
  },
};
