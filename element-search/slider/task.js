let divImage = Array.from(document.querySelectorAll('div.slider__items')[0].childNodes).filter((item) => item.className == 'slider__item' || item.className == 'slider__item slider__item_active' ); //;
imglength = divImage.length;

let left_right = Array.from(document.querySelector('div.slider__arrows').childNodes).filter((item) => item.className == 'slider__arrow slider__arrow_prev' || item.className == 'slider__arrow slider__arrow_next' );

let ActivDivImage = null;
let nextDivImage = null;

function goLeft() {
    for(i = imglength - 1; i >= 0; i--){
        if(divImage[i].className == 'slider__item slider__item_active'){
            divImage[i].className = 'slider__item';
            i--;
            if(i < 0){
                i = imglength - 1;
            }
            divImage[i].className = 'slider__item slider__item_active';
        }
    }
}

left_right[0].onclick = goLeft;

function goRight() {
    for (i = 0; imglength > i; i++) {
        if (divImage[i].className == 'slider__item slider__item_active') {
            divImage[i].className = 'slider__item';
            i++;
            if (i >= imglength){
                i = 0;
            }
            divImage[i].className = 'slider__item slider__item_active';
        }
    }
}

left_right[1].onclick = goRight;








// let divImage = Array.from(document.querySelectorAll('div.slider__items')[0].childNodes).filter((item) => item.className == 'slider__item' || item.className == 'slider__item slider__item_active' ); //;

// Array.from(document.getElementsByClassName('slider__arrow slider__arrow_prev')).onclick = goLeft;
// left.onclick = goLeft;

// let aaa = document.querySelectorAll('div.slider__items')[0].childNodes.filter(checkingElement);

// let image = document.querySelectorAll('img.slider__image');
// let aaa = document.querySelectorAll('div.slider__items')[0].childNodes; // 
// // let aa = document.getElementsByTagName('div')[1].childNodes[1].childNodes;
// let aa = document.getElementsByTagName('div')[1];
// // let aa = document.querySelectorAll('div.slider__items')[0].childNodes.getElementsByTagName('div');
// console.log(aaa);

//__________________________________
// [1,2,3,4,5,6,7].filter((n) => n);
// (7) [1, 2, 3, 4, 5, 6, 7]
// Array.from(aaa).filter((n) => n);
// (11) [text, div.slider__item.slider__item_active, text, div.slider__item, text, div.slider__item, text, div.slider__item, text, div.slider__item, text]