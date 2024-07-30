const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.send('welcome my friends')
})

app.listen(port, () =>{
    console.log('running express server');
})