const {
  getAll,
  add,
  update,
  deletee,
  getOne,
  importPlayers,
} = require("../database/module/modulePlayers");

module.exports = {
  getAllPlayers: function (req, res) {
    getAll(function (err, result) {
      err ? res.status(500).send(err) : res.status(200).send(result);
    });
  },
  addPlayer: function (req, res) {
    add(req.body, function (err, result) {
      err ? res.status(500).send(err) : res.status(200).send(result);
    });
  },
  updatePlayer: function (req, res) {
    update(req.body, req.params.id, function (err, result) {
      err ? res.status(500).send(err) : res.status(200).send(result);
    });
  },
  deletePlayer: function (req, res) {
    deletee(req.params.id, function (err, result) {
      err ? res.status(500).send(err) : res.status(200).send(result);
    });
  },
  getOnePlayer: function (req, res) {
    getOne(req.params.id, function (err, result) {
      err ? res.status(500).send(err) : res.status(200).send(result);
    });
  },
  importPlayers: async function (req, res) {
    try {
      const apiPlayers = await importPlayers();
      res.status(200).send(apiPlayers);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
