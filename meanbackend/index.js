var http=require('http');//node js module inmport

var express=require('express');

var port=process.env.PORT || 8080;

var app =express();//creates express application

var mongoose=require('mongoose');

var bodyParser=require('body-parser');

var appRoutes=require('./routes/appRoutes');









/*use mongoose to connect to the mongo db */

mongoose.connect('mongodb://localhost/meanDb');

/*Set up body parser which is used to submit the form data to the server*/

 app.use(bodyParser.urlencoded({extended:true}));

 app.use(bodyParser.json()); 

/*Middleware */

app.use('/',appRoutes);

/*now we need a request handler: we use Express.Js framework as a dependency*/

http.createServer(app).listen(port);









console.log("Backend runnning on port:",port);