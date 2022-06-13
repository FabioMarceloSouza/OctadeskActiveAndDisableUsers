const express = require('express');

class App {
     app;
    constructor(){
        this.app = express();
    }

    listen() {
        this.app.listen(3000, () => {
            console.log('rodando')
        })    
    }
        
}

module.exports = App;

