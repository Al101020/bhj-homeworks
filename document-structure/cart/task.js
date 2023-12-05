const productPluss = [...document.querySelectorAll('.product__quantity-control_inc')]; // массив[кнопка плюс]
const productMinuss = [...document.querySelectorAll('.product__quantity-control_dec')]; // массив[кнопка минус]
const product = [...document.querySelectorAll('.product')]; // массив[продукт]
const cartProducts = document.querySelector('.cart__products'); // div.cart>

const btnPriductAdd = [...document.querySelectorAll('.product__add')]; // массив[кнопка добавить в корзину]

for (let i = 0; i < product.length; i++) {
    productPluss[i].onclick = () => {productPluss[i].parentElement.childNodes[3].textContent++};
    productMinuss[i].onclick = () => {productMinuss[i].parentElement.childNodes[3].textContent--};
    btnPriductAdd[i].onclick = () => {
        console.log('КНОПКА: в корзину');
        let newCart__product = document.createElement('div'); // создание 'div' (в переменной)
        newCart__product.setAttribute('class', 'cart__product'); // добавил атрибут класс='cart__product' (в переменной)
        newCart__product.dataset.id = Number([i]) + 1; // добавили атрибут data-id и значением(value) = номер по порядку

        newCart__product.appendChild(product[i].children[1].cloneNode(true)) // клонировали 'img' (в переменной)
        newCart__product.children[0].setAttribute('class', 'cart__product-image'); // изменил атрибут класс='cart__product-image' (в переменной)

        newCart__product.appendChild(btnPriductAdd[i].parentElement.children[1].children[1].cloneNode(true)) // клонировали 'img' (в переменной)
        newCart__product.children[1].setAttribute('class', 'cart__product-count'); // изменил атрибут класс='cart__product-count' (в переменной)

        cartProducts.appendChild(newCart__product);
    };
}