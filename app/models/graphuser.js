const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdLeagues: [
    {
      type: Schema.Types.ObjectId,
      ref: 'League'
    }
  ]
})

module.exports = mongoose.model('Graphuser', userSchema)
