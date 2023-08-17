const express= require('express');
const app=express();
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');

//
const userRoute = require("./routes/users");
app.use("/api/users", userRoute);


//

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false,limit :'350mb' }));
// parse application/json
app.use(bodyParser.json());

require('dotenv').config();

//file upload
const fileUpload = require('express-fileupload');
app.use(fileUpload());

app.use(cors());
global.publicPath=__dirname+'/public'; //path to the public folder

//FIRST API ENDPOINT
// app.get(function(req, res, next){
	// global.req
	// next();
// });

app.use(express.static(__dirname + '/public'));

//Mongoose setup
const mongoose = require('mongoose');
const PORT = process.env.PORT || 6001;
// mongoose.connect(process.env.CONNECTION_STRING, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

//   })
//   .catch((error) => console.log(`${error} did not connect`));

//image
app.use(function(req, res, next){
	global.req=req;
	next();
});
app.use(express.static(__dirname + '/public')); //image path


mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    }).
    then(()=>{
	console.log('MongoDB connected successfully');
}).catch((err)=>{
	console.log(err);
}); 
// 2021

require('./helpers/extend-node-input-validator')
require('./routes/server')(app);

// const http=require('http');
require('./routes/server');
const server=http.Server(app);
// const app = require('../../app');
// const http = require('http').createServer(app).listen(3001);
// const port=process.env.PORT||3000;
server.listen(PORT,()=>{
	console.log(`server is running on port localhost:${PORT}`);
});