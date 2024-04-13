//Variables
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

//Event lister for X button choice. Clicking when choice is set to O will swap the css from x to o.
chooseXBtn.addEventListener('click', () => {
    if(chooseXBtn.classList.contains('unselected-btn')) {
        chooseOBtn.classList.add('unselected-btn');
        chooseOBtn.classList.remove('chosen');
        outlineO.classList.add('choice-inactive');
        outlineO.classList.remove('choice-active');
        chooseXBtn.classList.remove('unselected-btn');
        chooseXBtn.classList.add('chosen');
        outlineX.classList.add('choice-active');
        outlineX.classList.remove('choice-inactive');
    }
});

//Event lister for O button choice.
chooseOBtn.addEventListener('click', () => {
    if(chooseOBtn.classList.contains('unselected-btn')) {
        chooseXBtn.classList.add('unselected-btn');
        chooseXBtn.classList.remove('chosen');
        outlineX.classList.add('choice-inactive');
        outlineX.classList.remove('choice-active');
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