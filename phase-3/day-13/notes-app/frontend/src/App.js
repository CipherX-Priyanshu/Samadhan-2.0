import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: '', language: 'English' });
  const [editNote, setEditNote] = useState(null);
  const [editData, setEditData] = useState({ title: '', content: '', language: 'English' });
  const userId = '123';

  // Fetch notes
  useEffect(() => {
    axios.get(`http://localhost:3000/api/notes/${userId}`)
      .then(res => setNotes(res.data))
      .catch(err => console.error(err));
  }, [userId]);

  // Add a new note
  const handleAddNote = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/notes', { ...newNote, userId })
      .then(res => {
        setNotes([...notes, res.data]);
        setNewNote({ title: '', content: '', language: 'English' });
      })
      .catch(err => console.error(err));
  };

  // Update a note
  const handleUpdateNote = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/api/notes/${editNote._id}`, editData)
      .then(res => {
        setNotes(notes.map(note => note._id === editNote._id ? res.data : note));
        setEditNote(null);
        setEditData({ title: '', content: '', language: 'English' });
      })
      .catch(err => console.error(err));
  };

  // Delete a note
  const handleDeleteNote = (id) => {
    axios.delete(`http://localhost:3000/api/notes/${id}`)
      .then(() => {
        setNotes(notes.filter(note => note._id !== id));
      })
      .catch(err => console.error(err));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Study Notes</h1>

      {/* Add Note Form */}
      <form onSubmit={handleAddNote} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <textarea
          placeholder="Content"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
          style={{ marginRight: '10px', padding: '5px', width: '200px', height: '50px' }}
        />
        <select
          value={newNote.language}
          onChange={(e) => setNewNote({ ...newNote, language: e.target.value })}
          style={{ marginRight: '10px', padding: '5px' }}
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
        <button type="submit" style={{ padding: '5px 10px' }}>Add Note</button>
      </form>

      {/* Edit Note Form */}
      {editNote && (
        <form onSubmit={handleUpdateNote} style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Title"
            value={editData.title}
            onChange={(e) => setEditData({ ...editData, title: e.target.value })}
            style={{ marginRight: '10px', padding: '5px' }}
          />
          <textarea
            placeholder="Content"
            value={editData.content}
            onChange={(e) => setEditData({ ...editData, content: e.target.value })}
            style={{ marginRight: '10px', padding: '5px', width: '200px', height: '50px' }}
          />
          <select
            value={editData.language}
            onChange={(e) => setEditData({ ...editData, language: e.target.value })}
            style={{ marginRight: '10px', padding: '5px' }}
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
          <button type="submit" style={{ padding: '5px 10px' }}>Update Note</button>
          <button onClick={() => setEditNote(null)} style={{ padding: '5px 10px', marginLeft: '10px' }}>Cancel</button>
        </form>
      )}

      {/* Display Notes */}
      {notes.length === 0 ? (
        <p>No notes available.</p>
      ) : (
        notes.map(note => (
          <div key={note._id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
            <h3>{note.title} ({note.language})</h3>
            <p><strong>Content:</strong> {note.content}</p>
            {note.summary && <p><strong>Summary:</strong> {note.summary}</p>}
            <p><small>Created: {new Date(note.createdAt).toLocaleDateString()}</small></p>
            <button onClick={() => { setEditNote(note); setEditData(note); }} style={{ padding: '5px 10px', marginRight: '10px' }}>Edit</button>
            <button onClick={() => handleDeleteNote(note._id)} style={{ padding: '5px 10px' }}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default NotesApp;