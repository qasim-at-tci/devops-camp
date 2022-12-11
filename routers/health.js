const express = require("express");
const { health } = require("../controllers/health");
const hRouter = express.Router();

hRouter.get("/health", health);

module.exports = hRouter;
