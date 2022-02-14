let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");

// postion 
let xPos = 0;

/*function moveHorizontal() {
    ctx.clearRect(0, 0, 500, 500);

    ctx.fillRect(xPos, 0, 20, 20);

    xPos += 1;

    if (xPos >= 500) {
        xPos = 0;
    }

}

setInterval(moveHorizontal, 1);
*/

let yPos = 0;

/*function moveVertical() {
    ctx.clearRect(0, 0, 500, 500);

    ctx.fillRect(0, yPos, 20, 20);

    yPos += 1;

    if (yPos >= 500) {
        yPos = 0;
    }

}

setInterval(moveVertical, 1);
*/

let xDir = 1

function bounceH() {
    ctx.clearRect(0, 0, 500, 500);

    ctx.fillRect(xPos, 0, 20, 20);

    xPos = xPos + xDir;

    if (xPos >= 490) {
        xDir = -1;
    }
    if (xPos <= 10) {
        xDir = 1;
    }

}

setInterval(bounceH, 5);