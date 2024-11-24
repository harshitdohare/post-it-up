import express from 'express';
import dotenv from 'dotenv';

const app = express(); // tell that we are using express

dotenv.config();

//components
import Connection from './database/db.js';
import Router from './routes/route.js';

const PORT = 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

