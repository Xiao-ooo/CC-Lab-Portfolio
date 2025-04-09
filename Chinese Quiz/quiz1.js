// Vocabulary Data (characters and their English meanings)
const vocabulary = [
    { chinese: '你好', pronunciation: 'Nǐ hǎo', meaning: 'Hello' },
    { chinese: '谢谢', pronunciation: 'Xiè Xiè', meaning: 'Thank You' },
    { chinese: '我们', pronunciation: 'Wǒ Men', meaning: 'We' },
    { chinese: '再见', pronunciation: 'Zài Jiàn', meaning: 'Goodbye' },
    { chinese: '不', pronunciation: 'Bù', meaning: 'No' },
    { chinese: '很好', pronunciation: 'Hěn Hǎo', meaning: 'Very Good' },
    { chinese: '你', pronunciation: 'Nǐ', meaning: 'You' },
    { chinese: '我', pronunciation: 'Wǒ', meaning: 'Me' }
  ];
  
  // Variables for quiz state
  let currentQuestionIndex = 0;
  let correctAnswers = 0;
  let totalQuestions = vocabulary.length;
  let triesLeft = 2;
  
  // Shuffle the vocabulary list
  function shuffleVocab() {
    vocabulary.sort(() => Math.random() - 0.5);
  }
  
  // Function to show next question
  function showNextQuestion() {
    if (currentQuestionIndex >= totalQuestions) {
      // If all questions are completed, show results
      showResults();
      return;
    }
  
    const question = vocabulary[currentQuestionIndex];
    const questionText = document.getElementById('questionText');
    const quizOptions = document.getElementById('quizOptions');
    const feedback = document.getElementById('feedback');
    const chineseCharacter = document.getElementById('chineseCharacter');
    const pointCount = document.getElementById('pointCount');
  
    // Display the Chinese character prominently in the center
    chineseCharacter.textContent = question.chinese;
  
    // Display the question
    questionText.textContent = `What is the correct pronunciation for "${question.meaning}"?`;
  
    // Create 4 options, with 1 correct and 3 incorrect
    let options = [question.pronunciation];
  
    // Add random incorrect answers
    while (options.length < 4) {
      const randomOption = vocabulary[Math.floor(Math.random() * vocabulary.length)].pronunciation;
      if (!options.includes(randomOption)) {
        options.push(randomOption);
      }
    }
  
    // Shuffle the options
    options.sort(() => Math.random() - 0.5);
  
    // Clear previous options and feedback
    quizOptions.innerHTML = '';
    feedback.innerHTML = '';
  
    // Create buttons for each option
    options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.classList.add('quiz-option');
      button.onclick = function () {
        checkAnswer(question.pronunciation, option);
      };
      quizOptions.appendChild(button);
    });
  }
  
  // Check the user's answer
  function checkAnswer(correctAnswer, selectedAnswer) {
    const feedback = document.getElementById('feedback');
    const pointCount = document.getElementById('pointCount');
  
    if (selectedAnswer === correctAnswer) {
      correctAnswers++;
      pointCount.textContent = `Points: ${correctAnswers}`;
      feedback.innerHTML = `<p style="color: green;">Correct! 🎉</p>`;
      currentQuestionIndex++;  // Move to next question
      setTimeout(() => {
        showNextQuestion();  // Automatically go to the next question
      }, 1500);  // Wait 1.5 seconds before showing next question
    } else {
      triesLeft--;
  
      if (triesLeft > 0) {
        // Show hint after the first incorrect attempt before allowing the second try
        const hint = correctAnswer.charAt(0);  // First letter hint
        feedback.innerHTML = `<p style="color: red;">Incorrect! Try again. ${triesLeft} tries left.</p>`;
        feedback.innerHTML += `<p style="color: blue;">Hint: The pronunciation starts with "${hint}".</p>`;
      } else {
        feedback.innerHTML = `<p style="color: red;">Incorrect! The correct answer was: ${correctAnswer}</p>`;
        currentQuestionIndex++;  // Move to next question
        triesLeft = 2;  // Reset tries
        setTimeout(() => {
          showNextQuestion();  // Automatically go to the next question
        }, 2000);  // Wait 2 seconds before showing next question
      }
    }
  }
  
  // Show quiz results
  function showResults() {
    const percentage = (correctAnswers / totalQuestions) * 100;
    const feedback = document.getElementById('feedback');
    if (percentage >= 65) {
      feedback.innerHTML = `<p style="color: green;">You passed with ${percentage}% correct! 🎉</p>`;
    } else {
      feedback.innerHTML = `<p style="color: red;">You did not pass. Restarting the quiz...</p>`;
      setTimeout(() => {
        correctAnswers = 0;
        currentQuestionIndex = 0;
        shuffleVocab(); // Shuffle the vocabulary
        showNextQuestion();
      }, 2000);
    }
  }
  
  // Initialize the quiz
  shuffleVocab();
  showNextQuestion();
  