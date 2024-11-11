const keyService = require("../services/key-service");
const file = require('../services/file');

//controlador de operaciones del servidor de claves
class KeyController{
    //operacion de generacion de clave
    async PostKey(req,res){
        let key = 0;
        const datos = file.Read('db/datos.txt');
        const user_index = datos.indexOf(req.body.username);
        if(user_index > -1) key = datos[user_index - 1];
        else key =keyService.GenerateKey(req.body);
        res.status(200).send(key.toString());
    }

}

module.exports = new KeyController();