const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close')

let cookieName = 'subscribeModal';
let cookieValue = 'Yes';

modalClose.addEventListener('click', () => {
    console.log('[X]');
    modal.className = 'modal';
    document.cookie = encodeURIComponent(cookieName) + '=' + encodeURIComponent(cookieValue); SameSite=None //  SameSite=None - этот атрибут попросил поставить Forefox(с ним работает)
})

// function getCookie(name) {
//   const pairs = document.cookie.split('; ');
//   console.log(pairs);
//   const cookie = pairs.find(p => p.startsWith(name + '='));
//   console.log(name.length);
//   console.log(cookie);
//   return cookie.substr(name.length + 1); //                      substr - не работает
// }

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

if(getCookie('subscribeModal') == "Yes") {
    console.log('в cookie имеестся запись что окно-subscribe-modal уже было показанно');
} else {
    modal.className = 'modal modal_active'; // Поменяли класс    
}