
function randomDirection() {
    'use strict';
    // create a random number no higher than 4
    var x = (Math.random() * 4);
    // return value to randomdirection
    //modulo should return the exact same value
    return x - x % 1;
}

function gnr() {
    'use strict';
    var x = (Math.random() * 40);
    return x - x % 1;
}

function drawSquare(ctx, x, y, color) {
    'use strict';
    //set canvas fillStyle to color
    ctx.fillStyle = color;
    ctx.fillRect(x * 11 + 1, y * 11 + 1, 10, 10);
}

function drawSnake(ctx, snake, color) {
    'use strict';
    var i;
    for (i = 0; i < snake.length; i = i + 1) {
        drawSquare(ctx, snake[i].x, snake[i].y, color);
    }
}

function pause(ctx) {
    'use strict';
    ctx.fillStyle = "#A1A2A5"; //colors the board
    ctx.fillRect(0, 0, 441, 441); // fills the width of the canvas
    
    //Pause Font
    ctx.fillStyle = "#D3E5EF"; //colors the board
    ctx.font = "30px sans-serif";
    ctx.fillText("Press SpaceBar to Play", 70, 240);
}

function launch() {
    'use strict';
    var canvas = document.getElementById('game'),
        // set variables within the scope of launch
        ctx = canvas.getContext('2d'),
        bgSize = 441,
        bgColor = "#A1A2A5",
        snakeColor = "#5E6365",
        foodColor = "#FF5E00",
        // set food & snake to empty array
        food,
        snake = [],
        direction = randomDirection(),
        // set game to an empty name:value pair
        game = { };
    
    //starts the drawing
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, bgSize, bgSize);
    //spawns food
    food = {
        // x & y = Property(key) | gnr = Value (value)
        x: gnr(),
        y: gnr()
    };
    // spawns snake
    do {
        // add new item to the end of snake array
        snake.pop();
        snake.unshift({
            x: gnr(),
            y: gnr()
        });
    } 
        // grow snake while the the the statement below is true
        while (snake[0].x === food.x && snake[0].y === food.y);
    
    drawSnake(ctx, snake, snakeColor);
    drawSquare(ctx, food.x, food.y, foodColor);
    game.score = 0;
    
    game.isRunning = false;
    
    game.draw = function () {
        ctx.fillStyle = bgColor; //colors the board
        //remember bgSize = 441 
        ctx.fillRect(0, 0, bgSize, bgSize);
        drawSquare(ctx, food.x, food.y, foodColor);
        drawSnake(ctx, snake, snakeColor);
    };
    game.update = function () {
        var i;
        if (direction === 0) {
            snake.unshift({x: snake[0].x - 1, y: snake[0].y});
        } else if (direction === 1) {
            snake.unshift({x: snake[0].x, y: snake[0].y - 1});
        } else if (direction === 2) {
            snake.unshift({x: snake[0].x + 1, y: snake[0].y});
        } else if (direction === 3) {
            snake.unshift({x: snake[0].x, y: snake[0].y + 1});
        }
        if ((snake[0].x !== food.x) || snake[0].y !== food.y) {
            snake.pop();
        } else {
            game.score = game.score + 100;
            food = {
                x: gnr(),
                y: gnr()
            };
        }
        for (i = 1; i < snake.length; i = i + 1) {
            if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
                clearInterval(game.intervalId);
            }
        }
        // clear game
        if (snake[0].x === 40 || snake[0].x === -1 || snake[0].y === 40 || snake[0].y === -1) {
            clearInterval(game.intervalId);
        }
    };
    game.run = function () {
        if (game.isRunning) {
            game.update();
            game.draw();
        } else { pause(ctx); }
        document.getElementById('score').innerHTML = "Score: " + game.score;
    };
    //starts game
    game.intervalId = setInterval(game.run, 1000 / 9);
    //key listener
    document.onkeydown = function (e) {
        var code = e.keyCode - 37;
        if (code === -5) { game.isRunning = !game.isRunning; }
        if (0 <= code && code <= 3) {
          //if the snake has more than 1 node, it can`t override it (ie: can`t go back the way it came from). That`s why this Math.abs func is used
            if (Math.abs(code - direction) !== 2 && snake.length !== 1) {
                direction = code;
            } else if (snake.length === 1) {
                direction = code;
            }
        }
    };
}
window.onload = launch;