const express = require('express');
const app = express();

const port_number = 5003;

//server configuration
app.set('name','Authentication Server API');
app.set('port',port_number);

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes 
app.use(require('./routes/authentication.routes'));
 
//server init
app.listen(app.get('port'),(req,res)=>{
    console.log('******AUTHENTICATION SERVER API****** \n');
    console.log('app: ',app.get('name'));
    console.log('port: ',app.get('port')); 
});