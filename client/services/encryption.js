const md5 = require("md5");
var CryptoJS = require("crypto-js");

//servicio de encripcion con md5
class Encryption {

    static hashMD5(msg){
        return CryptoJS.MD5(msg).toString();
    }

    static Encrypt(ukey,msgHash){
        return CryptoJS.AES.encrypt(msgHash,ukey.toString());
    }

    static Decrypt(key,signature){
        let og_text = CryptoJS.AES.decrypt(signature,key.toString(),);
        return og_text.toString(CryptoJS.enc.Utf8) ;
    }
}

module.exports = Encryption;