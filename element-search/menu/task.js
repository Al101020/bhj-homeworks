// --------------------2023.08.17-------- 
const menuLinks = [...document.querySelectorAll('.menu__link')];
const onclick = e => {
    const link = e.target;
        console.log(link);
    const href = link.href;
        console.log(href);
    const item = link.closest('.menu__item');
        console.log(item);
    const menu = item.querySelector('.menu_sub');
        console.log(menu);    
    if(!menu){
        return;
    };
    // const mainMenu = item.closest('.menu-main');
    // const restMenus = [...mainMenu.querySelectorAll('.menu')]
    //     .forEach(m => m.clasList.remove('.menu_active'));

    // menu.classList.add('menu_active');

    console.log('СРАБОТАЛА');
    // console.log({ href});

    e.preventDefault();    
};

menuLinks.forEach(link => link.addEventListener('click', onclick));




// --------------------2023.08.16-------- НЕ пропадает
// const menuLinks = [...document.querySelectorAll('.menu__link')];
// const onclick = e => {
//     const link = e.target;
//     const href = link.href;
//     console.log({ href});
//     console.log('СРАБОТАЛА');

//     const item = link.closest('.menu__item');

//     e.preventDefault();                                                    // в консоли не пропадает 'СРАБОТАЛА'
//     // return false;                                                       // - 'СРАБОТАЛА' пропадает
// };

// menuLinks.forEach(link => link.addEventListener('click', onclick));






// --------------------2023.08.15-------- пропадает
// const menuLinks = [...document.querySelectorAll('.menu__link')];
// const onClick = e => {
//     const link = e.target;
//     const item = link.closest('.menu__item');
//     const menu = item.querySelector('.menu__sub');
//     if(!menu){
//         return;
//     }
//     menu.classList.toggle('menu_active');

//     e.preventDefault();
//     //return false;                                                       // - меню не пропадает, или e.preventDefault(); - ?
// };

// menuLinks.forEach(link => link.addEventListener('click', onClick));