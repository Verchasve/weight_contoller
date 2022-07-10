const express = require('express');
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;


const app = express();


const PORT = 3000;
app.use(express.json());
app.post('/', (req, res)=>{
	const {name} = req.body;

	res.send(`Welcome ${name}`);
});

app.get('/ports', (req, res)=>{
	
	
	  //ports => ports.forEach(port =>console.log(port.path)),
	  res.send(`ports`);
});



app.listen(PORT, (error) =>{
	if(!error)
	{
		console.log(serialport.SerialPort.length);
		console.log("Server is Successfully Running, and App is listening on port "+ PORT);
	}else
		console.log("Error occurred, server can't start", error);
	}
);
