// Day 1 - JavaScript Basics
// Author: Priyanshu Kushwaha
// Hackathon: Samadhan 2.0

// Creating a student object
const student = {
    name: "Priyanshu Kushwaha",
    grade: 12,
    marks: 92,
    school: "XYZ Public School"
};

// Printing student details
console.log("Student Details:");
console.log(`Name: ${student.name}`);
console.log(`Grade: ${student.grade}`);
console.log(`Marks: ${student.marks}`);
console.log(`School: ${student.school}`);

// Extra (smart touch):
// Showing data types of each property
console.log("\nData Types of Student Properties:");
for (let key in student) {
    console.log(`${key}: ${typeof student[key]}`);
}
