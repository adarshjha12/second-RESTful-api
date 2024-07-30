const express = require('express')
const router = express.Router()
const Batter = require('../../models/schema')

router.use(express.json())

router.post('/batsmen', async (req, res) =>{
    try {
        let createPlayer = new Batter(req.body)
        let data = await createPlayer.save()
        console.log(data, 'post request successful🚩');
        res.status(201).send(data)
    } catch (error) {
        console.log(error);
        res.status(404).send('something went wrong')
    }
})
module.exports = router