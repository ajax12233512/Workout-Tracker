const router = require('express').Router();
const Workout = require('../models/Workout')

router.get('/api/test', (req, res) =>{
    Workout.find()
        .sort({id: -1})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err =>{
            res.status(500).json(err);
        })
}); 
router.get('/api/workouts', (req, res) =>{
    Workout.find({})
        .sort({date: -1})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err =>{
            res.status(500).json(err);
        })
}); 

router.get('/api/workouts/range', (req, res) =>{
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err =>{
            res.status(500).json(err);
        })
}); 

module.exports = router;