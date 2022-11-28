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


// ####################################### BACKGROUND COLOR CODE
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>

  <body>
    <div id="box">Some text here</div>
    <button id="btn">Button</button>

    <script src="index.js"></script>
  </body>
</html>


//################################### index.js

const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
  // 👇️ change background color
  document.body.style.backgroundColor = 'salmon';

  // 👇️ optionally change text color
  // document.body.style.color = 'white';
});


// #######################################  File system wala code to write file
var fs = require('fs');



app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "form.html"));
});


app.post('/data', [ 

  check('name').isAlpha().withMessage('Must be alpha ony').isLength({ min: 10, max: 20 }).withMessage('Name length should be 10 to 20 characters'), 
  
  check('email').isEmail().isLength({ min: 10, max: 30 }).withMessage('Email length should be 10 to 30 characters'), 

  check('mobile').isLength({ min: 10, max: 10 }). withMessage('Mobile number should contains 10 digits'), 

  check('password').isLength({ min: 8, max: 10 }).withMessage('Password length should be 8 to 10 characters'),

  oneOf([
      check('gender').isIn(['male', 'female']).withMessage('Gender is required')]),

], function(req, res) { 

const errors = validationResult(req); 
if (!errors.isEmpty()) { 
  res.send(errors) 
} 

else { 
      response = {  
          email:req.body.email,  
          name:req.body.name,
          mobile: req.body.mobile,
          password:req.body.password,
          gender:req.body.gender
         };  
         let data = JSON.stringify(response, null, 2);
         fs.appendFile('data.txt', data, function () { 
          console.log('Write operation complete.');
      });
      res.end("successfully submitted");
} 
});



// ####################################### Factorial of Numver
<!DOCTYPE HTML>
<html>

<head>
	<title>
		Factorial of a number using JavaScript
	</title>
</head>

<body style = "text-align:center;">
	
	<h1 style = "color:green;" >
		GeeksForGeeks
	</h1>
	
	<p id = "GFG_UP" style =
		"font-size: 15px; font-weight: bold;">
	</p>

		
	<button onclick = "GFG_Fun()">
		Click Here
	</button>
	
	<p id = "GFG_DOWN" style =
		"color:green; font-size: 20px; font-weight: bold;">
	</p>

		
	<script>
		var up = document.getElementById('GFG_UP');
		var down = document.getElementById('GFG_DOWN');
		var n = 5;
		
		up.innerHTML = "Click on the button to calculate"
				+ " the factorial of n.<br>n = " + n;
		
		function Factorial(n) {
			var ans=1;
			
			for (var i = 2; i <= n; i++)
				ans = ans * i;
			return ans;
		}
		
		function GFG_Fun() {
			down.innerHTML = Factorial(n);
		}
	</script>
</body>

</html>


{/* //// ####################################### MongoDB Client Code */}


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

