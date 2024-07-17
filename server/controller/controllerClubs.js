const {
  getAll,
  add,
  importClubs,
  getOne,
  updatee, 
  deletee
} = require("../database/module/moduleClub");

module.exports = {
  getAllClubs: function (req, res) {
    getAll(function (err, result) {
      err ? res.status(500).send(err) : res.status(200).send(result);
    });
  },
  addClub: function (req, res) {
    add(req.body, function (err, result) {
      err ? res.status(500).send(err) : res.status(200).send(result);
    });
  },
  getOneTeamClub: function (req, res) {
    getOne(req.params.id, function (err, result) {
      err ? res.status(500).send(err) : res.status(200).send(result);
    });
  },
  updateClub: function (req, res) {
    updatee(req.body, req.params.id, function (err, result) {
      err ? res.status(500).send(err) : res.status(200).send(result);
    });
  },
  deleteClub: function (req, res) {
    deletee(req.params.id, function (err, result) {
      err ? res.status(500).send(err) : res.status(200).send(result);
    });
  },

  importClubsContoller: async function (req, res) {
    try {
      const apiClubs = await importClubs();
      res.status(200).send(apiClubs);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
