// Array to hold students
let students = [];

// Get elements from HTML
const nameInput = document.getElementById("studentName");
const scoreInput = document.getElementById("studentScore");
const addBtn = document.getElementById("addBtn");
const studentList = document.getElementById("studentList");
const averageScore = document.getElementById("averageScore");

// Add student when button is clicked
addBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const score = Number(scoreInput.value);

  if (name === "" || isNaN(score)) {
    alert("Please enter a valid name and score!");
    return;
  }

  // Create student object
  const student = {
    name: name,
    score: score,
  };

  // Add to array
  students.push(student);

  // Clear inputs
  nameInput.value = "";
  scoreInput.value = "";

  // Update display
  displayStudents();
  calculateAverage();
});

// Function to display all students
function displayStudents() {
  studentList.innerHTML = "";

  // Find top score first
  let topScore = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > topScore) {
      topScore = students[i].score;
    }
  }

  // Display each student
  for (let i = 0; i < students.length; i++) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = students[i].name;

    const scoreCell = document.createElement("td");
    scoreCell.textContent = students[i].score;

    // Highlight if top performer
    if (students[i].score === topScore) {
      row.classList.add("top-student");
    }

    row.appendChild(nameCell);
    row.appendChild(scoreCell);
    studentList.appendChild(row);
  }
}

// Function to calculate and show average score
function calculateAverage() {
  let sum = 0;

  for (let i = 0; i < students.length; i++) {
    sum += students[i].score;
  }

  let avg = 0;
  if (students.length > 0) {
    avg = sum / students.length;
  }

  averageScore.textContent = "Average Score: " + avg.toFixed(2);
}
