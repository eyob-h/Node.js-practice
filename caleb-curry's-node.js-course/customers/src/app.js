const express = require('express');
const app = express();
const PORT = process.env.PORT||3000;
//mongodb
const mongoose = require('mongoose');
mongoose.set('strictQuery',false);


//get values from api request
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//env
const dotenv = require("dotenv");
dotenv.config();

const JSONA = {
	"name": "Eyoba",
	"age": "23",

	"interests": [
		"basketball", "drawing", "astronomy"
	],
	"fav numbers": [
		3, 6, 12
	],

	"family": [{
			"name": "Mulu",
			"r/ship": "Mom"
		},
		{
			"name": "Emaye",
			"r/ship": "Grandma"
		}
	]
}


app.get('/',(req,res)=>{
        // res.send(JSONA.family[0].name);
        res.send("Welcome.");
});

app.get("/api/family", (req,res) =>{
    res.send({"data":JSONA.family});
});

app.post('/',(req,res)=>{
    res.send("Postabet")
})

app.post('/api/register', (req,res)=>{
    console.log(req.body.name);
    res.send(req.body.name);
})

// app.listen(PORT, () => {
	//     console.log("App listening at port..."+ PORT);
	// })
	
const start = async()=>{
	try{

			await mongoose.connect('mongodb+srv://eyob:kidusMichael12@cluster0.0ktmkuv.mongodb.net/?retryWrites=true&w=majority');
			
			app.listen(PORT, () => {
				console.log("App listening at port..."+ PORT);
			});
	}catch(e){
			console.log(e.message);
	}
}
	
start();