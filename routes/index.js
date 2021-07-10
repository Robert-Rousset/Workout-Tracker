const router = require("express").Router();
const workoutRoutes = require("./workout-routes");
const htmlRoutes = require("./html-routes");

router.use("/", htmlRoutes);
router.use("/api", workoutRoutes);

module.exports = router;
