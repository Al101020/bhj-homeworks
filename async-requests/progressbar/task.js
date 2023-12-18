const progress = document.getElementById( 'progress' );
// progress.value = 0.7; // работает(изменения видно)

const xhr = new XMLHttpRequest(); // Создаём новый объект XMLHttpRequest
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/upload') // создаем запрос с двумя аргументами method и url. При отсутствии аргумента async метод open создаёт запрос асинхронным по умолчанию
xhr.send() // запрос отправлен

xhr.addEventListener('readystatechange', () => { // Нужно подписаться на событие - на КАКОЕ?
    progress.value = xhr.upload;
});