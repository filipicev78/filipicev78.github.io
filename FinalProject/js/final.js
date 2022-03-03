let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");

let player1X = 400;
let player1Y = 300;
let player1XDir = 0;
let player1Ydir = 0;
let player1Speed = 3;
let player1Height = 100;
let player1Width = 20;

let player2X = 100;
let player2Y = 300;
let player2XDir = 0;
let player2Ydir = 0;
let player2Speed = 3;
let player2Height = 100;
let player2Width = 20;

let p1bullet1xpos = 0;
let p1bullet2xpos = 0;
let p1bullet3xpos = 0;
let p1bullet1ypos = 0;
let p1bullet2ypos = 0;
let p1bullet3ypos = 0;

let p2bullet1xpos = 0;
let p2bullet2xpos = 0;
let p2bullet3xpos = 0;
let p2bullet1ypos = 0;
let p2bullet2ypos = 0;
let p2bullet3ypos = 0;

let p1bulletnum = 1;
let p2bulletnum = 1;
let p1bulletleft = 3;
let p2bulletleft = 3;





function drawPlayer1() {
    ctx.fillRect(player1X, player1Y, player1Width, player1Height);
}

function drawPlayer2() {

    ctx.fillRect(player2X, player2Y, player2Width, player2Height);

}

function keyPressed(event) {
    let key = event.keyCode;
    if (key === 74) {
        player1XDir = -1;
    }
    if (key === 76) {
        player1XDir = 1;
    }
    if (key === 73) {
        player1Ydir = -1;
    }
    if (key === 75) {
        player1Ydir = 1;
    }

    if (key === 65) {
        player2XDir = -1;
    }
    if (key === 68) {
        player2XDir = 1;
    }
    if (key === 87) {
        player2Ydir = -1;
    }
    if (key === 83) {
        player2Ydir = 1;
    }



}

function keyReleased(event) {
    let key = event.keyCode;
    if (key === 74) {
        player1XDir = 0;
    }
    if (key === 76) {
        player1XDir = 0;
    }
    if (key === 73) {
        player1Ydir = 0;
    }
    if (key === 75) {
        player1Ydir = 0;
    }

    if (key === 65) {
        player2XDir = 0;
    }
    if (key === 68) {
        player2XDir = 0;
    }
    if (key === 87) {
        player2Ydir = 0;
    }
    if (key === 83) {
        player2Ydir = 0;
    }
    if (key === 77) {
        if (p1bulletleft > 0) {
            if (p1bulletnum == 1) {
                p1bullet1xpos = player1X;
                p1bullet1ypos = player1Y;
            } else if (p1bulletnum == 2) {
                p1bullet2xpos = player1X;
                p1bullet2ypos = player1Y;

            } else if (p1bulletnum == 3) {
                p1bullet3xpos = player1X;
                p1bullet3ypos = player1Y;

            }
            p1bulletnum++;

            if (p1bulletnum == 4) {
                p1bulletnum = 1;
            }
        }
    }
}

function drawbullet() {
    ctx.beginPath();
    ctx.arc(p1bullet1xpos, p1bullet1ypos, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(p1bullet2xpos, p1bullet2ypos, 5, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(p1bullet3xpos, p1bullet3ypos, 5, 5, 0, 2 * Math.PI);
    ctx.fill();
}

function movebullet() {
    p1bullet1xpos = p1bullet1xpos - 5;
    p1bullet2xpos = p1bullet2xpos - 5;
    p1bullet3xpos = p1bullet3xpos - 5;
}

function bulletboundary() {
    x = 0;
    if (p1bullet1xpos < 0) {
        x++;
    }
    if (p1bullet2xpos < 0) {
        x++
    }
    if (p1bullet3xpos < 0) {
        x++;
    }
    p1bulletleft = x;
    let ammo1meter = document.getElementById("ammo1-meter");
    ammo1meter.value = p1bulletleft;

}


function movePlayer1() {
    player1X += (player1Speed * player1XDir);

    player1Y += (player1Speed * player1Ydir);


    if (player1X < 0) {
        player1X = 0;
    } else if (player1X > (500 - player1Width)) {
        player1X = (500 - player1Width)
    }
    if (player1Y < 0) {
        player1Y = 0;
    } else if (player1Y > (500 - player1Height)) {
        player1Y = (500 - player1Height)
    }
}

function movePlayer2() {
    player2X += (player2Speed * player2XDir);

    player2Y += (player2Speed * player2Ydir);


    if (player2X < 0) {
        player2X = 0;
    } else if (player2X > (500 - player2Width)) {
        player2X = (500 - player2Width)
    }
    if (player2Y < 0) {
        player2Y = 0;
    } else if (player2Y > (500 - player2Height)) {
        player2Y = (500 - player2Height)
    }
}










function refreshUI() {
    ctx.clearRect(0, 0, 500, 500);
    drawPlayer1();
    drawPlayer2();
    bulletboundary();
    drawbullet();
    movebullet();
    movePlayer1();
    movePlayer2();
    drawBorder();






}
setInterval(refreshUI, 30);