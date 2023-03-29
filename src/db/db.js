import * as dotenv from 'dotenv'
dotenv.config()
import {Sequelize}  from "sequelize";

    // const DB_DATABASE = process.env.DB_DATABASE;
    // const DB_USER = process.env.DB_USER;
    // const DB_HOST = process.env.DB_HOST;
    // const DB_PASSWORD = process.env.DB_PASSWORD;

export const sequelize  = new Sequelize ('portafolio','postgres','Jasonpia0',{
    host :'localhost',
    dialect:'postgres'
})

    