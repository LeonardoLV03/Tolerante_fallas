//main app router
const {Router} = require('express');
const app_router = Router();
const controller = require('../controllers/key-controller');
 
app_router.post('/keys',controller.PostKey);

module.exports = app_router; 