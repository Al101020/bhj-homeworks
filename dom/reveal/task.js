const reveal = document.querySelectorAll('.reveal');
const reveal1 = reveal[0];
const reveal2 = reveal[1];

function isVisible(el) {
    const {top, bottom} = el.getBoundingClientRect();

    if (bottom < 0) {
        el.classList.remove('reveal_active');
    };

    if (top > window.innerHeight) {
        el.classList.remove('reveal_active');
    };

    if (el.classList.contains('reveal_active') == false) {
        el.classList.toggle('reveal_active');
    };
}

setInterval(() => {
    isVisible(reveal1);
    isVisible(reveal2);
}, 1000)