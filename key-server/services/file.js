const fs = require('fs');
var ReadWriteLock = require('rwlock');
//lock para exlusion mutua
var lock = new ReadWriteLock();
//clase para  manejo de archivos
class File {

    static Write(path, ...data){
        lock.writeLock(function (release) {
            for (const value of data) {
                fs.appendFileSync(path, value.toString() + '\n');
            }
            release();
        });
    }

    static Read(path){
        const fileData = fs.readFileSync(path);
        //Devuelve array de strings separados por saltos de linea 
        return fileData.toString().split('\n');
    }
}

module.exports = File;
