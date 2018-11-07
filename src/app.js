var basket = document.getElementById('basketImg');
var egg = document.getElementsByClassName('egg');
var scoreDiv = document.getElementById('score');
var wasteEgg = document.getElementById('wasteEggs');
var animateP = document.getElementById('animatePoint');

var score = 0;
var wastEggs = 0;
var left = 0;
var clientX;

document.onkeydown = moveBasket;
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
        left = left - 20;
        basket.style.left = left + 'px';
    }
}
function rightMove() {
    if (left <= (document.body.clientWidth - 150)) {
        left = left + 20;
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
    eggImg.style.height = '45px';
    eggImg.style.width = '35px';
    eggImg.setAttribute('class', 'egg');
    egg1.appendChild(eggImg);
    var top = 0;
    var a = setInterval(function () {
        eggImg.style.top = top++ + 'px';
        eggImg.style.left = left1 + 'px';
        if (top === (document.body.clientHeight - 110)) {
            var eggLeft = Number(eggImg.style.left.replace('px', '')) ;
            console.log(eggLeft , (eggLeft + 16));
            if (eggImg.style.left > basket.style.left && eggLeft < (left + 150 )) {
                score = score + 10;
                scoreDiv.innerHTML = "Score: " + score;
                clearInterval(a);
                egg1.removeChild(eggImg);
            }
        }
        if (top === document.body.clientHeight) {
            clearInterval(a);
            egg1.removeChild(eggImg);
            wastEggs++;
            wasteEgg.innerHTML = 'WasteEggs: ' + wastEggs;
            if (wastEggs === 10) {
                alert('Game over!!');
                window.location.reload();
            }
        }
    }, 10);
}

simpleEgg();
setInterval(simpleEgg, 3000);

function redEgg() {
    var impDiv = document.getElementById('impEgg');
    var redEgg = document.createElement('img');
    var left1 = Math.floor(Math.random() * (window.screen.width - 60));
    redEgg.setAttribute('src', 'impEgg.png');
    redEgg.style.height = '50px';
    redEgg.style.width = '40px';
    redEgg.setAttribute('class', 'egg');
    impDiv.appendChild(redEgg);
    var top = 0;
    var i = setInterval(function () {
        redEgg.style.top = top++ + 'px';
        redEgg.style.left = left1 + 'px';
        if (top === (document.body.clientHeight - 110)) {
            var eggLeft = Number(redEgg.style.left.replace('px', '')) + 20;
            if (redEgg.style.left > basket.style.left && eggLeft < (left + 150)) {
                //animateP.innerHTML = '50';
                //animateP.style.bottom = basket.style.bottom;
                //animateP.style.left = basket.style.left;
                score = score + 50;
                scoreDiv.innerHTML = "Score: " + score;
                clearInterval(i);
                impDiv.removeChild(redEgg);
                //document.body.removeChild(animateP);
            }
        }
        if (top === document.body.clientHeight) {
            clearInterval(i);
            impDiv.removeChild(redEgg);
        }
    })
}

setInterval(redEgg, 12000);

function goldenEgg() {
    var impEgg2 = document.getElementById('impEgg2');
    var goldenEgg = document.createElement('img');
    var left1 = Math.floor(Math.random() * (window.screen.width - 60));
    goldenEgg.setAttribute('src', 'gold_egg_medium.png');
    goldenEgg.style.height = '50px';
    goldenEgg.style.width = '45px';
    goldenEgg.setAttribute('class', 'egg');
    impEgg2.appendChild(goldenEgg);
    var top = 0;
    var i = setInterval(function () {
        goldenEgg.style.top = top++ + 'px';
        goldenEgg.style.left = left1 + 'px';
        if (top === (document.body.clientHeight - 110)) {
            var eggLeft = Number(goldenEgg.style.left.replace('px', '')) + 20;
            if (goldenEgg.style.left > basket.style.left && eggLeft < (left + 150 )) {
                score = score + 20;
                scoreDiv.innerHTML = "Score: " + score;
                clearInterval(i);
                impEgg2.removeChild(goldenEgg);
            }
        }
        else {
            if (top === document.body.clientHeight) {
                clearInterval(i);
                impEgg2.removeChild(goldenEgg);
            }
        }
    })
}

setInterval(goldenEgg , 9000);
Helloo