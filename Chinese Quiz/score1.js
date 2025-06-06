
document.addEventListener("DOMContentLoaded", showResults);

// quiz result is generated by the amount of answer, 8 question in total so its divided among this
  //at least 65% to pass
  function showResults() {
   
    let percentage = localStorage.getItem("percentage");
    const feedbackElement = document.getElementById('feedback');
  
    if (percentage >= 65) {
        feedback.innerHTML = `
          <p style="color: green;">You passed with ${percentage}% correct! 🎉</p>
          <img src="pass.png" alt="You Passed!" style="max-width: 300px; margin-top: 20px; border-radius: 10px;">
        `;
      } else {
        feedback.innerHTML = `
          <p style="color: red;">You did not pass. Restarting the quiz...</p>
          <img src="fail.png" alt="You Failed!" style="max-width: 300px; margin-top: 20px; border-radius: 10px;">
        `;
        
      setTimeout(() => {
        window.location.href = "level1.html";
      }, 2000);
    }
  }