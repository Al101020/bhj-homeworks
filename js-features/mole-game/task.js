arr = [hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9];

for(let i = 0; i < arr.length; i++){
    function poleClick() {
        console.log('Поле №' + [i + 1]);

        if(document.getElementById('hole' + [i + 1]).className == 'hole hole_has-mole'){
            console.log('попал'); //  проверил - попал в крота
            document.getElementById('dead').textContent++; // добавил - Убито кротов + 1
            if (document.getElementById('dead').textContent == 10) {  // условие победы
                alert('Ты победил');
                document.getElementById('dead').textContent = 0;  // скидываем счётчик - поподаний
                document.getElementById('lost').textContent = 0;  // скидываем счётчик - промахов
            }
        } else if(document.getElementById('hole' + [i + 1]).className == 'hole') {
            console.log('промах'); //  проверил - промазал в крота
            document.getElementById('lost').textContent++; // добавил - Промахов + 1
            if (document.getElementById('lost').textContent == 5) {  // условие проигрыша
                alert('Ты проиграл');
                document.getElementById('dead').textContent = 0;  // скидываем счётчик - поподаний
                document.getElementById('lost').textContent = 0;  // скидываем счётчик - промахов
            }
        }
    }

    document.getElementById('hole' + [i + 1]).onclick = poleClick;
}

//___________________ // кликаешь - в консоль выдаёт попал или промазал

// arr = [hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9];

// for(let i = 0; i < arr.length; i++){
//     function poleClick() {
//         console.log('Поле №' + [i + 1]);

//         if(document.getElementById('hole' + [i + 1]).className == 'hole hole_has-mole'){
//             console.log('попал'); //  проверил - попал в крота
//             document.getElementById('dead').textContent++; // добавил - Убито кротов + 1
//         } else if(document.getElementById('hole' + [i + 1]).className == 'hole') {
//             console.log('промах'); //  проверил - промазал в крота
//             document.getElementById('lost').textContent++;
//         }
//     }
//     document.getElementById('hole' + [i + 1]).onclick = poleClick;

// }
//________________ //document.getElementById('hole5').className == 'hole hole_has-mole'
// arr = [hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9];

// for(let i = 0; i < arr.length; i++){
    
//     document.getElementById('hole' + i).onclick = poleClick;
    
//     function poleClick() {
//         console.log('Поле №' + [i + 1])
//         if(document.getElementById('hole' + i).className == 'hole hole_has-mole') {
//             console.log('попал')
//         }
//     }

// }

// __________________________
// arr = [hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9];

// // function pole1Click() {
// //     console.log('Поле №1')
// // }

// for(let i = 0; i < arr.length; i++){
//     function poleClick() {
//         console.log('Поле №' + [i + 1])
//     }
//     document.getElementById('hole' + [i + 1]).onclick = poleClick; //console.log('pole - ' + i + 1);

//     // console.log(arr[i]);
//     // hole[i].onclick = console.log('pole - ' + [i]);
//     // if(document.getElementById('hole' + i).onclick) {
//     //     console.log('pole - ' + [i]);
//     // }
    
// }

//______________________________
// let arr = [hole1.className, hole2.className, hole3.className, hole4.className, hole5.className, hole6.className, hole7.className, hole8.className, hole9.className];




// document.getElementsByClassName('div.hole').onclick = ClickToPole;// не прокатил


//  document.getElementById('hole1').onclick = ClickToPole; // равноценна hole1.onclick = ClickToPole;


// hole2.onclick = ClickToPole;
// hole3.onclick = ClickToPole;
// hole4.onclick = ClickToPole;
// hole5.onclick = ClickToPole;
// hole6.onclick = ClickToPole;
// hole7.onclick = ClickToPole;
// hole8.onclick = ClickToPole;
// hole9.onclick = ClickToPole;

// hole1.onclick = ClickToPole;

// let arr = [hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9];

// function verification(){
//     for(let i = 0; i < arr.length; i++){

//     }
// }

// function ClickToPole() {

//     console.log(arr);   

//     // console.log('click')
// }
