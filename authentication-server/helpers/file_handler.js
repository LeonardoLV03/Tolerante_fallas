const fs = require('fs');

//helper para manejo de archivos
class FileHandler{

    //Metodo para leer en archivo

    Read(path){
        const fileData = fs.readFileSync(path);
        //Devuelve array de strings separados por saltos de linea 
        return fileData.toString().split('\n');
    }
}

module.exports = new FileHandler();