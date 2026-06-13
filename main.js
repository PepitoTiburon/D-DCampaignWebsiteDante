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

const audio = new Audio("Audios/CatHurt.mp3");

    document.getElementById("KickCat").addEventListener("click", () => {

        fetch("https://discord.com/api/webhooks/1515220031074472027/kZDYDol3Uuxp-G4LYdJZ5kRRO1EeFB8gl9pEWLB80t3Cm8VyGk0ZUpqHVKgYIrS-JA-i", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({
                content: "🐱💥 Alguien pateó al gato!"
            })
        });

        audio.play();

        audio.onended = () => {
            window.location.href = "MercenaryQB.html";
        };
    });

const lockScreen = document.getElementById("lockScreen");
const lockBTN = document.getElementById("lockBTN");

lockBTN.addEventListener("click", (event) => {
    event.preventDefault(); // stops form refresh

    lockScreen.style.transform = "translateY(-100vh)";

    setTimeout(() => {
        lockScreen.remove();
    }, 500);
});
