const productPluss = [...document.querySelectorAll('.product__quantity-control_inc')]; // массив[кнопка плюс]

const productMinuss = [...document.querySelectorAll('.product__quantity-control_dec')]; // массив[кнопка минус]

const product = [...document.querySelectorAll('.product')]; // массив[продукт сколько товаров в магазине]

const btnPriductAdd = [...document.querySelectorAll('.product__add')]; // массив[кнопка добавить в корзину]

const divQuantity = [...document.querySelectorAll('.product__quantity-value')]; // массив[div - количество товара для добавления]

for (let i = 0; i < product.length; i++) { // перебираем массив из четырёх товаров

    productPluss[i].onclick = () => {
        if(divQuantity[i].textContent > 0) { // если больше 0, то плюсуем
            productPluss[i].parentElement.childNodes[3].textContent++
        };
    };

    productMinuss[i].onclick = () => {
        if(divQuantity[i].textContent > 1) { // если больше 1, то отнимаем
            productMinuss[i].parentElement.childNodes[3].textContent--
        };
    };

    btnPriductAdd[i].onclick = () => {
        console.log('КНОПКА: в корзину');
        let newCartProduct = document.createElement('div'); // создание 'div' (в переменной)
        newCartProduct.setAttribute('class', 'cart__product'); // добавил атрибут класс='cart__product' (в переменной)
        newCartProduct.dataset.id = Number([i]) + 1; // добавили атрибут data-id и значением(value) = номер по порядку

        newCartProduct.appendChild(product[i].children[1].cloneNode(true)) // клонировали 'img' (в переменной)
        newCartProduct.children[0].setAttribute('class', 'cart__product-image'); // изменил атрибут класс='cart__product-image' (в переменной)

        newCartProduct.appendChild(btnPriductAdd[i].parentElement.children[1].children[1].cloneNode(true)) // клонировали 'img' (в переменной)
        newCartProduct.children[1].setAttribute('class', 'cart__product-count'); // изменил атрибут класс='cart__product-count' (в переменной)

        const cartProducts = document.querySelector('div.cart__products'); // сама корзина
        const countProduct = [...document.querySelectorAll('.cart__product')]; // массив[продуктов в карзине]

        if (1 > countProduct.length) {
            console.log('товара в корзине ЕЩЁ нет');
            cartProducts.appendChild(newCartProduct); // добавляем товар в корзину
            return;
        } else if (countProduct.length > 0) {
            
            console.log('товар КАКОЙ-ТО в корзине имеется');
            console.log(countProduct);
            let nowCartProduct = document.querySelectorAll('.cart__product'); // что сейчас в корзине nowCartProduct

            for (let index = 0; index < countProduct.length; index++) {

                if (newCartProduct.dataset.id == countProduct[index].dataset.id) {

                    console.log('такой товар уже есть');
                    nowCartProduct[index].children[1].textContent = Number(nowCartProduct[index].children[1].textContent) + Number(newCartProduct.children[1].textContent);
                    return;
                }          
            }

            console.log('такого товара в корзине нет');
            cartProducts.appendChild(newCartProduct); // добавляем товар в корзину
        } 
    };
}