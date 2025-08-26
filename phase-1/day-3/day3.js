// Day 3: Arrays & Objects - Simple Student Marks Calculator

const students = [
  { name: "Rahul", marks: [85, 78, 92] },
  { name: "Priya", marks: [70, 65, 80] },
  { name: "Aman", marks: [90, 88, 95] },
  { name: "Simran", marks: [60, 55, 68] },
];

// Mock translation for bilingual support
const translateToHindi = (grade) => {
  const translations = { "A+": "ए+", "A": "ए", "B": "बी", "C": "सी" };
  return translations[grade] || grade;
};

// Calculate student results
function calculateStudentResults(students) {
  if (!students.length) return [{ error: "No students found" }];
  return students.map(student => {
    if (!student.marks || !student.marks.length) {
      return { name: student.name, error: "No marks found" };
    }
    const total = student.marks.reduce((sum, m) => sum + m, 0);
    const average = total / student.marks.length;
    let grade;
    if (average >= 90) grade = "A+";
    else if (average >= 75) grade = "A";
    else if (average >= 60) grade = "B";
    else grade = "C";
    return { name: student.name, marks: student.marks, total, average: average.toFixed(2), grade };
  });
}

// Process and display results
const results = calculateStudentResults(students);
results.forEach(result => {
  if (result.error) {
    console.log(result.error);
    return;
  }
  console.log(`Student: ${result.name}`);
  console.log(`  Marks: ${result.marks.join(", ")}`);
  console.log(`  Total: ${result.total}`);
  console.log(`  Average: ${result.average}`);
  console.log(`  Grade: ${result.grade} (${translateToHindi(result.grade)})`);
  console.log("-------------------------");
});

// Find top scorer
const topScorer = results.reduce((top, student) => 
  !student.error && (!top || student.total > top.total) ? student : top, results[0]);
if (!topScorer.error) {
  console.log("\nTop Scorer:", topScorer.name, "with", topScorer.total, "marks");
}