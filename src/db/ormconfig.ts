import path from 'path'
import { ConnectionOptions } from 'typeorm';
import APP_CONFIG from "../config/AppConfig";


export const ormConfig = {
    host: APP_CONFIG.DB_HOST,
    type: APP_CONFIG.DB_TYPE,
    port: APP_CONFIG.DB_PORT,
    username: APP_CONFIG.DB_USERNAME,
    password: APP_CONFIG.DB_PASSWORD,
    database: APP_CONFIG.DB_NAME,
    schema: APP_CONFIG.DB_SCHEMA,
    synchronize: true,
    ssl: false,
    migrationsRun: false,
    dropSchema: false,
    entities: [
        path.join(__dirname, '..', 'entities', '**', '*.*'),
        path.join(__dirname, '..', 'entities', '*.*')
    ],
    migrations: [path.join(__dirname, 'migrations', '*.*')],
    cli: {
        entitiesDir: path.join(__dirname, '..', 'entities'),
        migrationsDir: path.join(__dirname, 'migrations')
    }
} as any;

if (APP_CONFIG.DB_HOST === 'localhost') {
    delete ormConfig.ssl;
    delete ormConfig.extra;
  }
  

export default ormConfig as ConnectionOptions;