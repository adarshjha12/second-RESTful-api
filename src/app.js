const express = require('express')
const app = express()
const port = 3000
require('./db/connection')
const router = require('./routers/router')
const Batter = require('../models/schema')

app.use(router)

app.get('/', (req, res) =>{
    res.send('welcome my friends')
})

app.listen(port, () =>{
    console.log('running express server 🚩');
})