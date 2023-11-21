const rotator__case = [...document.querySelectorAll('.rotator__case')]; // собрали в массив

let index_active = 0;

function changingPhrases() {
    for (let i = 0; i < rotator__case.length; i++) {
        rotator__case[i].setAttribute('class', 'rotator__case');
    };

    if (index_active < rotator__case.length) {
        rotator__case[index_active].setAttribute('class', 'rotator__case_active');
        index_active++;
    };

    if (index_active == rotator__case.length) {
        index_active = 0;
    };

    rotator__case[index_active].style.color = rotator__case[index_active].dataset.color // меняем цвет
}

setInterval(changingPhrases, rotator__case[index_active].dataset.speed);