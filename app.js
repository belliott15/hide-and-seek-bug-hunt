// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const boulderButton = document.getElementById('boulder-container');
const treeButton = document.getElementById('tree-container');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total-games');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = [
    'tree',
    'shed',
    'boulder'
];

let correctGuesses = 0;
let totalGuesses = 0;

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);

    return arr[index];
}

function handleGuess(correctSpot, userGuess) {
    resetStyles();
    totalGuesses++;

    const correctHidingPlaceEl = document.getElementById(`${correctSpot}-container`);

    correctHidingPlaceEl.classList.add('face');

    if (userGuess === correctSpot) {
        correctGuesses++;
    }

    totalEl.textContent = totalGuesses;
    winsEl.textContent = correctGuesses;

}

function resetStyles() {
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
}

shedButton.addEventListener('click', () => {
    let correctSpot = getRandomItem(hidingPlaces);

    handleGuess(correctSpot, 'shed');  
});

treeButton.addEventListener('click', () => {
    let correctSpot = getRandomItem(hidingPlaces);

    handleGuess(correctSpot, 'tree');  
});

boulderButton.addEventListener('click', () => {
    let correctSpot = getRandomItem(hidingPlaces);

    handleGuess(correctSpot, 'boulder');  
});
