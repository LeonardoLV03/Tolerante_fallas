//main app router
//rutas del servidor proxy
const {Router} = require('express');
const app_router = Router();
const controller = require('../controllers/OperationsController');
 
//ruta para firmar
app_router.post('/sign',controller.sign);
//ruta par autenticar
app_router.post('/authenticate',controller.authenticate);

module.exports = app_router; 