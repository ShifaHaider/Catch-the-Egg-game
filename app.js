var basket = document.getElementById('basketImg');
var egg = document.getElementsByClassName('egg');
var scoreDiv = document.getElementById('score');
var score = 0;

document.onkeydown = moveBasket;
var left = 0;
var clientX;

function moveBasket(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        leftMove()
    }
    else if (e.keyCode == '39') {
        rightMove();
    }
}
function leftMove() {
    if (left >= 0) {
        left = left - 10;
        basket.style.left = left + 'px';
    }
}
function rightMove() {
    if (left <= (document.body.clientWidth - 150)) {
        left = left + 10;
    }

    else {
        left = document.body.clientWidth - 150;
    }
    basket.style.left = left + 'px';
}


window.addEventListener('mousemove', function (e) {
    if (e.clientX < clientX) {
        leftMove();
    }
    else {
        rightMove();
    }
    clientX = e.clientX;
});

function simpleEgg() {
    var egg1 = document.getElementById('egg1');
    var eggImg = document.createElement('img');
    var left1 = Math.floor(Math.random() * (window.screen.width - 60));
    eggImg.setAttribute('src', 'egg2.png');
    eggImg.style.height = '43px';
    eggImg.style.width = '32px';
    eggImg.setAttribute('class', 'egg');
    egg1.appendChild(eggImg);
    var top = 0;
    var a = setInterval(function () {
        if (top <= (window.screen.height - 180)) {
            top = top + 2;
            eggImg.style.top = top++ + 'px';
            eggImg.style.left = left1 + 'px';
        }
        else {
            if (eggImg.style.left >= basket.style.left && eggImg.style.left <= (left + 150 + 'px')) {
                scoreUpdate();
                clearInterval(a);
                egg1.removeChild(eggImg);
            }
            top = 0;
        }
    }, 10);
}
simpleEgg();
setInterval(simpleEgg, 3000);


function importedEgg(){
    var impEgg = document.getElementById('impEgg');
    var eggImg = document.createElement('img');
    var left1 = Math.floor(Math.random() * (window.screen.width - 60));
    eggImg.setAttribute('src', 'images%20(1).jpg');
    eggImg.style.height = '50px';
    eggImg.style.width = '39px';
    eggImg.setAttribute('class', 'egg');
    impEgg.appendChild(eggImg);
    var top = 0;
    var i = setInterval(function(){
        if (top <= (window.screen.height - 180)) {
            top = top + 2;
            eggImg.style.top = top++ + 'px';
            eggImg.style.left = left1 + 'px';
        }
        else {
            //if (eggImg.style.left >= basket.style.left && eggImg.style.left <= (left + 150 + 'px')) {
            //    scoreUpdate();
                clearInterval(i);
                impEgg.removeChild(eggImg);
            //}
            top = 0;
        }
    })
}
importedEgg();
setInterval(importedEgg , 3000);
function scoreUpdate() {
    score = score + 10;
    scoreDiv.innerHTML = "Score: " + score;
}