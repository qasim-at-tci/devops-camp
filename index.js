const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const healthRoute = require("./routers/health");
const { connectToDb } = require("./config/db");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger("combined"));
app.use(cors());

connectToDb();

app.use("/api/v1/", healthRoute);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
