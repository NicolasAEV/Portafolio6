import {Sequelize}  from "sequelize";

    const DB_DATABASE = process.env.DB_DATABASE || 'portafolio';
    const DB_USER = process.env.DB_USER || 'postgres';
    const DB_HOST = process.env.DB_HOST || 'localhost';
    const DB_PASSWORD = process.env.DB_PASSWORD || 'Jasonpia';





export const sequelize  = new Sequelize (DB_DATABASE,DB_USER,DB_PASSWORD,{
    host : DB_HOST,
    dialect:'postgres'
})


    