const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory task storage
let tasks = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build To-Do App', completed: false },
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the To-Do App API! Please use <a href="/api/tasks">/api/tasks</a> to access the tasks.');
});

// Existing routes
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Task text is required' });
  const newTask = {
    id: tasks.length + 1,
    text,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.delete('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  res.json({ message: 'Task deleted' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});