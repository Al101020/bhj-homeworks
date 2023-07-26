let tab = document.querySelectorAll('div.tab');
let content = document.querySelectorAll('div.tab__content');

tab[0].onclick = function() {
    // alert('Главная');
    tab[0].className = 'tab tab_active';
    content[0].className = 'tab__content tab__content_active';
    tab[1].className = 'tab';
    content[1].className = 'tab__content'; //  было(исправил): content[1].className = 'div.tab__content';
    tab[2].className = 'tab';
    content[2].className = 'tab__content'; //  было(исправил): content[2].className = 'div.tab__content';
}

tab[1].onclick = function() {
    // alert('Обо мне');
    tab[0].className = 'tab';
    content[0].className = 'tab__content';
    tab[1].className = 'tab tab_active';
    content[1].className = 'tab__content tab__content_active';
    tab[2].className = 'tab';
    content[2].className = 'tab__content';
}

tab[2].onclick = function() {
    // alert('Контакты');
    tab[0].className = 'tab';
    content[0].className = 'tab__content';
    tab[1].className = 'tab';
    content[1].className = 'tab__content';
    tab[2].className = 'tab tab_active';
    content[2].className = 'tab__content tab__content_active';
}



