let = keydownOutput = document.getElementById("keydown-output");
let = keyupOutput = document.getElementById("keyup-output");
let playerX = 250;
let playerY = 250;
let playerSpeed = 4;
let playerXDir = 0;
let playerYDir = 0;
let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");

let playerWidth = 100;
let playerHeight = 20;

let ballX = 100;
let ballY = 300;
let ballXDir = 1;
let ballYdir = 1;
let ballXSpeed = 3;
let ballYSpeed = 3;
let ballRadius = 20;

let ImgWidth = 40;
let ImgHeight = 40;

function keyPressed(event) {
    let key = event.keyCode;
    keydownOutput.innerHTML = "key dpwn code: " + key;
    if (key === 37) {
        playerXDir = -1;
    }
    if (key === 39) {
        playerXDir = 1;
    }
    if (key === 38) {
        playerYDir = -1;
    }
    if (key === 40) {
        playerYDir = 1;
    }
}

function keyReleased(event) {
    let key = event.keyCode;
    keyupOutput.innerHTML = "key released " + key;
    if (key === 37) {
        playerXDir = 0;
    }
    if (key === 39) {
        playerXDir = 0;
    }
    if (key === 38) {
        playerYDir = 0;
    }
    if (key === 40) {
        playerYDir = 0;
    }
}

function drawPlayer() {
    ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
}

function drawImage() {
    ctx.drawImage(emoji, ballX, ballY, ImgWidth, ImgHeight);
}

function paddleBallCollision() {

    if (ballX + ballRadius >= playerX &&
        ballX - ballRadius <= playerX + playerWidth &&
        ballY + ballRadius >= playerY &&
        ballY - ballRadius <= playerY + playerHeight) {

        ballYdir = ballYdir * -1;

    }
}

function movePlayer() {

    playerX += (playerSpeed * playerXDir);

    playerY += (playerSpeed * playerYDir);

    if (playerX < 0) {
        playerX = 0;
    } else if (playerX > (500 - playerWidth)) {
        playerX = (500 - playerWidth)
    }
    if (playerY < 0) {
        playerY = 0;
    } else if (playerY > (500 - playerHeight)) {
        playerY = (500 - playerHeight)
    }




}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI)
    ctx.fill();
}

function moveBall() {
    ballX += (ballXSpeed * ballXDir);
    ballY += (ballYSpeed * ballYdir);
    if (ballX < ballRadius) {
        ballXDir = 1;
        // ballXSpeed += 0.25;
        //ballRadius += 1.5;

    }
    if (ballX > 500 - ballRadius) {
        ballXDir = -1;
        //ballXSpeed += 0.25;
        //ballRadius += 1.5;

    }
    if (ballY < ballRadius) {
        ballYdir = 1;
        //ballYSpeed += 0.2;
        //ballRadius += 1.5;

    }
    if (ballY > 500 - ballRadius) {
        ballYdir = -1;
        //ballYSpeed += 0.2;
        //ballRadius += 1.5;
    }
}


function refreshUI() {
    ctx.clearRect(0, 0, 500, 500);
    movePlayer();
    drawPlayer();

    moveBall();
    paddleBallCollision();
    drawImage();

}

setInterval(refreshUI, 30);