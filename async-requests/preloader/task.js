const items = document.getElementById('items');
const img = document.querySelector('img');
let valutaArr;

const xhr = new XMLHttpRequest(); // Создаём новый объект XMLHttpRequest
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses') // создаем запрос с двумя аргументами method и url. При отсутствии аргумента async метод open создаёт запрос асинхронным по умолчанию
xhr.send() // запрос отправлен

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE){ // если загрузка завершина
        img.className = 'loader'; // выключаем рисунок загрузки
        let valuta = JSON.parse(xhr.responseText).response.Valute
        valutaArr = Object.entries(valuta).forEach((element) => {
            items.insertAdjacentHTML('beforeEnd', '<div class="item"><div class="item__code"></div><div class="item__value"></div><div class="item__currency">руб.</div></div>'); // вставили к  
            document.querySelectorAll('.item__code')[document.querySelectorAll('.item__code').length-1].textContent = element[1].CharCode;
            document.querySelectorAll('.item__value')[document.querySelectorAll('.item__value').length-1].textContent = element[1].Value;
        });
    }
});