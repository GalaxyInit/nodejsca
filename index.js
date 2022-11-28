// Application for the Form 
var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');   

//body parser middleware
app.use(bodyParser.urlencoded({extended:false})) 

app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "form1.html" );  
})  
app.post('/apply', function (req, res) {   
   response = {  
    first_name:req.body.first_name,  
    // last_name:req.body.last_name,
    // gender: req.body.gender,
    // adrr:req.body.addr 
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
})  
app.listen(2000, function (err) {  
 
  if (err) console.log(err); 
	console.log("listening on http://localhost:2000");
})

/// Socket IO code ###################################################################################

const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("Hello");
});

server.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});

io.on("connection", (socket) => {
  console.log("A user has connected with ID: " + socket.id);

  socket.on("message", (data) => {
    socket.broadcast.emit("message", data);  })
});

// SOCKET IO CLIENT CODE
//  Hello.ejs is the client code for socket io
