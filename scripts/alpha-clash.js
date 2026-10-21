function continueGame() {
    const alphabet = getARandomAlphabet();
    const alphabetElement = document.getElementById('current-alphabet');
    
    alphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet)
}

function play() {
    hideElementById('home-screen');
    hideElementById('final-score-screen');
    showElementById('game-screen');
    
    document.getElementById('current-score').innerText = 0;
    document.getElementById('current-life').innerText = 4;

    continueGame();
}

function addScore() {
    let currentScore = Number(
        document.getElementById('current-score').innerText
    );

    currentScore++;

    document.getElementById('current-score').innerText = currentScore;
}

function gameOver() {
    hideElementById('game-screen');
    showElementById('final-score-screen');

    const currentAlphabet = document.getElementById('current-alphabet').innerText.toLowerCase();
    removeBackgroundColorById(currentAlphabet);

    document.getElementById('final-score').innerText = document.getElementById('current-score').innerText;
}

function loseLife() {
    let currentLives = Number(
        document.getElementById('current-life').innerText
    );

    currentLives--;

    document.getElementById('current-life').innerText = currentLives;

    if (currentLives === 0) {
        gameOver();
    }
}

function handleKeyPress(event) {
    const playerPressed = event.key;
    const currentAlphabet = document.getElementById('current-alphabet').innerText.toLowerCase();

    if (playerPressed === 'Escape') {
        gameOver();
        return;
    }

    if (playerPressed === currentAlphabet) {
        addScore();
        removeBackgroundColorById(currentAlphabet);
        continueGame();
    } else {
        loseLife()
    }
}

document.addEventListener('keyup', handleKeyPress)

