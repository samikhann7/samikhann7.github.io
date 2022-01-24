const express = require('express')
const app = express();
const path = require('path')
const fs = require('fs')
const port = 8000
const bodyparser=require('body-parser')

//EXPRESS SPECIFIC
app.use('/static', express.static('static'))//Serving static files
app.use(express.urlencoded())//For saving info

//PUG SPECIFIC
app.set('view engine', 'pug')//Setting template format as pug
app.set('views', path.join(__dirname, 'views'))// Set the views directory

// ENDPOINT
app.get("/", (req, res) => {
    res.status(200).render('home.pug')
});
app.get("/book", (req, res) => {
    res.status(200).render('book.pug')
});
app.get("/schedule", (req, res) => {
    res.status(200).render('schedule.pug')
});

//STARTING SERVER
app.listen(port, (req, res) => {
    console.log(`Running at localhost:${port}`);
});

//SAVING
app.post('/schedule', (req, res) => {
    data = req.body
    console.log(data);
    let text = `Name:${data.name}, Age:${data.age}, Number:${data.number}, Style:${data.Style}, Time:${data.time}` + `\n`
    res.status(200).render('schedule.pug')
    fs.appendFileSync('output.txt', text);
});
