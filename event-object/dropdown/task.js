document.getElementsByClassName('dropdown__value')[0].onclick = () => {
    document.querySelectorAll('ul')[0].className = 'dropdown__list dropdown__list_active';
}

document.querySelectorAll('.dropdown__item')[0].onclick = () => {
    document.querySelectorAll('ul')[0].className = 'dropdown__list';
    document.getElementsByClassName('dropdown__value')[0].textContent = document.querySelectorAll('a.dropdown__link')[0].textContent;
    return false;
}

document.querySelectorAll('.dropdown__item')[1].onclick = () => {
    document.querySelectorAll('ul')[0].className = 'dropdown__list';
    document.getElementsByClassName('dropdown__value')[0].textContent = document.querySelectorAll('a.dropdown__link')[1].textContent;
    return false;
}

document.querySelectorAll('.dropdown__item')[2].onclick = () => {
    document.querySelectorAll('ul')[0].className = 'dropdown__list';
    document.getElementsByClassName('dropdown__value')[0].textContent = document.querySelectorAll('a.dropdown__link')[2].textContent;
    return false;
}

document.querySelectorAll('.dropdown__item')[3].onclick = () => {
    document.querySelectorAll('ul')[0].className = 'dropdown__list';
    document.getElementsByClassName('dropdown__value')[0].textContent = document.querySelectorAll('a.dropdown__link')[3].textContent;
    return false;
}
