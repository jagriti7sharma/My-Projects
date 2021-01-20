const express = require('express');
const vary = require('vary');
var app = express();
var bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended:true}));

app.use(bodyparser.json());


app.get('/' , function(req , res){

 res.send('This is from node js');
})
 app.get('/api/helloworld', (req, res)=>{

     res.send('This is helloworld from node js and this is MERN application');
 
});
app.get('/api/getnames/',(req, res)=> {

var names =['john' , 'ronaldo' , 'sai']

res.send(names);

});

app.post('/api/validateusername',(req, res)=>{

var username= req.body.username

res.send('The received value of username is '+username);

    
});
app.listen(5000 , function(){

    console.log('Node js server is started');
})