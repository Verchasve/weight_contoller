const express = require('express');
const serialport = require("serialport");
const SerialPort = serialport.SerialPort;
//const bindings = require('@serialport/bindings');
var listOfPorts=[];

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/', (req, res)=>{
	const {name} = req.body;
	res.send(`Welcome ${name}`);
});

app.get('/ports', (req, res)=>{
	  res.send(`ports`);
}); 
 

app.listen(PORT, (error) =>{
	if(!error)
	{
 //called automatically by bindings.list()
function list(ports) {
	listOfPorts=ports;
	// now listOfPorts will be the port Objects
	console.log(listOfPorts);
  }
  
  //bindings.list().then(list, err => {
	process.exit(1)
  //})
		console.log("Server is Successfully Running, and App is listening on port "+ PORT);
	}else
		console.log("Error occurred, server can't start", error);
	}
);
