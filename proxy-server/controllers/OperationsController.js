//importe de servicios y helpers necesarios
const httpHandler = require('../services/handler');
//url de conexion del servidor de claves
const key_server_URL = "http://key-server:3000";
//url de conexion del servidor de autenticacion
const authenticate_server_URL = "http://authentication-server:5003";

//controlador de operaciones del servidor proxy
class OperationsController{

    //operacion de firma
    async sign(req,res){
        //envia operacion a authentication server
        const key = await httpHandler.Post(`${key_server_URL}/keys`, req.body)
        res.status(200).send(key.toString());

    }

    //operacion de autenticacion
    async authenticate(req,res){
        //envia solicitud a authentication server
        const result = await httpHandler.Post(`${authenticate_server_URL}/authenticate`,req.body);
        res.status(200).send(result);
    }

}

module.exports = new OperationsController();