const authRoute = require('./auth.route');
module.exports=(app)=>{
	app.get('/',function(req,res){
		res.send({
			'message':'Our first endpoint'
		});
	});
    app.use('/auth',authRoute);
}



