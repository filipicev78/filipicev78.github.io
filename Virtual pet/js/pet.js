let happiness = 10;
let belly = 10;
let strength = 10;
let status1 = 10;

/* Adding the if then in each so the value can never go over 10*/
function feedPet() {
    console.log("feeding  da penguin")
    if (belly < 9) {
        belly += 1;
    }
    if (belly > 9) {
        belly = 10;
    }
    if (strength < 9) {
        strength += 1;
    }
    if (strength > 9) {
        strength = 10;
    }

    refreshUI();
}


function bellySled() {
    console.log("belly sledding")
    if (happiness < 8.5) {
        happiness += 1.5;
    }
    if (happiness > 8.5) {
        happiness = 10;
    }
    strength -= 0.25;

}

function fishingTrip() {
    console.log(" fishing trip")
    if (belly < 9) {
        belly += 1;
    }
    if (belly > 9) {
        belly = 10;
    }
    if (happiness < 8.5) {
        happiness += 1.5;
    }
    if (happiness > 8.5) {
        happiness = 10;
    }

}

function huddleForHeat() {
    console.log("huddle for warmth")
    if (status1 < 8) {
        status1 += 2;
    }
    if (status1 > 8) {
        status1 = 10;
    }
    if (strength < 9) {
        strength += 1;
    }
    if (strength > 9) {
        strength = 10;
    }

}

function refreshUI() {
    let bellyMeter = document.getElementById("belly-meter");
    bellyMeter.value = belly;
    let strengthMeter = document.getElementById("strength-meter");
    strengthMeter.value = strength;
    let statusMeter = document.getElementById("status-meter");
    statusMeter.value = status1;
    let happinessMeter = document.getElementById("hapiness-meter");
    happinessMeter.value = happiness;
    /* PhysState is a forumla that calcuates the physical state on a scale of 0-48*/
    let physState = (belly * 0.8) * 3 + (strength * 0.8) * 2 + (happiness * 0.8);
    let mentState = (happiness * 0.8) * 3.5 + (status1 * 0.8) * 2.5
    let statusUpdate1 = document.getElementById("statusUpdate");

    if (physState >= 42 && mentState >= 42) {
        petImg.src = "images/Pen1.PNG";
        statusUpdate1.innerHTML = "Penguin is in perfect mood";
    } else if (physState >= 38 && mentState >= 38) {
        petImg.src = "images/Pen2.PNG";
        statusUpdate1.innerHTML = "Penguin is happy ";

    } else if (physState >= 34 && mentState >= 34) {
        petImg.src = "images/Pen3.PNG";
        statusUpdate1.innerHTML = "Penguin is Content ";
    } else if (physState >= 30 && mentState >= 30) {
        petImg.src = "images/Pen4.PNG";
        statusUpdate1.innerHTML = "Penguin is Fine  ";
    } else if (physState >= 26 && mentState >= 26) {
        petImg.src = "images/Pen5.PNG";
        statusUpdate1.innerHTML = "Penguin is sad ";
    } else if (physState >= 20 && mentState >= 20) {
        petImg.src = "images/Pen6.PNG";
        statusUpdate1.innerHTML = "Penguin is very sad and tired ";
    } else if (physState >= 12 && mentState >= 12) {
        statusUpdate1.innerHTML = "Penguin is dying ";
        petImg.src = "images/Pen7.PNG";
    } else if (physState <= 0 || mentState <= 0) {
        petImg.src = "images/Pen8.PNG";
        statusUpdate1.innerHTML = "Penguin is dead";
        alert("your penguin is dead!! Do better");

    }










}



myInterval = setInterval(function update() {
    if (belly > 0) {
        belly = strength - 0.25;
    }
    if (strength > 0) {
        strength = strength - 0.25;
    }
    if (status1 > 0) {
        status1 = status1 - 0.25;
    }
    if (happiness > 0) {
        happiness = happiness - 0.25;
    }
    refreshUI();
}, 1000);