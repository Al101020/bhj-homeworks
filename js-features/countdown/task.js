let spanTimer = Number(timer.innerHTML);
let spanTimer_ID;

function Timer() {
    spanTimer--;
    console.log(spanTimer);
    timer.innerHTML = spanTimer;

    if (spanTimer == 0) {
        clearInterval(spanTimer_ID);
        alert('Вы победили в конкурсе');
    }
}

spanTimer_ID = setInterval(Timer, 1000);

