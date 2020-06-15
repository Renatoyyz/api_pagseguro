import express from 'express';
import routes from './routes';

class App{//App

    constructor(){//constructor
        this.server = express();
        this.middleWare();
        this.routes();
    }//constructor

    middleWare(){//middleWare
        this.server.use(express.json());
    }//middleWare

    routes(){//route
        this.server.use(routes);
    }//route
    
}//App

export default new App().server;