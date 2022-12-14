import 'dotenv/config'
import express, { json } from 'express';
import { db } from './database/db';
import { router } from './routes/routes'

const PORT = process.env.PORT ?? 3000
const app = express();

app.use(json());
app.use(router);

app.listen(PORT, async () => {
    try{
        await db.sync()
        console.log("Successfully connected to the database!")
    } catch(err) {
        console.log(`Unable to connect to the database. Msg: ${err}`)
    }
    console.log(`App running on PORT ${PORT}`);
})