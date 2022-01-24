const express = require("express");
const path = require("path");
const app = express();
const port = 3003;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    res.status(200).render('F1.pug');
})
app.get('/F2', (req, res)=>{
    res.status(200).render('F2.pug');
})
app.get('/F3', (req, res)=>{
    res.status(200).render('F3.pug');
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
