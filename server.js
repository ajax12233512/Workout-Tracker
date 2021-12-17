const express = require('express');
const mongoose = require('mongoose')
const app = express();
const path = require('path');

const api = require('./routes/api.js')

const PORT = process.env.PORT || 3001;

app.use(express.static('public'))
app.use(api);

//Database connections
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/aqueous-beyond-96443", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false

});

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/exercise', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/exercise.html'))
})

app.get('/stats', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/stats.html'))
})

app.listen(PORT, () =>{console.log('Server listening on http://localhost:3001')})