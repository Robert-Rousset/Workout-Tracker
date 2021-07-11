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

router.get("/workouts/range", async (req, res) => {
  try {
    const allWorkouts = await db.Workout.find();
    res.json(allWorkouts);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/workouts", async (req, res) => {
  try {
    const workout = await db.Workout.create(req.body);
    res.json(workout);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put("/workouts/:id", async (req, res) => {
  try {
    const updateData = await db.Workout.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $push: {
          exercises: req.body,
        },
      }
    );
    res.json(updateData);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
