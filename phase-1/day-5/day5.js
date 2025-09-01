require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(express.json());

const students = [
  { id: 1, name: "Rahul", marks: [85, 78, 92] },
  { id: 2, name: "Priya", marks: [70, 65, 80] },
  { id: 3, name: "Aman", marks: [90, 88, 95] },
  { id: 4, name: "Simran", marks: [60, 55, 68] }
];

app.get("/", (req, res) => {
  res.send("Welcome to the Student API! Try /api/students");
});

app.get("/api/students", (req, res) => {
  const translatedStudents = students.map((student) => ({
    ...student,
    grade: calculateGrade(student.marks)
  }));
  res.json(translatedStudents);
});

app.post("/api/students", (req, res) => {
  const { name, marks } = req.body;
  if (!name || !Array.isArray(marks) || marks.length !== 3) {
    return res.status(400).json({ error: "Name and array of 3 marks are required" });
  }
  const newStudent = { id: students.length + 1, name, marks };
  students.push(newStudent);
  res.status(201).json({ ...newStudent, grade: calculateGrade(newStudent.marks) });
});

app.delete("/api/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Student not found" });
  }
  students.splice(index, 1);
  res.json({ message: "Student deleted successfully" });
});

app.get("/study-tips/:grade", async (req, res) => {
  try {
    const response = await fetch('https://api-inference.huggingface.co/models/gpt2', {
      method: 'POST',
      headers: { 
        Authorization: `Bearer ${process.env.HUGGINGFACE_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        inputs: `Study tips for a student with grade ${req.params.grade}`,
        parameters: { max_length: 100, num_return_sequences: 1 }
      })
    });
    if (!response.ok) {
      throw new Error(`Hugging Face API error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    if (!data[0]?.generated_text) {
      throw new Error("No valid response from Hugging Face API");
    }
    res.json({ tip: data[0].generated_text });
  } catch (error) {
    console.error("Hugging Face API error:", error.message);
    res.status(500).json({ error: "Failed to generate study tip" });
  }
});

function calculateGrade(marks) {
  const total = marks.reduce((sum, m) => sum + m, 0);
  const average = total / marks.length;
  if (average >= 90) return "A+";
  if (average >= 75) return "A";
  if (average >= 60) return "B";
  return "C";
}

const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));