const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },

    team:{
        type: String,
        required: true
    },

    country:{
        type: String,
        required: true
    },

    basePrice:{
        type: String,
        required: true,
    },

    finalPrice: {
        type: String,
        required: true,

    },

 stats: {
     matches: {
         type: Number,
         required: true,
     },
     runs: {
         type: Number,
         required: true,
     },
     strikeRate: {
         type: Number,
         required: true,
     }
 }
})

 const Batter = mongoose.model('Batter', playerSchema)

  module.exports = Batter