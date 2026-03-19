function saveName() {
  const name = document.getElementById("nameInput").value;
  localStorage.setItem("username", name);
}

function loadName() {
  const name = localStorage.getItem("username");
  document.getElementById("nameResult").textContent =
    name === null ? "არ მოიძებნა" : name;
}

function removeName() {
  localStorage.removeItem("username");
  document.getElementById("nameResult").textContent = "";
  document.getElementById("nameInput").value = "";
}

function checkName() {
  const name = localStorage.getItem("username");

  if (name === null) {
    document.getElementById("nameResult").textContent = "არ არსებობს";
  } else {
    document.getElementById("nameResult").textContent = "არსებობს: " + name;
  }

  document.getElementById("nameInput").value = "";
}


function saveStudent() {
  const name = document.getElementById("studentName").value;
  const age = document.getElementById("age").value;
  const course = document.getElementById("course").value;
  const scoresInput = document.getElementById("scores").value;

  if (!name || !age || !course || !scoresInput) return;

  const scores = scoresInput.split(",").map(Number);

  if (scores.some(isNaN)) return;

  const student = {
    name: name,
    age: Number(age),
    course: course,
    scores: scores
  };

  localStorage.setItem("student", JSON.stringify(student));
}

function loadStudent() {
  const data = localStorage.getItem("student");

  if (!data) {
    document.getElementById("studentResult").textContent = "მონაცემები არ არის";
    return;
  }

  const student = JSON.parse(data);

  document.getElementById("studentResult").textContent =
    "ჩატვირთული სტუდენტი:\n" +
    "სახელი: " + student.name + "\n" +
    "ასაკი: " + student.age + "\n" +
    "კურსი: " + student.course + "\n" +
    "ქულები: " + student.scores.join(", ");
}

function averageScore() {
  const data = localStorage.getItem("student");
  if (!data) return;

  const student = JSON.parse(data);

  const sum = student.scores.reduce((a, b) => a + b, 0);
  const avg = sum / student.scores.length;

  document.getElementById("studentResult").textContent = avg.toFixed(2);
}

function clearStudent() {
  localStorage.removeItem("student");
  document.getElementById("studentResult").textContent = "";

  document.getElementById("studentName").value = "";
  document.getElementById("age").value = "";
  document.getElementById("course").value = "";
  document.getElementById("scores").value = "";
}