const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory data store for students
let students = [
  { id: 1, name: "John Doe", email: "john@example.com", marks: 85 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", marks: 90 }
];

// GET all students
app.get('/students', (req, res) => {
  res.json(students);
});

// GET a specific student by ID
app.get('/students/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json(student);
});

// POST a new student
app.post('/students', (req, res) => {
  const { name, email, marks } = req.body;
  if (!name || !email || !marks) {
    return res.status(400).json({ message: "Name, email, and marks are required" });
  }
  const newStudent = {
    id: students.length + 1,
    name,
    email,
    marks
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT to update a student
app.put('/students/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });

  const { name, email, marks } = req.body;
  if (name) student.name = name;
  if (email) student.email = email;
  if (marks) student.marks = marks;

  res.json(student);
});

// DELETE a student
app.delete('/students/:id', (req, res) => {
  const index = students.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Student not found" });

  students.splice(index, 1);
  res.json({ message: "Student deleted" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});