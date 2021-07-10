const router = require("express").Router();

const db = require("../models");

router.get("/workouts", async (req, res) => {
  try {
    const lastWorkout = await db.Workout.find();
    res.json(lastWorkout);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
