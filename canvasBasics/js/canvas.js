for (let counter = 1; counter <= 10; counter++) {
    console.log(counter);
}
for (let counter = 10; counter >= 1; counter--) {
    console.log(counter);

}
for (let counter = 1; counter <= 10; counter += 2) {
    console.log(counter);
}

let myCanvas = document.getElementById("canvas1");

let ctx = myCanvas.getContext("2d");
ctx.fillStyle = "Cyan";
ctx.fillRect(0, 0, 200, 100);

ctx.beginPath();
ctx.moveTo(0, 0)
ctx.lineTo(200, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 100)
ctx.lineTo(200, 0);
ctx.stroke();


ctx.beginPath();
ctx.arc(100, 50, 25, 0, 2 * Math.PI);
ctx.strokeStyle = "Red";
ctx.stroke();



for (let counter = 1; counter <= 10; counter++) {
    ctx.beginPath();
    ctx.arc(100, 50, counter * 10, 0, 2 * Math.PI);
    ctx.strokeStyle = "Red";
    ctx.stroke();
}