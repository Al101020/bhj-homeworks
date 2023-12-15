const inputWindow = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

let aClose;

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputWindow.value.trim() !== '') {
        let newTaskTitle = document.createElement('div'); // создание 'div' (в переменной)
        newTaskTitle.setAttribute('class', 'task__title'); // добавил атрибут класс='task__title' (в переменной)
        newTaskTitle.textContent = inputWindow.value.trim();

        let newTask = document.createElement('div'); // создание ещё 'div'
        newTask.setAttribute('class', 'task'); // добавил атрибут класс='task' (в переменной)
        newTask.appendChild(newTaskTitle); // вставили div с классом task__title в div с классом task (в переменной)
        newTask.insertAdjacentHTML('beforeEnd', '<a href="#" class="task__remove">&times;</a>'); // вставили крестик закрыть

        tasksList.appendChild(newTask); // добавили div с классом task в разметку(tasksList)

        aClose = [...document.querySelectorAll('a.task__remove')];
        aClose[aClose.length - 1].onclick = (e) => {
            e.target.parentElement.remove() // удаляем задачу по клику
        };
    } else {
        alert('Введите задание');
    }
    inputWindow.value = '';
});