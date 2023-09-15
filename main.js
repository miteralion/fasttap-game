// Get DOM elements
const timerElement = document.querySelector('.timer');
const scoreElement = document.querySelector('.score');
const tapButton = document.querySelector('.tap-tap');
const highScoreElement = document.querySelector('.high-score');

// Game variables
let timeLeft = 10; // Initial time in seconds
let score = 0;
let highScore = 0;
let gameStarted = false; // Flag to track if the game has started

// Update timer display
function updateTimer() {
  timerElement.textContent = timeLeft.toFixed(2);
}

// Update score display
function updateScore() {
  scoreElement.textContent = score;
}

// Update high score display
function updateHighScore() {
  highScoreElement.textContent = highScore;
}

// Game over logic
function gameOver() {
  // Update high score if necessary
  if (score > highScore) {
    highScore = score;
    updateHighScore();
  }

  // Reset score and time
  score = 0;
  timeLeft = 10;

  // Show game over message
  alert('Game over! Your score: ' + score);

  // Reset game started flag
  gameStarted = false;
}

// Event listener for tapping the button
tapButton.addEventListener('click', function () {
  if (!gameStarted) {
    // Start the game if it hasn't started yet
    gameStarted = true;
    gameLoop();
  } else {
    // Increment score only if the game has started and time is remaining
    if (timeLeft > 0) {
      score++;
      updateScore();
    }
  }
});

// Game loop
function gameLoop() {
  if (timeLeft <= 0) {
    gameOver();
    return;
  }

  const elapsedTime = 0.02; // Elapsed time per frame (0.02 seconds, 2x faster)
  timeLeft -= elapsedTime;
  if (timeLeft < 0) {
    timeLeft = 0;
  }

  updateTimer();

  // Call the game loop recursively with requestAnimationFrame
  if (timeLeft > 0) {
    requestAnimationFrame(gameLoop);
  } else {
    gameOver();
  }
}
// Game over logic
function gameOver() {
  // Update high score if necessary
  if (score > highScore) {
    highScore = score;
    updateHighScore();
  }

  // Show game over message with score
  alert('Game over! Your score: ' + score);

  // Reset score and time
  score = 0;
  timeLeft = 10;

  // Reset game started flag
  gameStarted = false;
}