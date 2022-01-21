function magicAlgorithm(numLikes, numComments, numShares, numSaveToFav, specificComments) {
    let rank = 0;
    rank = rank + (numLikes / 1000);
    rank = rank + (numComments / 100);
    rank = rank + (numShares / 80);
    rank = rank + (numSaveToFav / 20);
    if (specificComments === "love this" || specificComments === "awesome" || specificComments === "this is great") {
        rank = rank + 100;
    }

    return rank;
}

function popup() {
    alert("welcome to Tiktok! Imagine i'm showing you a tiktok video right now");
    let numLikes = prompt("how many likes did this tik tok video get?");
    let specificComments = prompt("what is the most recent comment?")
    let numComments = prompt("how many comments did this tik tok video get?");
    let numShares = prompt("how many shares did does this tiktok have?");
    let numSaveToFav = prompt("how many saves does this video have");
    let resultRank = magicAlgorithm(numLikes, numComments, numShares, numSaveToFav, specificComments);
    alert(" your rank is " + resultRank);
}


function showUI() {

    let numLike = document.getElementById("like-textbox").value;
    let numComment = document.getElementById("numComment-textbox").value;
    let numShares = document.getElementById("share-textbox").value;
    let numSaves = document.getElementById("save-textbox").value;
    let comments = document.getElementById("comment-textbox").value;
    let rankResult = magicAlgorithm(numLike, numComment, numShares, numSaves, comments);
    let placeHolder = document.getElementById("result");
    placeHolder.innerHTML = "Tiktok rank:" + rankResult;

}

/*console.log("whzzzup");

function hello() {
    console.log("Hi rami boy")
}

hello();


function hello2(name) {
    console.log("whats up " + name)
}

hello2("me");

function annoyingGreet(name, x) {
    for (let i = 0; i < x; i++) {
        console.log("Whats up " + name + x)

    }
}

annoyingGreet("filip", 100);


function mathSum(x, y) {
    let p = x + y;
    return p;
}

console.log(mathSum(4, 2));

function sqaure(x) {
    let p = x * x;
    return p;
}

console.log(sqaure(4));

function sumOfSqaure(x, y) {
    a = sqaure(x);
    b = sqaure(y);
    p = mathSum(a, b);
    return p;
}
console.log(sumOfSqaure(4, 2));

function hypo(x, y){
   c = sumOfSqaure(x , y);
   p = math.sqrt(c);
   return p; 

}
*/