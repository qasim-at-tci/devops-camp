const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const app = express();

const PORT = process.env.PORT || 3000;

app.set("trust proxy");

app.use(express.json());
app.use(logger("combined"));
app.use(cors());

const db = require("./models");
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

const router = require("./routers/router");

app.use("/api/v1/", router);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
