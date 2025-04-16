// mando vocab + definition
const vocabulary = [
    { chinese: '你好', pronunciation: 'Ni hao', meaning: 'Hello' },
    { chinese: '谢谢', pronunciation: 'Xie Xie', meaning: 'Thank You' },
    { chinese: '我们', pronunciation: 'Wo Men', meaning: 'We' },
    { chinese: '再见', pronunciation: 'Zai Jian', meaning: 'Goodbye' },
    { chinese: '不', pronunciation: 'Bu', meaning: 'No' },
    { chinese: '很好', pronunciation: 'Hen Hao', meaning: 'Very Good' },
    { chinese: '你', pronunciation: 'Ni', meaning: 'You' },
    { chinese: '我', pronunciation: 'Wo', meaning: 'Me' }
  ];
  
  //change the variable name a little but basicaly everything works the same as the level 1
  //this is a update quiz, only the spelling text box is different 
  let currentQuestionIndex = 0;
  let correctAnswers = 0;
  let triesLeft = 3;
  
  // random question
  function shuffleVocab() {

    vocabulary.sort(() => Math.random() - 0.5);

  }
  
  // Show character first 
  function showNextQuestion() {
    if (currentQuestionIndex >= vocabulary.length) {
      showResults();
      return;
    }
  
    const question = vocabulary[currentQuestionIndex];
    const questionText = document.getElementById('questionText');
    const feedback = document.getElementById('feedback');
    const chineseCharacter = document.getElementById('chineseCharacter');
    const userAnswer = document.getElementById('userAnswer');
    const pointCount = document.getElementById('pointCount');
    const submitBtn = document.getElementById('submitBtn');
  
    chineseCharacter.textContent = question.chinese;
    questionText.textContent = `How do you spell the pronunciation for "${question.meaning}"?`;
  
    feedback.innerHTML = '';
    userAnswer.value = '';
    userAnswer.focus();
  
    // next question will clear previous 
    triesLeft = 3;
    submitBtn.disabled = false;
  
    // submit buttom, check the answer if its correct
    submitBtn.onclick = function () {

      checkAnswer(question.pronunciation, userAnswer.value);

    };
  }
  
  // if answer correct shows the result if not shows hint, after 3 tries next question
  function checkAnswer(correctAnswer, userInput) {

    const feedback = document.getElementById('feedback');
    const pointCount = document.getElementById('pointCount');
    const submitBtn = document.getElementById('submitBtn');
  
    if (userInput.trim().toLowerCase() === correctAnswer.toLowerCase()) {

      correctAnswers++;
      pointCount.textContent = `Points: ${correctAnswers}`;
      feedback.innerHTML = `<p style="color: green;">Correct! 🎉</p>`;
      currentQuestionIndex++; 
      submitBtn.disabled = true; 
      setTimeout(showNextQuestion, 500); 
      
    } else { triesLeft--;

      if (triesLeft > 0) {
        // Show hint og first letter in pronouniciation 
        const hint = correctAnswer.charAt(0); 
        feedback.innerHTML = `<p style="color: red;">Incorrect! Try again. ${triesLeft} tries left.</p>`;
        feedback.innerHTML += `<p style="color: blue;">Hint: The pronunciation starts with "${hint}".</p>`;

      } else {

        feedback.innerHTML = `<p style="color: red;">Incorrect! The correct answer was: ${correctAnswer}</p>`;
        currentQuestionIndex++;
        triesLeft = 3; 
        submitBtn.disabled = true;
        setTimeout(showNextQuestion, 500); 

      }
    }
  }
  

  function showResults(){
    const percentage = (correctAnswers / vocabulary.length) * 100;
    localStorage.setItem("percentage", percentage);

    window.location.href = "result2.html";
  }

  // Start quiz
  shuffleVocab();
  showNextQuestion();
