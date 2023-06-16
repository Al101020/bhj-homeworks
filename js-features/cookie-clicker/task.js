let totalClicks = document.getElementById("clicker__counter");

const imageCookies = document.getElementById("cookie");

    let clickNext = 0;


function changeSizes_plusOne() {
    let clickNow = new Date().getTime();

    if (clickNext !== 0) {
        speed_click.textContent = (1 / ((clickNow - clickNext)/1000)).toFixed(2);        
    }
    clickNext = clickNow;


    if(Number(totalClicks.textContent) % 2 == 0){
        imageCookies.width="210";
    } else {
        imageCookies.width="200";
    }
    totalClicks.textContent++;
};

imageCookies.onclick = changeSizes_plusOne;
