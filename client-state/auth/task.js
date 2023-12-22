let response; // ответ
let signin = document.getElementById('signin');
let welcome = document.getElementById('welcome');
let userId = document.getElementById('user_id');

if(localStorage.userId) {
    userId.textContent = localStorage.getItem('userId');
    welcome.className = 'welcome welcome_active';
    signin.className = 'signin';
}

document.getElementById('signin__form').addEventListener('submit', (el) => {
    el.preventDefault();
    if(document.getElementById('signin__form').login.value !== 'demo' || document.getElementById('signin__form').password.value !== 'demo') {
        alert('Неверный логин/пароль');
    }
    
    const xhr = new XMLHttpRequest(); // Создаём новый объект XMLHttpRequest

    xhr.addEventListener('load', () => {
        
        if (xhr.status === 201) {
            console.log(JSON.parse(xhr.response).user_id);// ответ
            response = JSON.parse(xhr.response); // ответ в переменную
            localStorage.setItem('userId', response.user_id); // id-ответа записали в localStorage
            
            userId.textContent = localStorage.getItem('userId');
            welcome.className = 'welcome welcome_active';
            signin.className = 'signin';

        } else if (xhr.status != 201) { // анализируем HTTP-статус ответа, если статус не 201, то возможно произошла ошибка
            alert(`Статус ответа - ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
        }
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

    const formData = new FormData(document.getElementById('signin__form'));

    xhr.send(formData);

    document.getElementById('signin__form').login.value = '';
    document.getElementById('signin__form').password.value = '';
});