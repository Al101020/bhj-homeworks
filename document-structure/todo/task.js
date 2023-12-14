const inputWindow = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputWindow.value.trim() !== '') {
        tasksList.insertAdjacentHTML('beforeEnd', '<div class="task"></div>'); // добавили первую пустую задачу
        tasks = [...tasksList.querySelectorAll('div.task')]; // собрали все задачи в массив
        tasks[tasks.length-1].insertAdjacentHTML('beforeEnd', '<div class="task__title"></div>'); // в последнюю задачу добавили div с классаом task__title
        tasks[tasks.length-1].querySelector('div.task__title').textContent = inputWindow.value.trim(); // в последнюю задачу добавили название задачи
        tasks[tasks.length-1].insertAdjacentHTML('beforeEnd', '<a href="#" class="task__remove">&times;</a>'); //// в последнюю задачу вставили крестик - закрыть

        const aClose = [...document.querySelectorAll('a.task__remove')];

        for (let i = 0; i < aClose.length; i++ ) {
            if (i == aClose.length - 1) {
                aClose[i].onclick = (e) => {
                    e.target.parentElement.remove() // удаляем задачу по клику
                };
            };
        };
    } else {
        alert('Введите задание');
    }
    inputWindow.value = '';
});