let students = [];

let nameInput = document.getElementById("studentName");
let scoreInput = document.getElementById("studentScore");
let addBtn = document.getElementById("addBtn");
let studentList = document.getElementById("studentList");
let averageScore = document.getElementById("averageScore");

addBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const score = Number(scoreInput.value);

  if (name === "" || isNaN(score)) {
    alert("Please enter a valid name and score!");
    return;
  }

  let student = {
    name: name,
    score: score,
  };

  students.push(student);

  nameInput.value = "";
  scoreInput.value = "";

  displayStudents();
  calculateAverage();
});

function displayStudents() {
  studentList.innerHTML = "";

  let topScore = 0;
  students.forEach((student) => {
    if (student.score > topScore) {
      topScore = student.score;
    }
  });

  students.forEach((student) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = student.name;

    const scoreCell = document.createElement("td");
    scoreCell.textContent = student.score;

    if (student.score === topScore) {
      row.classList.add("top-student");
    }

    row.appendChild(nameCell);
    row.appendChild(scoreCell);
    studentList.appendChild(row);
  });
}
function calculateAverage() {
  let sum = 0;

  students.forEach((student) => {
    sum += student.score;
  });

  let avg = 0;
  if (students.length > 0) {
    avg = sum / students.length;
  }

  averageScore.textContent = "Average Score: " + avg.toFixed(2);
}
