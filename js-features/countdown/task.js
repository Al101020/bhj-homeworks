let spanTimer = Number(document.getElementById('timer').textContent);
let spanTimer_ID;

function Timer() {
    spanTimer--;

    document.getElementById('timer').textContent = spanTimer;

    if (spanTimer == 0) {
        clearInterval(spanTimer_ID);
        alert('Вы победили в конкурсе');
    }
}

spanTimer_ID = setInterval(Timer, 1000);
