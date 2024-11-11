const express = require('express');
const app = express();

const port_number = 8081;

//server configuration
app.set('name','proxy server API');
app.set('port',port_number);

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes 
app.use(require('./routes/operation.routes'));
 
//server init
app.listen(app.get('port'),(req,res)=>{
    console.log('******PROXY SERVER API****** \n');
    console.log('app: ',app.get('name'));
    console.log('port: ',app.get('port')); 
});