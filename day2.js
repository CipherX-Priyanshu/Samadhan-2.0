// Function to find highest marks
function findHighestMarks(marks) {
  let highest = marks[0]; // assume first element is highest

  // loop through the array
  for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
      highest = marks[i]; // update highest if new high found
    }
  }

  return highest;
}

// Example usage
const studentMarks = [45, 78, 99, 62, 88, 95];
console.log("Highest Marks:", findHighestMarks(studentMarks));
