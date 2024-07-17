const {
  getAll,
  add,
  update,
  deletee,
  getOne,
  login,
} = require("../database/module/moduleAdmin");

module.exports = {
  getAllAdmin: function (req, res) {
    getAll(function (err, result) {
      err ? res.status(500).send(err) : res.status(200).send(result);
    });
  },
  addAdmin: function (req, res) {
    add(req.body, function (err, result) {
      err ? res.status(500).send(err) : res.status(200).send(result);
    });
  },
  updateAdmin: function (req, res) {
    update(req.body, req.params.id, function (err, result) {
      err ? res.status(500).send(err) : res.status(200).send(result);
    });
  },
  deleteAdmin: function (req, res) {
    deletee(req.params.id, function (err, result) {
      err ? res.status(500).send(err) : res.status(200).send(result);
    });
  },
  getOneAdmin: function (req, res) {
    getOne(req.params.id, function (err, result) {
      err ? res.status(500).send(err) : res.status(200).send(result);
    });
  },
  loginAdmin: function (req, res) {
    login(req.body.name, function (err, result) {
      if (err) {
        return res.status(500).send(err);
      }
      if (result.length === 0) {
        return res.status(404).send("admin not found");
      }
      const user = result[0];
      if (user.password === req.body.password) {
        return res.status(200).send(true);
      } else {
        return res.status(401).send(false);
      }
    });
  },
};
