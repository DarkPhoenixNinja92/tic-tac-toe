const chooseXBtn = document.querySelector('.btn-choice-x');
const chooseOBtn = document.querySelector('.btn-choice-o');
const outlineX = document.querySelector('.x-outline');
const outlineO = document.querySelector('.o-outline');
const cpuGame = document.getElementById('btn-cpu');
const playerGame = document.getElementById('btn-player');
const gameBoard = document.getElementById('gameBoard');
const activeBtn = document.querySelector('.choice-active');
const inactiveBtn = document.querySelector('.choice-inactive');

let chosenSymbol = 'O';

chooseXBtn.addEventListener('click', () => {
    if(chooseXBtn.classList.contains('unselected-btn')) {
        chooseOBtn.classList.add('unselected-btn');
        chooseOBtn.classList.remove('chosen');
        chooseXBtn.classList.remove('unselected-btn');
        chooseXBtn.classList.add('chosen');
        outlineX.classList.add('choice-active');
        outlineX.classList.remove('choice-inactive');
    }
});

chooseOBtn.addEventListener('click', () => {
    if(chooseOBtn.classList.contains('unselected-btn')) {
        chooseXBtn.classList.add('unselected-btn');
        chooseXBtn.classList.remove('chosen');
        chooseOBtn.classList.remove('unselected-btn');
        chooseOBtn.classList.add('chosen');
        outlineO.classList.add('choice-active');
        outlineO.classList.remove('choice-inactive');
    }
});

cpuGame.addEventListener('click', () => {
    alert("CPU Mode");
})

playerGame.addEventListener('click', () => {
    alert("Player Mode");
})