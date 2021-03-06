const router = require("express").Router();
const path = require("path");

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/images/fitness-favicon.png"));
});

module.exports = router;
