

function background1() {
    document.querySelector('body').style.background = "url('./res/img/garden1.jpg') center center / cover";
}
function background2() {
    document.querySelector('body').style.background = "url('./res/img/garden2.jpg') center center / cover";
}
function background3() {

    document.querySelector('body').style.background = "url('./res/img/garden3.jpg') center center / cover";
}

var score = 0;

var block = getElementById('block')

        var stoner = getElementById('stoner')
        

function addToScore(amount){
    score = score + amount;
    document.getElementById('score').innerHTML = score;
}

function nextBlock(){
    if (score==50)
    stoner.style.display = 'flex';
block.style.display = 'none';
}
