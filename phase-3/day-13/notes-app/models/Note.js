const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  userId: { type: String, required: true },
  language: { type: String, enum: ['Hindi', 'English'], default: 'English' },
  summary: { type: String }
});

module.exports = mongoose.model('Note', noteSchema);