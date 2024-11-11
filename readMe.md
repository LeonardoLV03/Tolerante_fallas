# Diagrama de Arquitectura

<p>Sistema de multiples servidores para la realización de operaciones de cifrado y firma de mensajes dentro de un ambiente de TI compuesto por una red virtual y distintos contenedores (aplicaciones cliente-servidor)</p>

<div align="center">
    <img src="https://user-images.githubusercontent.com/34323866/211435090-18391ed3-500f-420a-8b03-aa013176386e.png"/>
</div>

# Instrucciones de ejecución


<p style="text-align: center; font-weight:bold">
 Este proyecto requiere ser ejecutado con docker
</p>

<div align="center">
<img 
    style="display: block; 
           width: 30%;"
    src="https://logos-world.net/wp-content/uploads/2021/02/Docker-Logo-700x394.png?size=400" 
    alt="Docker logo">
</img>
</div>

1. Ejecute el comando `npm install` en los siguientes directorios:
    * client
    * proxy-server
    * key-server
    * authentication-server
 
2. Agregue un archivo denominado `input.txt` en el directorio "in" de la carpeta raíz del proyecto, quedando la siguiente estructura:
    ```
        /in/input.txt
    ```

3. Elimine el contenido del archivo `datos.txt` ubicado en el directorio "/db" 

    ```
        /db/datos.txt
    ```


4. Ejecute el comando `docker compose up` para levantar los contenedores de aplicación y la red docker desplegando el log de las mismas.

   **_NOTA: el cliente fallará la primera ejecución pues los servidores no han terminado de inicializar_**

    Los contenedores a levantar son:
    ```
    * client-app
    * proxy-server:8081
    * key-server:3000
    * authentication-server:5003 
    ```
5. Ingrese en el archivo `input.txt` la operacion a procesar en cualquiera de los siguientes formatos

    * Operación Firma
    ```
    FIRMAR
    <Identidad de usuario de clave>
    <Texto del Mensaje>
    ```
    * Opración Integridad
    ```
    INTEGRIDAD
    <clave de usuario>
    <Texto del Mensaje>
    <Texto de la Firma del Mensaje>
    ```
    * Operación Autenticar
    ```
    AUTENTICAR
    <clave de usuario>
    <Identidad de usuario de clave>
    ```

6. Una vez inicializados los servidores web, en otra terminal inicie la aplicacion cliente de manera manual por medio de los siguientes comandos:
    ```
        docker container start client-app
        docker logs client-app
    ```
   **_NOTA: Los pasos 5 y 6 se repetiran por cada prueba a realizar, con base a las tres operaciones_**

## Librerías
<div style="
margin-left:auto;
margin-right:auto;
">
</div>

- [Nodejs](https://nodejs.org/en/docs/)
- [Expressjs](https://expressjs.com/)
- [fs](https://www.geeksforgeeks.org/node-js-file-system/)
- [axios](https://axios-http.com/docs/intro)
- [md5](https://www.npmjs.com/package/md5)
- [rwlock](https://www.npmjs.com/package/rwlock)
- [docker](https://docs.docker.com/get-docker/)
