const arrayButtomA = Array.from(document.querySelectorAll('div.book__control_font-size>a.font-size'));
const buttonSizeSmall = arrayButtomA[0];
const buttonSize = arrayButtomA[1];
const buttonSizeBig = arrayButtomA[2];

buttonSizeSmall.onclick = function() {
    document.getElementById('book').classList.remove('book_fs-small');
    document.getElementById('book').classList.remove('book_fs-big');
    document.getElementById('book').classList.toggle('book_fs-small');

    buttonSize.classList.remove('font-size_active');
    buttonSizeBig.classList.remove('font-size_active');
    buttonSizeSmall.classList.toggle('font-size_active');
    return false;
}

buttonSize.onclick = function() {
    document.getElementById('book').classList.remove('book_fs-small');
    document.getElementById('book').classList.remove('book_fs-big');
    
    buttonSizeBig.classList.remove('font-size_active');
    buttonSizeSmall.classList.remove('font-size_active');
    buttonSize.classList.toggle('font-size_active');
    return false;
}

buttonSizeBig.onclick = function() {
    document.getElementById('book').classList.remove('book_fs-small');
    document.getElementById('book').classList.remove('book_fs-big');
    document.getElementById('book').classList.toggle('book_fs-big');
    
    buttonSize.classList.remove('font-size_active');
    buttonSizeSmall.classList.remove('font-size_active');
    buttonSizeBig.classList.toggle('font-size_active');
    return false;
}

// Повышенный уровень сложности

const arrayButtomText = Array.from(document.querySelectorAll('div.book__control_color>a.color'));
const buttonTextBlack = arrayButtomText[0];
const buttonTextGray = arrayButtomText[1];
const buttonTextWhite = arrayButtomText[2];


buttonTextBlack.onclick = function() {
    document.getElementById('book').classList.remove('book_color-gray');
    document.getElementById('book').classList.remove('book_color-whitesmoke');
    document.getElementById('book').classList.toggle('book_color-black');

    buttonTextGray.classList.remove('color_active');
    buttonTextWhite.classList.remove('color_active');
    buttonTextBlack.classList.toggle('color_active');
    return false;
}

buttonTextGray.onclick = function() {
    document.getElementById('book').classList.remove('book_color-black');
    document.getElementById('book').classList.remove('book_color-whitesmoke');
    document.getElementById('book').classList.toggle('book_color-gray');

    buttonTextBlack.classList.remove('color_active');
    buttonTextWhite.classList.remove('color_active');
    buttonTextGray.classList.toggle('color_active');
    return false;
}

buttonTextWhite.onclick = function() {
    document.getElementById('book').classList.remove('book_color-black');
    document.getElementById('book').classList.remove('book_color-gray');
    document.getElementById('book').classList.toggle('book_color-whitesmoke');

    buttonTextBlack.classList.remove('color_active');
    buttonTextGray.classList.remove('color_active');
    buttonTextWhite.classList.toggle('color_active');
    return false;
}


const arrayButtomBackground = Array.from(document.querySelectorAll('div.book__control_background>a.color'));
const buttonBackgroundBlack = arrayButtomBackground[0];
const buttonBackgroundGray = arrayButtomBackground[1];
const buttonBackgroundWhite = arrayButtomBackground[2];


buttonBackgroundBlack.onclick = function() {
    document.getElementById('book').classList.remove('bg_color_gray');
    document.getElementById('book').classList.remove('bg_color_white');
    document.getElementById('book').classList.toggle('bg_color_black');

    buttonBackgroundGray.classList.remove('color_active');
    buttonBackgroundWhite.classList.remove('color_active');
    buttonBackgroundBlack.classList.toggle('color_active');
    return false;
}

buttonBackgroundGray.onclick = function() {
    
    document.getElementById('book').classList.remove('bg_color_black');
    document.getElementById('book').classList.remove('bg_color_white');
    document.getElementById('book').classList.toggle('bg_color_gray');

    buttonBackgroundBlack.classList.remove('color_active');
    buttonBackgroundWhite.classList.remove('color_active');
    buttonBackgroundGray.classList.toggle('color_active');
    return false;
}

buttonBackgroundWhite.onclick = function() {
    
    document.getElementById('book').classList.remove('bg_color_gray');
    document.getElementById('book').classList.remove('bg_color_black');
    document.getElementById('book').classList.toggle('bg_color_white');

    buttonBackgroundBlack.classList.remove('color_active');
    buttonBackgroundGray.classList.remove('color_active');
    buttonBackgroundWhite.classList.toggle('color_active');
    return false;
}