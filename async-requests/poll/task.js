const divQuestion = document.getElementById('poll__title');
const divResponses = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest(); // Создаём новый объект XMLHttpRequest
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll') // создаем запрос с двумя аргументами method и url. При отсутствии аргумента async метод open создаёт запрос асинхронным по умолчанию
xhr.send() // запрос отправлен

let question; // вопрос
let arrResponses; // массив ответов
// let 

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE){ // если загрузка завершина

        console.log('Загрузка ЗАВЕРШЕНА');

        question = JSON.parse(xhr.responseText).data.title; // сам вопрос
        divQuestion.textContent = question; // вставили вопрос

        arrResponses = JSON.parse(xhr.responseText).data.answers; // массив ответов
        arrResponses.forEach(element => {
            divResponses.insertAdjacentHTML('beforeEnd', '<button class="poll__answer"></button>'); // вставили button-ответ
            console.log(element);
            document.querySelectorAll('.poll__answer')[document.querySelectorAll('.poll__answer').length - 1].textContent = element;
            document.querySelectorAll('.poll__answer')[document.querySelectorAll('.poll__answer').length - 1].addEventListener('click', (e) => {
                e.preventDefault();
                alert('Спасибо, ваш голос засчитан!');
            });
        });

        console.log(question);
        console.log(arrResponses);

    }
});