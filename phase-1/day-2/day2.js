// day2.js
// Task: Find highest marks from an array

const marks = [
  { subject: "Math", score: 78 },
  { subject: "Science", score: 92 },
  { subject: "English", score: 85 },
  { subject: "History", score: 90 }
];

// Using a function to find highest marks
function findHighestMarks(arr) {
  let highest = arr[0];
  arr.forEach((item) => {
    if (item.score > highest.score) {
      highest = item;
    }
  });
  return highest;
}

const top = findHighestMarks(marks);

console.log("Highest Marks:");
console.log(`Subject: ${top.subject}, Score: ${top.score}`);
console.log(`सर्वोच्च अंक: ${top.score} (${top.subject})`); // Hindi output
