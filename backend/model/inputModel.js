const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    
  },
  start_date: {
    type: Date,
    required: true,
    
  },
  end_date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model( "user",userSchema);
