const mongoose = require('mongoose')

const eventsSchema = new mongoose.Schema({
  title: String,
  content: String,
  thumbnail: String
})


mongoose.model('events', eventsSchema)