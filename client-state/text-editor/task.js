let editor = document.getElementById('editor');

editor.oninput = function() {
  localStorage.setItem('text', editor.value);
};

editor.value = localStorage.getItem('text');