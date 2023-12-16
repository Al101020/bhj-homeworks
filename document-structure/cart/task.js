const productPluss = [...document.querySelectorAll('.product__quantity-control_inc')]; // массив[кнопка плюс]
const productMinuss = [...document.querySelectorAll('.product__quantity-control_dec')]; // массив[кнопка минус]
const product = [...document.querySelectorAll('.product')]; // массив[продукт сколько товаров в магазине]
const btnPriductAdd = [...document.querySelectorAll('.product__add')]; // массив[кнопка добавить в корзину]
const divQuantity = [...document.querySelectorAll('.product__quantity-value')]; // массив[div - количество товара для добавления]

let cartProducts = document.querySelector('div.cart__products'); // сама корзина
let countProduct; // массив[продуктов в карзине]

for (let i = 0; i < product.length; i++) { // перебираем массив из четырёх товаров

    productPluss[i].onclick = () => {
        if(divQuantity[i].textContent > 0) { // если больше 0, то плюсуем
            product[i].querySelector('.product__quantity-value').textContent++
        };
    };
    productMinuss[i].onclick = () => {
        if(divQuantity[i].textContent > 1) { // если больше 1, то отнимаем
            product[i].querySelector('.product__quantity-value').textContent--
        };
    };

    btnPriductAdd[i].onclick = () => {
        let newCartProduct = document.createElement('div'); // создание 'div' (в переменной)
        newCartProduct.setAttribute('class', 'cart__product'); // добавил атрибут класс='cart__product' (в переменной)
        newCartProduct.dataset.id = Number([i]) + 1; // добавили атрибут data-id и значением(value) = номер по порядку

        newCartProduct.appendChild(product[i].querySelector('img').cloneNode(true)) // клонировали 'img' (в переменной)
        newCartProduct.querySelector('img').setAttribute('class', 'cart__product-image'); // изменил атрибут класс='cart__product-image' (в переменной)

        newCartProduct.appendChild(product[i].querySelector('div.product__quantity-value').cloneNode(true)) // клонировали 'img' (в переменной)
        newCartProduct.querySelector('div').setAttribute('class', 'cart__product-count'); // изменил атрибут класс='cart__product-count' (в переменной)

        countProduct = [...document.querySelectorAll('.cart__product')]; // массив[продуктов в карзине]
        let addItem = countProduct.find((el) => {return el.dataset.id == newCartProduct.dataset.id}); // добовляемый товар в корзину(проверяем добовляемый товар == есть ли в корзине) 
        
        if (addItem) {
            if (newCartProduct.dataset.id == addItem.dataset.id) {
                addItem.querySelector('div').textContent = Number(addItem.querySelector('div').textContent) + Number(newCartProduct.children[1].textContent);
                return;
            }
        }
        cartProducts.appendChild(newCartProduct); // добавляем товар в корзину
    }
};