function hideElementById(id) {
    const element = document.getElementById(id);
    element.classList.add('hidden');
}

function showElementById(id) {
    const element = document.getElementById(id);
    element.classList.remove('hidden');
}

function getARandomAlphabet() {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * alphabets.length);
    return alphabets[randomIndex];
}

function setBackgroundColorById(id) {
    const element = document.getElementById(id);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(id) {
    const element = document.getElementById(id);
    element.classList.remove('bg-orange-400');
}

