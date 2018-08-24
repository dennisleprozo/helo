const express = require("express");
const massive = require("massive");
const bodyParser = require("body-parser");
const controller = require("./controller.js");
require("dotenv").config();

let { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

// middleware
app.use(bodyParser.json());

//new end points
app.post('/api/auth/register', controller.register);
app.post('/api/auth/login', controller.login);

app.post('/api/posts/:userid', controller.createUserPosts);

//end points for single request
app.get('/api/posts/user/:userid', controller.getUserPosts);

app.get('/api/posts/post/:postid', controller.getSinglePost);


massive(CONNECTION_STRING).then(connection => {
    app.set("db", connection);
});

app.listen(SERVER_PORT, () => {
    console.log(`Cant stop listening on port ${SERVER_PORT}`);
});
