// arr = [hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9];

// for(let i = 0; i < arr.length; i++){
//     function poleClick() {
//         console.log('Поле №' + [i + 1]);

//         if(document.getElementById('hole' + [i + 1]).className == 'hole hole_has-mole'){
//             console.log('попал'); //  проверил - попал в крота
//             document.getElementById('dead').textContent++; // добавил - Убито кротов + 1
//             if (document.getElementById('dead').textContent == 10) {  // условие победы
//                 alert('Ты победил');
//                 document.getElementById('dead').textContent = 0;  // скидываем счётчик - поподаний
//                 document.getElementById('lost').textContent = 0;  // скидываем счётчик - промахов
//             }
//         } else if(document.getElementById('hole' + [i + 1]).className == 'hole') {
//             console.log('промах'); //  проверил - промазал в крота
//             document.getElementById('lost').textContent++; // добавил - Промахов + 1
//             if (document.getElementById('lost').textContent == 5) {  // условие проигрыша
//                 alert('Ты проиграл');
//                 document.getElementById('dead').textContent = 0;  // скидываем счётчик - поподаний
//                 document.getElementById('lost').textContent = 0;  // скидываем счётчик - промахов
//             }
//         }
//     }

//     document.getElementById('hole' + [i + 1]).onclick = poleClick;
// }
    //         ЗАЧЁТ

// ===================================================================================================
// 2023/06/19 - а так правильно:

 const dead = document.getElementById('dead');
 const lost = document.getElementById('lost');
 const cell = document.getElementsByClassName('hole');      //псевдомассив ячеек
 const totalWins = 10;
 const totalLosses = 5;
 
 const resetScore = (message) => {
     dead.textContent = 0;
     lost.textContent = 0;
     alert(message);
 };
 
 Array.from(cell).forEach((item) => {         //преобразуем псевдомассив в массив и перебираем его
     item.onclick = () => {
         if (item.className.includes('hole hole_has-mole')) {
             dead.textContent++;
             if (+dead.textContent === totalWins) {
                 resetScore('Victory');
             }
         } else {
             lost.textContent++;
             if (+lost.textContent === totalLosses) {
                 resetScore('Defeat');
             }
         }
     };
 });

