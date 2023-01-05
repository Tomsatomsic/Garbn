

function background1() {
    document.querySelector('body').style.background = "url('./res/img/garden1.jpg') center center / cover";
}
function background2() {
    document.querySelector('body').style.background = "url('./res/img/garden2.jpg') center center / cover";
}
function background3() {

    document.querySelector('body').style.background = "url('./res/img/garden3.jpg') center center / cover";
}

let score = 0;

var block = document.getElementById('block')

var stoner = document.getElementById('stoner')

var wood = document.getElementById('wooden')
        

function addToScore(amount){
    score = score + amount;
    document.getElementById('score').innerHTML = score;
    if (score==200){
        wooden.style.display = "none";
        stoner.style.display = 'flex';
    block.style.display = 'none';}

    else if (score==100){
        wood.style.display = 'flex';
        stoner.style.display = 'none';
    block.style.display = 'none';}

}

