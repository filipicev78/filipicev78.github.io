let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");

let player1X = 100;
let player1Y = 300;
let player1XDir = 1;
let player1Ydir = 1;
let player1XSpeed = 3;
let player1Height = 100;
let player1Width = 20;

let player2X = 400;
let player2Y = 300;
let player2XDir = 1;
let player2Ydir = 1;
let player2XSpeed = 3;
let player2Height = 100;
let player2Width = 20;

function drawPlayer1() {

    ctx.fillRect(player1X, player1Y, player1Width, player1Height);

}

function drawPlayer2() {

    ctx.fillRect(player2X, player2Y, player2Width, player2Height);

}









function refreshUI() {
    ctx.clearRect(0, 0, 500, 500);
    drawPlayer1();
    drawPlayer2();
    movePlayer1();
    movePlayer2();
    drawBorder();



}
setInterval(refreshUI, 30);