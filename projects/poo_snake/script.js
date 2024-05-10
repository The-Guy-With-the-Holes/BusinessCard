// const gameContainer = document.getElementById('game-container');
// const snakeElement = document.getElementById('snake');
// const foodElement = document.getElementById('food');
// const upBtn = document.getElementById('upBtn');
// const downBtn = document.getElementById('downBtn');
// const leftBtn = document.getElementById('leftBtn');
// const rightBtn = document.getElementById('rightBtn');
// const pauseBtn = document.getElementById('pauseBtn');
// const lengthDisplay = document.getElementById('snake-length');


// let snakeX = 10;
// let snakeY = 10;
// let foodX = Math.floor(Math.random() * 20);
// let foodY = Math.floor(Math.random() * 20);
// let score = 0;
// let speed = 100;
// let snakeLength = 1;
// let snake = [{ x: snakeX, y: snakeY }];
// let dx = 0;
// let dy = 0;
// let paused = false;
// let gameLoopTimeout;

// function init() {
//   drawSnake();
//   drawFood();
//   gameLoop();
// }

// function drawSnake() {
//   const snakeElement = document.createElement('div');
//   snakeElement.id = 'snake';
//   snakeElement.style.left = snakeX * 20 + 'px';
//   snakeElement.style.top = snakeY * 20 + 'px';
//   snakeElement.style.width = snakeLength * 20 + 'px'; // Adjust width based on length
//   snakeElement.style.height = '20px';
//   gameContainer.appendChild(snakeElement);

//   // snakeElement.style.left = snakeX * 20 + 'px';
//   // snakeElement.style.top = snakeY * 20 + 'px';
// }

// function drawFood() {
//   const foodElement = document.createElement('div');
//   foodElement.id = 'food';
//   foodElement.style.left = foodX * 20 + 'px';
//   foodElement.style.top = foodY * 20 + 'px';
//   gameContainer.appendChild(foodElement);

//   // foodElement.style.left = foodX * 20 + 'px';
//   // foodElement.style.top = foodY * 20 + 'px';
// }

// upBtn.addEventListener('click', () => {
//   if (!paused && dy !== 1) {
//     dx = 0;
//     dy = -1;
//   }
// });

// downBtn.addEventListener('click', () => {
//   if (!paused && dy !== -1) {
//     dx = 0;
//     dy = 1;
//   }
// });

// leftBtn.addEventListener('click', () => {
//   if (!paused && dx !== 1) {
//     dx = -1;
//     dy = 0;
//   }
// });

// rightBtn.addEventListener('click', () => {
//   if (!paused && dx !== -1) {
//     dx = 1;
//     dy = 0;
//   }
// });

// document.addEventListener('keydown', (event) => {
//   switch (event.key) {
//     case 'ArrowUp':
//       if (!paused && dy !== 1) {
//         dx = 0;
//         dy = -1;
//       }
//       break;
//     case 'ArrowDown':
//       if (!paused && dy !== -1) {
//         dx = 0;
//         dy = 1;
//       }
//       break;
//     case 'ArrowLeft':
//       if (!paused && dx !== 1) {
//         dx = -1;
//         dy = 0;
//       }
//       break;
//     case 'ArrowRight':
//       if (!paused && dx !== -1) {
//         dx = 1;
//         dy = 0;
//       }
//       break;
//     default:
//       break;
//   }
// });

// pauseBtn.addEventListener('click', () => {
//   paused = !paused;
//   if (paused) {
//     clearInterval(gameLoopTimeout);
//   } else {
//     gameLoop();
//   }
// });

// function updateSnake() {
//   snakeX += dx;
//   snakeY += dy;

//   // Add new head segment to the snake
//   snake.unshift({ x: snakeX, y: snakeY });

//   // Check if snake eats the food
//   if (snakeX === foodX && snakeY === foodY) {
//     snakeLength++;
//     foodX = Math.floor(Math.random() * 20);
//     foodY = Math.floor(Math.random() * 20);
//     drawFood(); // Update food's position
//   } else {
//     // If the snake doesn't eat the food, remove the tail segment
//     snake.pop();
//   }
 
