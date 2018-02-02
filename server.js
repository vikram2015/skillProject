/**
 * Created by vikram on 1/2/18.
 */


var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");
var config = require("./config/config");
var Skills = require('./server/routes/skillsRoute');


var app = express();
app.use(express.static(__dirname + '/client'));
app.set('views',path.join(__dirname,'/views'));

//code for server start
app.listen(config.port,function (err) {
    if(err){
        console.log("Problem in server startup");
    }else{
        console.log("server connected at port "+ config.port);
    }
});




//code for middleware
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(bodyparser());
app.use(cors());

//code for routes
app.use('/skills',Skills);


app.get('*',function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
})


//for DataBase Connectivity
mongoose.connect(config.database);
mongoose.connection.on('connected',function (err) {
    if(err){
        console.log("Error occur"+err);
    }else{
        console.log("connected to port 27017");
    }
})

/*app.use(multer({ path: './uploads/',
 rename: function (fieldname, filename) {
 return filename;
 },
 }));*/


module.exports = app;