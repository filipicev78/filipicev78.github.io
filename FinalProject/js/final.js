let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");

let gameover = false;

let player1X = 400;
let player1Y = 300;
let player1XDir = 0;
let player1Ydir = 0;
let player1Speed = 2;
let player1Height = 40;
let player1Width = 20;
let player1health = 5;

let player2X = 100;
let player2Y = 300;
let player2XDir = 0;
let player2Ydir = 0;
let player2Speed = 2;
let player2Height = 40;
let player2Width = 20;
let player2health = 5;

let p1bullet1xpos = 0;
let p1bullet2xpos = 0;
let p1bullet3xpos = 0;
let p1bullet1ypos = 0;
let p1bullet2ypos = 0;
let p1bullet3ypos = 0;

let p2bullet1xpos = 500;
let p2bullet2xpos = 500;
let p2bullet3xpos = 500;
let p2bullet1ypos = 0;
let p2bullet2ypos = 0;
let p2bullet3ypos = 0;

let p1bulletnum = 1;
let p2bulletnum = 1;
let p1bulletleft = 3;
let p2bulletleft = 3;





function drawPlayer1() {
    ctx.fillStyle = "#000000";
    ctx.fillRect(player1X, player1Y, player1Width, player1Height);
}

function drawPlayer2() {
    ctx.fillStyle = "#000000";
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
    if (key === 88) {
        if (p2bulletleft > 0) {
            if (p2bulletnum == 1) {
                p2bullet1xpos = player2X + player2Width;
                p2bullet1ypos = player2Y;
            } else if (p2bulletnum == 2) {
                p2bullet2xpos = player2X + player2Width;
                p2bullet2ypos = player2Y;

            } else if (p2bulletnum == 3) {
                p2bullet3xpos = player2X + player1Width;
                p2bullet3ypos = player2Y;

            }
            p2bulletnum++;

            if (p2bulletnum == 4) {
                p2bulletnum = 1;
            }
        }
    }

}

function drawbullet() {
    ctx.fillStyle = '#FFA500';
    ctx.beginPath();
    ctx.arc(p1bullet1xpos, p1bullet1ypos, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(p1bullet2xpos, p1bullet2ypos, 5, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(p1bullet3xpos, p1bullet3ypos, 5, 5, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "#3370d4";
    ctx.beginPath();
    ctx.arc(p2bullet1xpos, p2bullet1ypos, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(p2bullet2xpos, p2bullet2ypos, 5, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(p2bullet3xpos, p2bullet3ypos, 5, 5, 0, 2 * Math.PI);
    ctx.fill();
}

function movebullet() {
    p1bullet1xpos = p1bullet1xpos - 5;
    p1bullet2xpos = p1bullet2xpos - 5;
    p1bullet3xpos = p1bullet3xpos - 5;

    p2bullet1xpos = p2bullet1xpos + 5;
    p2bullet2xpos = p2bullet2xpos + 5;
    p2bullet3xpos = p2bullet3xpos + 5;
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

    y = 0;
    if (p2bullet1xpos > 500) {
        y++;
    }
    if (p2bullet2xpos > 500) {
        y++
    }
    if (p2bullet3xpos > 500) {
        y++;
    }
    p2bulletleft = y;
    let ammo2meter = document.getElementById("ammo2-meter");
    ammo2meter.value = p2bulletleft;




}

function collision(playerhit) {

    if (playerhit == 1) {
        player1health--;
    }
    if (playerhit == 2) {
        player2health--;
    }
    p1bullet1xpos = 0;
    p1bullet2xpos = 0;
    p1bullet3xpos = 0;
    p1bullet1ypos = 0;
    p1bullet2ypos = 0;
    p1bullet3ypos = 0;

    p2bullet1xpos = 500;
    p2bullet2xpos = 500;
    p2bullet3xpos = 500;
    p2bullet1ypos = 0;
    p2bullet2ypos = 0;
    p2bullet3ypos = 0;

    p1bulletnum = 1;
    p2bulletnum = 1;
    p1bulletleft = 3;
    p2bulletleft = 3;

    player1X = 400;
    player1Y = 300;
    player2X = 100;
    player2Y = 300;

    player1XDir = 0;
    player1Ydir = 0;
    player2XDir = 0;
    player2Ydir = 0;

    alert("Player " + playerhit + " Just got hit and lost a life. Player 1 has " + player1health + " lives left. Player 2 has " + player2health + " lives left");
    let health1meter = document.getElementById("health1-meter");
    health1meter.value = player1health;
    let health2meter = document.getElementById("health2-meter");
    health2meter.value = player2health;


    if (player1health <= 0) {
        alert("GAME OVER. PLAYER 2 WINS!");
        gameover = true;
    }
    if (player2health <= 0) {
        alert("GAME OVER. PLAYER 1 WINS!");
        gameover = true;
    }
    if (gameover == true) {
        player1health = 5;
        player2health = 5;
        let health2meter = document.getElementById("health2-meter");
        health2meter.value = player2health;
        let health1meter = document.getElementById("health1-meter");
        health1meter.value = player1health;

        alert("NEW GAME STARTING");
        gameover = false;
    }

}

function collidercheck() {

    if (p2bullet1xpos + 2.5 >= player1X &&
        p2bullet1xpos - 2.5 <= player1X + player1Width &&
        p2bullet1ypos + 2.5 >= player1Y &&
        p2bullet1ypos - 2.5 <= player1Y + player1Height) {

        collision(1);

    }
    if (p2bullet2xpos + 2.5 >= player1X &&
        p2bullet2xpos - 2.5 <= player1X + player1Width &&
        p2bullet2ypos + 2.5 >= player1Y &&
        p2bullet2ypos - 2.5 <= player1Y + player1Height) {

        collision(1);

    }
    if (p2bullet3xpos + 2.5 >= player1X &&
        p2bullet3xpos - 2.5 <= player1X + player1Width &&
        p2bullet3ypos + 2.5 >= player1Y &&
        p2bullet3ypos - 2.5 <= player1Y + player1Height) {

        collision(1);

    }
    if (p1bullet1xpos + 2.5 >= player2X &&
        p1bullet1xpos - 2.5 <= player2X + player2Width &&
        p1bullet1ypos + 2.5 >= player2Y &&
        p1bullet1ypos - 2.5 <= player2Y + player2Height) {

        collision(2);

    }
    if (p1bullet2xpos + 2.5 >= player2X &&
        p1bullet2xpos - 2.5 <= player2X + player2Width &&
        p1bullet2ypos + 2.5 >= player2Y &&
        p1bullet2ypos - 2.5 <= player2Y + player2Height) {

        collision(2);

    }
    if (p1bullet3xpos + 2.5 >= player2X &&
        p1bullet3xpos - 2.5 <= player2X + player2Width &&
        p1bullet3ypos + 2.5 >= player2Y &&
        p1bullet3ypos - 2.5 <= player2Y + player2Height) {

        collision(2);

    }



}


function movePlayer1() {
    player1X += (player1Speed * player1XDir);

    player1Y += (player1Speed * player1Ydir);


    if (player1X < 270) {
        player1X = 270;
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
    } else if (player2X > (230 - player2Width)) {
        player2X = (230 - player2Width)
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
    collidercheck();
    bulletboundary();
    drawbullet();
    movebullet();
    movePlayer1();
    movePlayer2();
    drawBorder();






}
setInterval(refreshUI, 30);