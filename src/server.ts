require('custom-env').env(true);
require('dotenv').config();
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import { createConnection } from 'typeorm';
import ormConfig from './db/ormconfig';
import APP_CONFIG from './config/AppConfig';
import { APP_ROUTES } from './routes';

class Server{
    private app: express.Application;
    constructor(){
        this.app = express();
        this.configuration();
        this.routes();
        ( async () => await createConnection(ormConfig) )()
    }
    
    public configuration(){
        this.app.set('port', APP_CONFIG.PORT || 3000);
    }
    
    public routes(){
        APP_ROUTES.forEach((route) => {
           this.app.use(
              route.path,
              route.action
            );
          });
    }

    public start() {
        try {
            this.app.listen(this.app.get('port'), () => {
                console.log(`packaging app server is running on port ${this.app.get('port')}`)
            })
        } catch (error) {
            console.log('error setting up the backend for packaging');
        }
    }
}


const server = new Server();
server.start();