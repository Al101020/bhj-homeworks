const as = [...document.querySelectorAll('a.has-tooltip')];// выбрал все ссылки

let divs = [];

for (let i = 0; i < as.length; i++) {
    let hint = document.createElement('div'); // создал переменную с тегом 'div' - продсказку
    hint.setAttribute('class', 'tooltip'); // добавил атрибут класс='tooltip' (в переменной)
    hint.setAttribute('data-position', 'top'); // добавил атрибут data-position='top' (в переменной)
    hint.textContent = as[i].title; // добавил видимый текст в тег (в переменной)

    as[i].insertAdjacentElement('afterEnd', hint); // добавляю за элементом "div" с текстом из title
    divs.push(as[i].nextSibling); // собираем массив из div

    as[i].addEventListener('click', (e) => {
        e.preventDefault();
        let coordsAs = as[i].getBoundingClientRect();
        divs[i].style.left = coordsAs.left + 'px'; // позиционирую под текстом
        divs[i].classList.toggle('tooltip_active');// меняем(переключаем) значение атрибута class, div - становится видно(подсказку)
    });

    document.addEventListener('scroll', function() {        // при прокрутки мыши(scroll)
        for (let index = 0; index < divs.length; index++) {
            divs[i].classList.remove('tooltip_active'); //  у всех класс убрать - все подсказки
        };
    });
}