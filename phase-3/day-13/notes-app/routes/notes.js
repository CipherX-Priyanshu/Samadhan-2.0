const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const { HfInference } = require('@huggingface/inference');

const hf = new HfInference(process.env.HF_API_TOKEN);

// Create a note with optional summarization
router.post('/', async (req, res) => {
  try {
    let summary = '';
    if (req.body.content && process.env.HF_API_TOKEN) {
      const summarization = await hf.summarization({
        model: 'facebook/bart-large-cnn',
        inputs: req.body.content,
        parameters: { max_length: 100 }
      });
      summary = summarization.summary_text;
    }
    const note = new Note({
      title: req.body.title,
      content: req.body.content,
      userId: req.body.userId,
      language: req.body.language || 'English',
      summary: summary
    });
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read all notes for a user
router.get('/:userId', async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.params.userId });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a note
router.put('/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: 'Note not found' });

    note.title = req.body.title || note.title;
    note.content = req.body.content || note.content;
    note.language = req.body.language || note.language;
    let summary = note.summary;
    if (req.body.content && process.env.HF_API_TOKEN) {
      const summarization = await hf.summarization({
        model: 'facebook/bart-large-cnn',
        inputs: req.body.content,
        parameters: { max_length: 100 }
      });
      summary = summarization.summary_text;
    }
    note.summary = summary;
    const updatedNote = await note.save();
    res.json(updatedNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a note
router.delete('/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: 'Note not found' });

    await note.remove();
    res.json({ message: 'Note deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;