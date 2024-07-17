const { connection } = require("./index");
const axios = require("axios");

const getAll = function (callback) {
  sql = `select * from players`;
  connection.query(sql, function (err, res) {
    callback(err, res);
  });
};
const add = function (values, callback) {
  const sql = `insert into players set ?`;
  connection.query(sql, values, function (err, res) {
    callback(err, res);
  });
};
const update = function (values, idplayers, callback) {
  const sql = `update admin set ? where idplayers = ?`;
  connection.query(sql, [values, idplayers], function (err, res) {
    callback(err, res);
  });
};
const deletee = function (idplayers, callback) {
  const sql = `delete from admin where idplayers = ?`;
  connection.query(sql, idplayers, function (err, res) {
    callback(err, res);
  });
};
const getOne = function (values, callback) {
  const sql = `select * from admin where idplayers = ?`;
  connection.query(sql, values, function (err, res) {
    callback(err, res);
  });
};

const importPlayers = async function (page = 1) {
  const url = "https://v3.football.api-sports.io/players";
  const headers = {
    "x-apisports-key": "6e62acad03eb5e02b92e782cc36d78ed",
    "Content-Type": "application/json",
  };
  const params = {
    league: "202",
    season: "2023",
    page: page,
  };

  try {
    const res = await axios.get(url, {
      headers,
      params,
    });

    const players = res.data.response;
    const totalPages = res.data.paging.total;

    for (const player of players) {
      const playerData = {
        firstname: player.player.firstname,
        lastname: player.player.lastname,
        age: player.player.age,
        birth: player.player.birth.date,
        nationality: player.player.nationality,
        height: player.player.height,
        weight: player.player.weight,
        photo: player.player.photo,
      };
      await new Promise((resolve, reject) => {
        const sql = "INSERT INTO players SET ?";
        connection.query(sql, playerData, function (err, res) {
          if (err) return reject(err);
          resolve(res);
        });
      });
    }

    if (page < totalPages) {
      await importPlayers(page + 1);
    }

    return players;
  } catch (error) {
    console.error("Error fetching players:", error);
    throw error;
  }
};

module.exports = {
  importPlayers,
  getOne,
  deletee,
  update,
  add,
  getAll,
};
