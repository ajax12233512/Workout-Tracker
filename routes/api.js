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

router.post('/api/workouts', async(req, res)=>{
    console.log(req.body)
        const newWorkout = await Workout.create(
            {
                day: Date.now(),
                excercises: [
                    // {
                    //     type: req.body.type,
                    //     name: req.body.name,
                    //     distance: req.body.distance,
                    //     durations: req.body.duration,
                    //     length: 1
                    // }
                ],

            }
        )
        console.log(newWorkout);
    res.json(newWorkout)
})

router.put('/api/workouts/:id', async (req, res) => {
//    console.log(req.body)
    const newExcercise = await Workout.findByIdAndUpdate(req.params.id, {
        exercises: req.body
    });

    res.json(newExcercise)
})

module.exports = router;