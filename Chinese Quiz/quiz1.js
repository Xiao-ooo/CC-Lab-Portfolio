// mando vocab + definition
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
  
  let currentIndex = 0;
  let score = 0;
  let tries = 3;
  
  // random question 
  function shuffleVocabulary() {

    vocabulary.sort(() => Math.random() - 0.5);
    
  }
  
  // When my question is shown and all selecction shown , after making choice next question shows
  function showNextQuestion() {

    if (currentIndex >= vocabulary.length) {
      return showResults(); 

    }
  
    const question = vocabulary[currentIndex];

    //sorting them into dictionary - find them by searching 
    const chineseCharacterElement = document.getElementById('chineseCharacter');
    const questionTextElement = document.getElementById('questionText');
    const quizOptionsElement = document.getElementById('quizOptions');
    const feedbackElement = document.getElementById('feedback');
    const pointCountElement = document.getElementById('pointCount');
  
    //center word
    chineseCharacterElement.textContent = question.chinese;
    questionTextElement.textContent = `What is the pronunciation for "${question.meaning}"?`;
  
    // Options, given 4 and choose the correct answer 
    const options = [question.pronunciation];

    while (options.length < 4) {

      const randomOption = vocabulary[Math.floor(Math.random() * vocabulary.length)].pronunciation;
      if (!options.includes(randomOption)) options.push(randomOption);

    }

    //same as top , random answer
    options.sort(() => Math.random() - 0.5);
  
    // restart the result because new question
    quizOptionsElement.innerHTML = '';
    feedbackElement.innerHTML = '';
  
    // slect the correct answer button
    options.forEach(option => {

            const button = document.createElement('button');

            button.textContent = option;
            button.classList.add('quiz-option');
            button.onclick = () => checkAnswer(question.pronunciation, option);
            quizOptionsElement.appendChild(button);

        }
    );
  }
  
  // Check the answer if its correct, adds point if not shows inccorect result and each player gets 3 tries 
  function checkAnswer(correctAnswer, selectedAnswer) {

        const feedbackElement = document.getElementById('feedback');
        const pointCountElement = document.getElementById('pointCount');
  
            if (selectedAnswer === correctAnswer) {

            score++;
            pointCountElement.textContent = `Points: ${score}`;
            feedbackElement.innerHTML = `<p style="color: green;">Correct! 🎉</p>`;
            currentIndex++;
            setTimeout(showNextQuestion, 500); 

            } else { tries--;

            if (tries > 0) {
                //i gave a hint if they got the first try wrong, 1 letter of the pronounciation is given
                const hint = correctAnswer.charAt(0); 
                feedbackElement.innerHTML = `<p style="color: red;">Incorrect! Try again. ${tries} tries left.</p>`;
                feedbackElement.innerHTML += `<p style="color: blue;">Hint: The pronunciation starts with "${hint}".</p>`;

            } else {

                feedbackElement.innerHTML = `<p style="color: red;">Incorrect! The correct answer was: ${correctAnswer}</p>`;
                currentIndex++;
                tries = 3; 
                setTimeout(showNextQuestion, 500); 

            }
        }

       
  }


  function showResults(){
    const percentage = (score / vocabulary.length) * 100;
    localStorage.setItem("percentage", percentage);

    window.location.href = "result1.html";
  }

  // Start quiz
  shuffleVocabulary();
  showNextQuestion();
  