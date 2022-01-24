const express = require('express')
const app = express();
const path = require('path')
const fs = require('fs')
const port = 8000
const bodyparser=require('body-parser')
// //Mongoose
// const mongoose = require('mongoose');
// main().catch(err => console.log(err));
// async function main() {
//     await mongoose.connect('mongodb://localhost:27017/contactdance');
// }
// //Defining schema
// const contactSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     number: String,
//     Style: String,
//     time: String
// });
// const contact = mongoose.model('contact', contactSchema);

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
    // let myData= new contact(req.body)
    // myData.save().then(()=>{
    //     res.send("saved")
    // }).catch(()=>{
    //     res.status(400)
    // });
    data = req.body
    console.log(data);
    let text = `Name:${data.name}, Age:${data.age}, Number:${data.number}, Style:${data.Style}, Time:${data.time}` + `\n`
    res.status(200).render('schedule.pug')
    fs.appendFileSync('output.txt', text);
});


