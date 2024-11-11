const fs = require('fs');
var ReadWriteLock = require('rwlock');
 
//lock para exclusion mutua
var lock = new ReadWriteLock();

//metodos helpers para manejo de archivos
class File {

    //metodo de lectura
    static Read(path){
        const fileData = fs.readFileSync(path);
        return fileData.toString().split('\r\n');
    }
    //metodo de escritura
    static Write(path, ...data){
        lock.writeLock(function (release) {
            // do stuff
            //limpia archivo
            fs.writeFileSync(path,'');
            //escribe data
            for (const value of data) {
                fs.appendFileSync(path, value.toString() + '\n');
            }
            release();
        });
    }



}

module.exports = File;
