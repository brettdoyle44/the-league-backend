const mongoose = require('mongoose')

const Schema = mongoose.Schema

const leagueSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  game: {
    type: String,
    required: true
  },
  maxTeams: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('League', leagueSchema)
