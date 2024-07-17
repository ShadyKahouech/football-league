const { connection } = require("./index");
const axios = require("axios");

module.exports = {
  getAll: function (callback) {
    sql = `select * from clubs`;
    connection.query(sql, function (err, res) {
      callback(err, res);
    });
  },
  add: function (values, callback) {
    sql = `insert into clubs set ?`;
    connection.query(sql, values, function (err, res) {
      callback(err, res);
    });
  },

  importClubs: async function () {
    const url = "https://v3.football.api-sports.io/teams";
    const headers = {
      "x-apisports-key": "6e62acad03eb5e02b92e782cc36d78ed",
      "Content-Type": "application/json",
    };
    const params = {
      league: "202",
      season: "2023",
    };

    try {
      const res = await axios.get(url, {
        headers,
        params,
      });

      const clubs = res.data.response;

      for (const club of clubs) {
        const clubData = {
          name: club.team.name,
          code: club.team.code,
          country: club.team.country,
          founded: club.team.founded,
          logo: club.team.logo,
        };
        await new Promise((resolve, reject) => {
          const sql = `insert into clubs set ?`;

          connection.query(sql, clubData, function (err, res) {
            if (err) {
              return reject(err);
            } else {
              resolve(res);
            }
          });
        });
      }
      return clubs;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  getOne: function (values, callback) {
    const sql = `select * from clubs where idteam = ?`;
    connection.query(sql, values, function (err, res) {
      callback(err, res);
    });
  },

  updatee: function (values, idteam, callback) {
    const sql = `update clubs set ? where idteam = ?`;
    connection.query(sql, [values, idteam], function (err, res) {
      callback(err, res);
    });
  },
  deletee: function (idteam, callback) {
    const sql = `delete from clubs where idteam = ?`;
    connection.query(sql, idteam, function (err, res) {
      callback(err, res);
    });
  },
};
