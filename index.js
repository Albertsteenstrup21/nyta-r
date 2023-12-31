//create server on localhost port 3000
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.static(__dirname + "/view/"));


//start server and listen on port 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`));