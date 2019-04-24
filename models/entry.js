// Import db.js
const db = require('../db')
// Import mongoose from node_modules
const mongoose = require('mongoose')

let schema = mongoose.Schema
let ObjectId = schema.Types.ObjectId

// Create schema for task
// tl_entry -> singular here, pl in database
const db_task = db.model('tl_entry', {
  name:{
    type: String,
    required: true,
  },
  age :{
    type: Number,
  }

})

// Export
module.exports = db_entry
