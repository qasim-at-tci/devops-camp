const express = require("express");
const hRouter = express.Router();

hRouter.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
  });
});

module.exports = hRouter;
