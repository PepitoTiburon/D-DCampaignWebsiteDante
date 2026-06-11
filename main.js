let currentCard = null;
let startX = 0;
let startY = 0;

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousedown', mouseDown);
});

function mouseDown(e) {
    currentCard = e.currentTarget;

    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
}

function mouseMove(e) {
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    currentCard.style.left =
        (currentCard.offsetLeft + dx) + 'px';

    currentCard.style.top =
        (currentCard.offsetTop + dy) + 'px';

    startX = e.clientX;
    startY = e.clientY;
}

function mouseUp() {
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
    currentCard = null;
}

