import 'dotenv/config'
import { Sequelize } from "sequelize";

const dbName: string = process.env.DB_NAME ?? 'teste'
const dbUser: string = process.env.DB_USER ?? 'tester'

export const db = new Sequelize(
    dbName,
    dbUser,
    process.env.DB_PASS, {
        dialect: 'mysql',
        host: process.env.DB_HOSTNAME,
        port: 3306
    }

)