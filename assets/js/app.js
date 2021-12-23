let start = document.getElementById('start');
let cards = document.getElementsByClassName('card');
let pScore = document.getElementById('pScore');
let score = document.getElementById('score');


start.addEventListener("click", function () {
    gameStart();
});


function gameStart() {
    pScore.style.visibility = "visible";
}


