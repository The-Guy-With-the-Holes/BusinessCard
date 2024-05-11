var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var score_keeper = document.getElementById('score_keeper')
var eat = new Audio("eat.mp3")
   
// the canvas width & height, snake x & y, and the apple x & y, all need to be a multiples of the grid size in order for collision detection to work
// (e.g. 16 * 25 = 400)
var grid = 12;
var count = 0;

var snake = {
  x: 0,
  y: 0,
  dx: grid,
  dy: 0,
  cells: [],
  maxCells: 4,     /* The current length*/
  initial_cells:4, /* Start length ()*/
};

var apple = {
  x: getRandomInt(0, 25) * grid,
  y: getRandomInt(0, 25) * grid
};

function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min)) + min; }

function update_score(new_score){ score_keeper.innerHTML = new_score; }

function new_apple(){({x:apple.x, y:apple.y} = {x:getRandomInt(0, 25) * grid, y:getRandomInt(0, 25) * grid})}

function new_snake(){
  ({ x:snake.x, y:snake.y, z:snake.dx, a:snake.dy} = { x:0, y:0, z:grid, a:0 })
  snake.cells = [];
  snake.maxCells = snake.initial_cells;  
}

function reset_game(){
  new_snake()
  update_score(0)
  new_apple()
}

// Main game loop
function loop() {
  requestAnimationFrame(loop);

  // gameloop = 60 / 8 - snake_len/25 fps 
  if (++count < (8-(snake.maxCells/25))) { return; }

  count = 0;
  context.clearRect(0,0,canvas.width,canvas.height);

  // move snake by it's velocity
  snake.x += snake.dx;
  snake.y += snake.dy;

  // wrap snake position horizontally on edge of screen
  if (snake.x < 0) { snake.x = canvas.width - grid; }
  else if (snake.x >= canvas.width) { snake.x = 0; }

  // wrap snake position vertically on edge of screen
  if (snake.y < 0) { snake.y = canvas.height - grid; }
  else if (snake.y >= canvas.height) { snake.y = 0; }

  // keep track of where snake has been. front of the array is always the head
  snake.cells.unshift({x: snake.x, y: snake.y});

  // remove cells as we move away from them
  if (snake.cells.length > snake.maxCells) { snake.cells.pop(); }

  // draw apple image
  var appleImage = new Image();
  appleImage.src = 'gold-nugget.png';
  context.drawImage(appleImage, apple.x, apple.y, grid-1, grid-1);
  // console.log("Snake:",snake.x,snake.y,' Food drawn at :',apple.x,apple.y,grid)

  // draw snake image one cell at a time
  var snakeImage = new Image();
  snakeImage.src = 'poop-body.jpg';
  snake.cells.forEach(function(cell, index) {
    if (index === 0){ // Draw the head
      let snakeHead = new Image();
      snakeHead.src = 'poop-head.png';
      context.drawImage(snakeHead, cell.x, cell.y, grid-1, grid-1);
    }
    else{
      context.drawImage(snakeImage, cell.x, cell.y, grid-1, grid-1);
    }
    
    // snake ate apple  
    if (cell.x === apple.x && cell.y === apple.y) {
      eat.play()          // Play the audio on eat
      snake.maxCells++;   // Increase snake length
      update_score(snake.maxCells - snake.initial_cells);
      new_apple()
    }

    // check collision with all cells after this one (modified bubble sort)
    for (var i = index + 1; i < snake.cells.length; i++) {
      // if collision > reset game
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y){ reset_game()}
    }
  });
}

//listen to keyboard events to move the snake
  // prevent snake from backtracking on itself by checking that it's
  // not already moving on the same axis (pressing left while moving
  // left won't do anything, and pressing right while moving left
  // shouldn't let you collide with your own body)
document.addEventListener('keydown', function(e) {
  if (e.which == 37){ move_left() }
  if (e.which == 38){ move_top() }
  if (e.which == 39){ move_right() }
  if (e.which == 40){ move_bottom() }
  
});

function move_left(){
  if (snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }
}
function move_top(){
  if (snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
}
function move_right(){
  if (snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
}
function move_bottom(){
  if (snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
}

// start the game
requestAnimationFrame(loop);