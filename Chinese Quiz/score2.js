document.addEventListener("DOMContentLoaded", showResults);

function showResults() {
  let percentage = localStorage.getItem("percentage");
  const feedback = document.getElementById('feedback');

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
      window.location.href = "level2.html";
    }, 2000);
  }
}
