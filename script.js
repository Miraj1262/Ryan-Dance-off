
let score = 0;
document.getElementById('start-button').addEventListener('click', () => {
    const instructions = document.getElementById('dance-instructions');
    instructions.innerText = 'Use Arrow Keys to Dance!';
    window.addEventListener('keydown', handleKeyPress);
});

function handleKeyPress(event) {
    const instructions = document.getElementById('dance-instructions');
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        score += 10;
        document.getElementById('score').innerText = score;
        instructions.innerText = 'Great Move!';
    } else {
        instructions.innerText = 'Wrong Key!';
    }
}
