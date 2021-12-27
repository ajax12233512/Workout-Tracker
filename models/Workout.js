const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/aqueous-beyond-96443", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false

});

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day:{
        type: Date,
    },
    exercises:[
        
    ],
    
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
