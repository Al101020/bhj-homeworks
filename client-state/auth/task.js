const form = document.getElementById('signin__form');

let response; // суда сохраним ответ
let userId = document.getElementById('user_id'); // соханёный - полученый от сервера номер пользователя
let signin = document.getElementById('signin'); // div который содержит id='signin'.(вход)
let welcome = document.getElementById('welcome'); // div который содержит id='welcome'.(Добро пожаловать)

if(localStorage.userId && localStorage.userId != 'undefined') {
    userId.textContent = localStorage.getItem('userId');
    welcome.className = 'welcome welcome_active';
    signin.className = 'signin';
}

form.addEventListener('submit', (el) => {
    el.preventDefault();
    
    const xhr = new XMLHttpRequest(); // Создаём новый объект XMLHttpRequest

    xhr.addEventListener('load', () => {

        response = xhr.response; // ответ в переменную

        if(response.success == false) {
            alert('Не правильно ввели, повторите ещё раз');
            return;
        }
        
        localStorage.setItem('userId', response.user_id); // id-ответа записали в localStorage
            
        userId.textContent = localStorage.getItem('userId');
        welcome.className = 'welcome welcome_active';
        signin.className = 'signin';
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    const formData = new FormData(form);
    xhr.responseType = 'json'; // что бы пототом ответ не парсить (JSON.parse())
    xhr.send(formData);
    form.reset(); // обнуляем форму    // form.login.value = '';    // form.password.value = '';    // localStorage.clear()
});