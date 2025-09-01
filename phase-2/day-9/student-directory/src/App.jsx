import React, { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [marks, setMarks] = useState(["", "", ""]);
  const [studyTips, setStudyTips] = useState({});

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:3000/api/students");
      if (!response.ok) throw new Error("Failed to fetch students");
      const data = await response.json();
      setStudents(data);
      data.forEach(student => fetchStudyTip(student.grade, student.id));
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch students");
      setLoading(false);
    }
  };

  const fetchStudyTip = async (grade, studentId) => {
    try {
      const response = await fetch(`http://localhost:3000/study-tips/${grade}`);
      if (!response.ok) throw new Error("Failed to fetch study tip");
      const data = await response.json();
      setStudyTips(prev => ({ ...prev, [studentId]: data.tip }));
    } catch (error) {
      console.error("Error fetching study tip:", error);
    }
  };

  const handleAddStudent = async () => {
    if (!name || marks.some(m => !m || isNaN(m))) {
      setError("Please fill all fields with valid numbers");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          marks: marks.map(m => parseInt(m, 10)),
        }),
      });
      if (!response.ok) throw new Error("Failed to add student");
      const newStudent = await response.json();
      setStudents([...students, newStudent]);
      setName("");
      setMarks(["", "", ""]);
      setError(null);
    } catch (err) {
      setError("Error adding student");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/students/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete student");
      setStudents(students.filter(student => student.id !== id));
      setStudyTips(prev => {
        const newTips = { ...prev };
        delete newTips[id];
        return newTips;
      });
    } catch (err) {
      setError("Error deleting student");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">🎓 Student Directory</h1>
        {loading && <p className="text-center text-gray-500">Loading students...</p>}
        {error && <p className="text-center text-red-500 mb-4">{error}</p>}

        <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Student</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {marks.map((m, i) => (
              <input
                key={i}
                type="number"
                placeholder={`Mark ${i + 1}`}
                value={m}
                onChange={(e) => {
                  const newMarks = [...marks];
                  newMarks[i] = e.target.value;
                  setMarks(newMarks);
                }}
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
            <button
              onClick={handleAddStudent}
              className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Add
            </button>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-700 mb-4">Student List</h2>
        {students.length === 0 && !loading && (
          <p className="text-center text-gray-500">No students found.</p>
        )}
        <div className="space-y-4">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-gray-50 p-4 rounded-lg shadow flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-medium text-gray-800">{student.name}</h3>
                <p className="text-gray-600">Grade: {student.grade}</p>
                <p className="text-gray-600">Marks: {student.marks.join(", ")}</p>
                <p className="text-sm text-gray-500">
                  Study Tip: {studyTips[student.id] || "Generating..."}
                </p>
              </div>
              <button
                onClick={() => handleDelete(student.id)}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;