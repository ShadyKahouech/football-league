const express = require("express");
const PORT = 8080;
const cors = require("cors");

const app = express();
const { route } = require("./controller/route");
app.use(express.json());
app.use(cors());
app.use(route);
app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
