const as = document.querySelectorAll('a.has-tooltip');// выбрал все ссылки

let divs = [];

for (i = 0; i < as.length; i++) {
    
    let hint = document.createElement('div'); // создал переменную с тегом 'div' - продсказку
    hint.setAttribute('class', 'tooltip'); // добавил атрибут класс='tooltip' (в переменной)
    hint.setAttribute('data-position', 'top'); // добавил атрибут data-position='top' (в переменной)
    hint.textContent = as[i].title; // добавил видимый текст в тег (в переменной)

    as[i].insertAdjacentElement('afterEnd', hint); // добавляю за элементом "div" с текстом из title
    divs.push(as[i].nextSibling); // собираем массив из div

    as[i].addEventListener('click', (e) => {
        e.preventDefault();
        for (let index = 0; index < divs.length; index++) {
            divs[index].classList.remove('tooltip_active'); // сначала убираем у всех класс, убрать все подсказки
        };
        e.target.nextSibling.classList.toggle('tooltip_active');// меняем(переключаем) значение атрибута class, div - становится видно(подсказку)

        let coords = e.target.getBoundingClientRect();
        // console.log(coords);
        console.log(document.querySelector('.tooltip_active').getAttribute('data-position'));






        if (document.querySelector('.tooltip_active').getAttribute('data-position') == 'top' ) {
            console.log('сработала');
        };






        document.querySelector('.tooltip_active').style.left = coords.left + 'px';
        document.querySelector('.tooltip_active').style.top = coords.top + coords.height + 'px';

        // console.log(e.target.title); // выводим в консоль по какому элементу кликнули
    });
};

document.addEventListener('scroll', function() {        // при прокрутки мыши(scroll)
    for (let index = 0; index < divs.length; index++) {
        divs[index].classList.remove('tooltip_active'); //  у всех класс убрать - все подсказки
    };
});