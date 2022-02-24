import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import { createConnection } from 'typeorm';


class Server{
    private app:express.Application;
    constructor(){
        this.app = express();
        this.configuration();
        this.routes();
    }

    public configuration(){
        this.app.set('port',3000);
    }

    public routes(){

    }

    public start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`packaging app server is running on port ${this.app.get('port')}`)
        })
    }
}


const server = new Server();
server.start();