//   // snakeX += dx;
//   // snakeY += dy;
//   // if (snakeX < 0) snakeX = 19;
//   // if (snakeX > 19) snakeX = 0;
//   // if (snakeY < 0) snakeY = 19;
//   // if (snakeY > 19) snakeY = 0;

//   // // Add new head segment to the snake
//   // snake.unshift({ x: snakeX, y: snakeY });

//   // // Check if snake eats the food
//   // if (snakeX === foodX && snakeY === foodY) {
//   //   score++;
//   //   snakeLength++;
//   //   foodX = Math.floor(Math.random() * 20);
//   //   foodY = Math.floor(Math.random() * 20);
//   //   drawFood(); // Update food's position
//   // } else {
//   //   // If the snake doesn't eat the food, remove the tail segment
//   //   snake.pop();
//   // }

//   // console.log(`Food position: (${foodX}, ${foodY}), Snake length: ${snake.length}, Snake position: (${snakeX}, ${snakeY})`);
//   // lengthDisplay.textContent = 'Snake Length: ' + snake.length;
// }

// function gameLoop() {
//   gameLoopTimeout = setTimeout(() => {
//     if (!paused) {
//       updateSnake();
//       // drawSnake();
//       gameLoop();
//       requestAnimationFrame(gameLoop)
//     }
//   }, speed);
// }

// // Initialize the game
// init();
const gameContainer = document.getElementById('game-container');
const snakeSegments = [];

let snakeX = 10;
let snakeY = 10;
let foodX = 5;
let foodY = 5;
let snakeLength = 1;
let dx = 0;
let dy = 0;
let gameRunning = false;

function clearGameContainer() {
  while (gameContainer.firstChild) {
    gameContainer.removeChild(gameContainer.firstChild);
  }
}

function drawSnake() {
  clearGameContainer(); // Clear previous snake segments
  for (let i = 0; i < snakeLength; i++) {
    const snakeSegment = document.createElement('div');
    snakeSegment.classList.add('snake-segment');
    snakeSegment.style.left = (snakeX - i) * 20 + 'px';
    snakeSegment.style.top = snakeY * 20 + 'px';
    gameContainer.appendChild(snakeSegment);
    snakeSegments.push(snakeSegment);
  }
}

function drawFood() {
  const foodElement = document.createElement('div');
  foodElement.id = 'food';
  foodElement.style.left = foodX * 20 + 'px';
  foodElement.style.top = foodY * 20 + 'px';
  gameContainer.appendChild(foodElement);
}

function updateSnake() {
  snakeX += dx;
  snakeY += dy;

  // Wrap snake around if it goes out of bounds
  if (snakeX < 0) snakeX = 19;
  if (snakeX >= 20) snakeX = 0;
  if (snakeY < 0) snakeY = 19;
  if (snakeY >= 20) snakeY = 0;

  // Check if snake eats the food
  if (snakeX === foodX && snakeY === foodY) {
    snakeLength++;
    foodX = Math.floor(Math.random() * 20);
    foodY = Math.floor(Math.random() * 20);
    drawFood(); // Update food's position
  }

  drawSnake(); // Redraw the snake

  console.log(`Snake length: ${snakeLength}, Snake position: (${snakeX}, ${snakeY})`);
}

function gameLoop() {
  updateSnake();
  requestAnimationFrame(gameLoop);
}

// Button event listeners
document.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
  if (!gameRunning) {
    gameRunning = true;
    gameLoop();
  }
  switch (event.key) {
    case 'ArrowUp':
      if (dy !== 1) {
        dx = 0;
        dy = -1;
      }
      break;
    case 'ArrowDown':
      if (dy !== -1) {
        dx = 0;
        dy = 1;
      }
      break;
    case 'ArrowLeft':
      if (dx !== 1) {
        dx = -1;
        dy = 0;
      }
      break;
    case 'ArrowRight':
      if (dx !== -1) {
        dx = 1;
        dy = 0;
      }
      break;
    default:
      break;
  }
});

// Initialize the game
drawSnake();
drawFood();
