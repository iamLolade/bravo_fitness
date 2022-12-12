const Workout = require("../models/workoutModel")
const mongoose = require("mongoose")

// get all workouts
const getAllWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })

    res.status(200).json(workouts)
}

// get single workout
const getSingleWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "This workout does not exist!"})
    }

    const workout = await Workout.findById(id)

    if(!workout) {
        return res.status(404).json({ error: "This workout does not exist!"})
    }
    res.status(200).json(workout)
}

// create workout
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body
    try {
        const workout = await Workout.create({ title, reps, load })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createWorkout,
    getAllWorkouts,
    getSingleWorkout
}