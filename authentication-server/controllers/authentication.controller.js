const fileHandler = require('../helpers/file_handler');

//controlador de autenticacion
class AuthenticationController{
    async Authenticate(req,res){
        //variable booleana para manejar validez o invalidez del ususario, por defecto en falso 
        let isValid = false;
        //lee los datos de la base de datos y obtener un array de strings
        let datos = fileHandler.Read('db/datos.txt');
        //ontener index del array de strings del ususario
        let user_index = datos.indexOf(req.body.user);
        //no encuentra el usuario, envia falso
        if(user_index === -1) isValid = false;
        //verificar si el index del usuario es 0, en caso de serlo, retornar falso para prevenir outOfBounds exception
        if(user_index === 0) isValid = false;
        //encuentra al usuario
        //obtebner index de la clave del usuario, en este caso sera index_usuario - 1
        let key_index = user_index - 1;
        //comparar la clave ingresada vs la clave en la base de datos, formato de clave - numerica
        if(parseInt(datos[key_index]) === parseInt(req.body.user_key))
            isValid = true;
        else 
            isValid = false;
        //enviar respuesta al servidor proxy
        res.status(200).send(isValid);
    }

}

module.exports = new AuthenticationController();