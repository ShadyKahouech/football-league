const {
  getAllPlayers,
  addPlayer,
  updatePlayer,
  deletePlayer,
  getOnePlayer,
  importPlayers,
} = require("./controllerPlayer");
const {
  getAllClubs,
  addClub,
  importClubsContoller,
  getOneTeamClub,
  updateClub,
  deleteClub,
} = require("./controllerClubs");
const {
  getAllAdmin,
  addAdmin,
  updateAdmin,
  deleteAdmin,
  getOneAdmin,
  loginAdmin,
} = require("./controllerAdmin");
const route = require("express").Router();

/**
 * ! ROUTE FOR PLAYERS
 */

route.get("/players/getAll", getAllPlayers);
route.get("/players/:id", getOnePlayer);
route.post("/players/add", addPlayer);
route.post("/players/api", importPlayers);
route.put("/players/:id", updatePlayer);
route.delete("/players/:id", deletePlayer);

// route.post("/players/add", addOnePlayer);

/**
 * ! ROUTE FOR club
 */

route.get("/clubs/getAll", getAllClubs);
route.get("/clubs/:id", getOneTeamClub);
route.post("/clubs/add", addClub);
route.post("/clubs/api", importClubsContoller);
route.put("/clubs/:id", updateClub);
route.delete("/clubs/:id", deleteClub);
/**
 * ! ROUTE FOR admin
 */

route.get("/admin/getAll", getAllAdmin);
route.get("/admin/:id", getOneAdmin);
route.post("/admin/login", loginAdmin);
route.post("/admin/add", addAdmin);
route.put("/admin/:id", updateAdmin);
route.delete("/admin/:id", deleteAdmin);

module.exports = {
  route,
};
