document.addEventListener("DOMContentLoaded", () => {
  const wordBank = [
    "software engineer.",
    "website designer.",
    "game developer.",
  ];

  let current = 0;

  const changingWord = document.getElementById("changing-word");

  if (!changingWord) return;

  function changeWord() {
    changingWord.style.opacity = 0;
    changingWord.style.transform = "translateY(-10px)";

    setTimeout(() => {
      current = (current + 1) % wordBank.length;

      changingWord.textContent = wordBank[current];

      changingWord.style.opacity = 1;
      changingWord.style.transform = "translateY(0)";
    }, 250);
  }

  // Wait 4 seconds before starting the animation
  setTimeout(() => {
    changeWord(); // first change
    setInterval(changeWord, 3000); // continue every 3 seconds
  }, 5000);
});
