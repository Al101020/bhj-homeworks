const inputWindow = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputWindow.value.trim() !== '') {
        console.log('поле НЕ пустое');
        
        let newTaskTitle = document.createElement('div'); // создание 'div' (в переменной)
        newTaskTitle.setAttribute('class', 'task__title'); // добавил атрибут класс='task__title' (в переменной)
        newTaskTitle.textContent = inputWindow.value.trim()
        newTaskTitle.insertAdjacentHTML('beforeEnd', '<a href="#" class="task__remove">&times;</a>');

        let newTask = document.createElement('div'); // создание 'div'
        newTask.setAttribute('class', 'task'); // добавил атрибут класс='task' (в переменной)

        newTask.appendChild(newTaskTitle); // добавили div с классом task__title в newTask (в переменной)

        tasksList.appendChild(newTask); // добавили div с классом task в разметку(tasksList)
        
        const aClose = [...document.querySelectorAll('a.task__remove')];

        for (let i = 0; i < aClose.length; i++ ) {
            aClose[i].onclick = (e) => {
                e.target.parentElement.parentElement.remove()
            };
        };

    } else {
        alert('Введите задание');
    }

    inputWindow.value = '';
});
