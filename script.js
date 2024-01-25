const flashcards = [];

function addCard() {
  // DOM Selection
  const questionInput = document.getElementById("question");
  const answerInput = document.getElementById("answer");
  const errorContainer = document.querySelector(".error-message");

  // Error Handling
  if (!questionInput.value || !answerInput.value) {
    // Jika salah satu field kosong,  maka error message akan ditampilkan
    errorContainer.classList.remove("hide");
    // Jika kedua field terisi maka error message disembunyikan lalu melakukan push ke element p masing-masing dengan class bernama "question" dan "answer" dengan DOM Manipulation
  } else {
    errorContainer.classList.add("hide");
    flashcards.push({
      question: questionInput.value,
      answer: answerInput.value,
    });

    questionInput.value = "";
    answerInput.value = "";
  }
  displayCards();
}

function displayCards() {
  // DOM selection
  const cardList = document.getElementById("card-list");

  //Reset data
  cardList.innerHTML = "";

  // DOM Manipulation
  for (i = 0; i < flashcards.length; i++) {
    cardList.innerHTML += `<div class="card"> 
    <p class="question">${flashcards[i].question}</p>
    <p class="answer">${flashcards[i].answer}</p>
    <button type ="button" onclick="editCard(${i})">Edit</button>
    <button type ="button" onclick="deleteCard(${i})">Delete</button>
    </div>`;
  }
}
displayCards();

function editCard(index) {
  const newQuestion = prompt("Edit QUESTION", flashcards[index].question);
  const newAnswer = prompt("Edit ANSWER", flashcards[index].answer);

  if (newQuestion === "" || newAnswer === "") {
    alert("Input can't be empty!");
  } else if (newQuestion === null || newAnswer === null) {
    return;
  } else if (newQuestion !== null || newAnswer !== null) {
    flashcards[index].question = newQuestion;
    flashcards[index].answer = newAnswer;
  }
  displayCards();
}

function deleteCard(index) {
  flashcards.splice(index, 1);
  displayCards();
}
