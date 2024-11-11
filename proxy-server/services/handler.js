const axios = require("axios").default;

//handler de manejo de peticiones http global
class HttpHandler {

  static async Post(url,data) {
    try {
        const res = await axios.post(url, data);
        return res.data;
    } catch (error) {
    }
  }
}


module.exports = HttpHandler;
