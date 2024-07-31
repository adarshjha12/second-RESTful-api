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
router.get('/batsmen', async (req, res) =>{
    try {
        let findPlayer = await Batter.find()
        console.log(findPlayer, 'get request successful🚩');
        res.status(201).send(findPlayer)
    } catch (error) {
        console.log(error);
        res.status(404).send('something went wrong')
    }
})
router.get('/batsmen/:id', async (req, res) =>{
    try {
        let id = req.params.id
        let getById =  Batter.findById(id)
        let data = await getById
        if (data === null) {
           return res.send("enter valid id, this id doesn't exists")
        }
        console.log(data, 'getById request successful🚩');
        res.status(201).send(data)
    } catch (error) {
        console.log(error);
        res.status(404).send('something went wrong')
    }
})
router.put('/batsmen/:id', async (req, res) =>{
    try {
        let id = req.params.id
        let updatePlayer = Batter.findByIdAndUpdate(id, req.body, {new: true})
        let data = await updatePlayer
        console.log(data, 'put request successful🚩');
        res.status(201).send(data)
    } catch (error) {
        console.log(error);
        res.status(404).send('something went wrong')
    }
})
router.delete('/batsmen/:id', async (req, res) =>{
    try {
        let id = req.params.id
        let deletePlayer = Batter.findByIdAndDelete(id)
        let data = await deletePlayer
        console.log(data, 'delete request successful🚩');
        res.status(201).send(data)
    } catch (error) {
        console.log(error);
        res.status(404).send('something went wrong')
    }
})


module.exports = router