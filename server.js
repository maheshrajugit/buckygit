var http = require('http');
var fs = require('fs');
var connect = require('connect');

var app = connect();

profile = (request,response) =>{
    console.log('User Requested profile');
}


forum = (request,response) =>{
    console.log('User Requested Forum');
}


app.use('/profile',profile);
app.use('/forum',profile);


//Creating a server localhost:8888

http.createServer(app).listen(8888);
console.log("Server is now online...");

