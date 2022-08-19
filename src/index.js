require("dotenv").config();
const express = require('express');
const db = require('../database/connection')

const app = express();
const PORT = process.env.PORT;

app.use(express.json())

app.listen(PORT, async () => {
    await db.sync()
        .then(console.log("Database connected successfully!"))
        .catch((err) => console.log(`Unable to connect to database: ${err}`))

    console.log(`App is running on PORT ${PORT}`);
});
