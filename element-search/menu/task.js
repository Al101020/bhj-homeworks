document.querySelectorAll('.menu__link')[1].onclick = () => {
    document.querySelectorAll('ul')[1].className = 'menu menu_sub menu_active';
    document.querySelectorAll('ul')[2].className = 'menu menu_sub';
    document.querySelectorAll('ul')[1].className.setTimeout
    return false;                                                       // - меню не пропадает
}

document.querySelectorAll('.menu__link')[2].onclick = () => false;
document.querySelectorAll('.menu__link')[3].onclick = () => false;
document.querySelectorAll('.menu__link')[4].onclick = () => false;

document.querySelectorAll('.menu__link')[5].onclick = () => {
    document.querySelectorAll('ul')[2].className = 'menu menu_sub menu_active';
    document.querySelectorAll('ul')[1].className = 'menu menu_sub';
    return false;
}

document.querySelectorAll('.menu__link')[6].onclick = () => false;
document.querySelectorAll('.menu__link')[7].onclick = () => false;