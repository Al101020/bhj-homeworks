const modal = document.getElementById('subscribe-modal');// localStorage.clear() // удалить все сохранения в localStorage
const modalClose = document.querySelector('.modal__close')

modalClose.onclick = () => {
    console.log('[X]');
    modal.className = 'modal';
}

if (localStorage.getItem('subscribe-modal') == 'Yes') {
    console.log('в localStorage имеестся запись что окно-subscribe-modal уже было показанно');
} else {
    modal.className = 'modal modal_active'; // Поменяли класс
    localStorage.setItem('subscribe-modal', 'Yes'); // Записали в localStorage
}