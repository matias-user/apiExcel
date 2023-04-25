const express = require('express')

class Server {

    
    constructor() {
        this.app = express();
        this.port = 3000;
        this.excelPath = '/excel';
        
        
        this.listenServer(3000);
        this.routes();
    }

    routes(){
        this.app.use( this.excelPath, require('./routes/excel') );
    }

    listenServer() {
        this.app.listen( this.port ,() => {
            console.log(`Corriendo en puerto: ${this.port}`)
        });
    }
}

module.exports = Server;