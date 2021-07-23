const express = require('express');
const app = express();
const port = 3000;
const pgp = require('pg-promise')();
const cn = {
    host: 'db',
    port: 5432,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    max: 30 // use up to 30 connections
};
const db = pgp(cn);

app.get('/', (req, res) => res.send('Hello world!'));

app.get('/api/', (req, res) => res.send('Hello! API connection is correct!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));