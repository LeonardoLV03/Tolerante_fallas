const express = require('express');
const app = express();

const port_number = 3000;

//server configuration
app.set('name','Key Server API');
app.set('port',port_number);

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes 
app.use(require('./routes/key.routes'));
 
//server init
app.listen(app.get('port'),(req,res)=>{
    console.log('******KEY SERVER API****** \n');
    console.log('app: ',app.get('name'));
    console.log('port: ',app.get('port')); 
});