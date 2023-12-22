let editor = document.getElementById('editor');

editor.oninput = function() {
  localStorage.setItem('text', editor.value);
};

if (localStorage.getItem('text')) { // страница встречая проверяет TEXT, если есть ВТАВЛЯЕТ. Если нет: ни чего ни делает.
    editor.value = localStorage.getItem('text');
}