// phase-1/day-5/day5.js
const express = require('express');
const app = express();
app.use(express.json());

const students = [
  { id: 1, name: 'Rahul', marks: [85, 78, 92] },
  { id: 2, name: 'Priya', marks: [70, 65, 80] },
  { id: 3, name: 'Aman', marks: [90, 88, 95] },
  { id: 4, name: 'Simran', marks: [60, 55, 68] }
];

// GET route: Root path
app.get('/', (req, res) => {
  res.send('Welcome to the Student API! Try /api/students or /api/students?lang=hindi');
});

// GET route: Return list of students
app.get('/api/students', (req, res) => {
  const lang = req.query.lang === 'hindi' ? 'hindi' : 'english';
  const translatedStudents = students.map(student => ({
    ...student,
    name: lang === 'hindi' ? translateToHindi(student.name) : student.name,
    grade: calculateGrade(student.marks)
  }));
  res.json(translatedStudents);
});

// POST route: Add a new student
app.post('/api/students', (req, res) => {
  const { name, marks } = req.body;
  if (!name || !Array.isArray(marks) || marks.length !== 3) {
    return res.status(400).json({ error: 'Name and array of 3 marks are required' });
  }
  const newStudent = { id: students.length + 1, name, marks };
  students.push(newStudent);
  res.status(201).json({ ...newStudent, grade: calculateGrade(newStudent.marks) });
});

function translateToHindi(name) {
  const translations = {
    'Rahul': 'राहुल',
    'Priya': 'प्रिया',
    'Aman': 'अमन',
    'Simran': 'सिमरन'
  };
  return translations[name] || name;
}

function calculateGrade(marks) {
  const total = marks.reduce((sum, m) => sum + m, 0);
  const average = total / marks.length;
  if (average >= 90) return 'A+';
  if (average >= 75) return 'A';
  if (average >= 60) return 'B';
  return 'C';
}

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));