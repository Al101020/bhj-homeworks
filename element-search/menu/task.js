
document.querySelectorAll('.menu__link')[1].onclick = () => { // не сработала - пропадает
        console.log('ку-ку');
        document.querySelectorAll('ul')[1].className = 'menu menu_sub menu_active';
    }

// document.querySelectorAll('ul')[1].className = 'menu menu_sub menu_active'; // если в консоли: меню появляется.









// Array.from(document.querySelectorAll('a.menu__link'))[1].onclick = () => { // не сработала
//         console.log('ку-ку');
//         document.querySelectorAll('ul')[1].className = 'menu menu_sub menu_active';
//     }






// 2023.06.26 _____________________________________________________________________________________________________
// Спасибо за присланную работу.
// Слайдер и модалки решены верно. А вот менюшку нужно немного допилить.
// Сейчас при клике срабатывает стандартное поведение на клик по ссылке и оно рефрешит страницу.
// Очень сложная конструкция. Почему бы просто не написать: document.querySelectorAll('.slider__item') А если вам нужно только img, то у этих тегов тоже есть свой класс.
// Вносите правки в менюшку и снова закидывайте на проверку.

// //    РАЗОБРАТЬ - Array.from(document.querySelectorAll('a.menu__link'))[0].parentElement.childNodes[1].className;


// // Array.from(document.querySelectorAll('a.menu__link')).forEach((item) => {
// //     item.onclick = () => {
// //         if (item.parentElement.className == 'menu') {
// //             item.parentElement.className = 'menu menu_sub menu_active';
// //         // if (document.querySelectorAll('ul')[1].className = 'menu') {
// //             console.log('item.parentElement.className = menu');
// //         }
// //         console.log(item.textContent);
// //     }
// // });


// //_____________________________________
// // работает, но всёравно пропадает.

// Array.from(document.querySelectorAll('a.menu__link')).forEach((item) => {
//     item.onclick = () => {
//         if(item.textContent == 'О компании') {
//             console.log(item.parentElement.childNodes[3]);//('ul').className);
//             item.parentElement.childNodes[3].className = 'menu menu_sub menu_active';
//             // document.querySelectorAll('ul')[1].className = 'menu menu_sub menu_active';
//             // alert(item.parentElement.childNodes[3].className);
//             // console.log(item.textContent);
//         }
//         if(item.textContent == 'Услуги') {
//             document.querySelectorAll('ul')[2].className = 'menu menu_sub menu_active';
//             // alert(item.parentElement.childNodes[3].className);//.parentElement.childNodes.tagName);//[0].className);
//             // console.log(item.textContent);
//         }
//     }
// }); 

// // let aa = Array.from(document.querySelectorAll('a.menu__link')); // массив - 9 шт.
// // document.querySelectorAll('a.menu__link') // - выдаёт 9 шт

// //_______________________________________
//   // Почему выподающее меню пропадает

// // function menu_oCompany(){
// //     document.querySelectorAll('ul')[1].className = 'menu menu_sub menu_active'
// // }

// // document.querySelectorAll('a.menu__link')[1].onclick = menu_oCompany;

// // function menu_services(){
// //     return document.querySelectorAll('ul')[2].className = 'menu menu_sub menu_active';
// // }

// // document.querySelectorAll('a.menu__link')[5].onclick = menu_services;



  