// requiring npm express and npm path
const express = require('express')
const path = require('path');

// express function on port
const app = express()
// const port = process.env.PORT || 3000
const port = process.env.PUBLIC_URL || 3000


// using express 
app.use(express.static(path.join(__dirname, 'build')));
app.listen(port, () => console.log(`App is running on ${port}!`))
