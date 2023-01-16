const express = require('express');
//
//
console.log("Hello Tasos");

var moment = require('moment');
var date = moment().format('LL');
console.log(date);

const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
	res.status(200);
	res.send("Welcome to root URL of Server  TASOS POIMENIDIS  copyright ");
});

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, and App is listening on port "+ PORT);
	else
		console.log("Error occurred, server can't start", error);
	}
);
