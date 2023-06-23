document.getElementById('modal_main').className = 'modal modal_active';

function window_close() {
    console.log('Окно "Сделать хорошо" закрываем и открываем "Хорошо сделано!"');
    document.getElementById('modal_main').className = 'modal';
    document.getElementById('modal_success').className = 'modal modal_active';
};

function window_betterNot() {
    console.log('Лучше некуда');
};

Array.from(document.getElementsByClassName('btn btn_danger modal__close show-success'))[0].onclick = window_close;  // псевдо массив переводим в массив и назначаем событие - работает - при нажатии на "Сделать хорошо"
Array.from(document.getElementsByClassName('btn btn_success'))[0].onclick = window_betterNot;  // псевдо массив переводим в массив и назначаем событие - работает - при нажатии на "Сделать хорошо"

Array.from(document.getElementsByClassName('modal__close modal__close_times')).forEach((item) => {
    item.onclick = () => {
        console.log('[X]');
        document.getElementById('modal_success').className = 'modal';
        document.getElementById('modal_main').className = 'modal';
    }
});  // псевдо массив переводим в массив и перебираем - работает - при нажатии на "[X]"

